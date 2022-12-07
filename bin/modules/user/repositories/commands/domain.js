

// const nconf = require('nconf');
const command = require('./command');
const model = require('./command_model');
const query = require('../queries/query');
const wrapper = require('../../../../helpers/utils/wrapper');
const config = require('../../../../infra/configs/global_config');
const validate = require('validate.js');
// const logger = require('../../../../helpers/utils/logger');
const jwtAuth = require('../../../../auth/jwt_helper');
// const commonUtil = require('../../../../helpers/utils/common');
// const algorithm = 'aes-256-ctr';
// const secretKey = 'Dom@in2018';
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

class User{

  // async generateCredential(payload) {
  //   const { email, password } = payload;
  //   const user = await query.findOneUser({email});
  //   if(user.err){
  //     return wrapper.error('error', user.err, 400);
  //   }
  //   const userId = user.data._id;
  //   const userEmail = user.data.email;
  //   const pass = await commonUtil.decrypt(user.data.password, algorithm, secretKey);
  //   if(email!==userEmail || pass!==password){
  //     return wrapper.error('error', 'Username or password invalid!', 409);
  //   }
  //   const data = {
  //     email,
  //     sub: userId
  //   };
  //   const token =  await jwtAuth.generateToken(data);
  //   return wrapper.data(token, '', 200);
  // }

  async register(payload) {
    const { email, password, confirmPassword } = payload;
    const user = await query.findOneUser({email});
    if(!user.err){
      return wrapper.error('error', 'Email telah terdaftar', 400);
    }
    if(password != confirmPassword){
      return wrapper.error('error', 'Password tidak sama', 400);
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    payload.password = hashPassword;
    const data = [payload];
    let view = model.generalUser();
    view = data.reduce((accumulator, value) => {
      if(!validate.isEmpty(value.name)){accumulator.name = value.name;}
      if(!validate.isEmpty(value.email)){accumulator.email = value.email;}
      if(!validate.isEmpty(value.password)){accumulator.password = value.password;}
      if(!validate.isEmpty(value.phone)){accumulator.phone = value.phone;}
      if(!validate.isEmpty(value.country)){accumulator.country = value.country;}
      if(!validate.isEmpty(value.role)){accumulator.role = value.role;}
      return accumulator;
    }, view);
    const document = view;
    document.createdAt = new Date();
    const result = await command.insertOneUser(document);
    return result;
  }

  async login(payload) {
    const { email, password } = payload;
    const user = await query.findOneUser({email});
    if(user.err){
      return wrapper.error('error', 'Email belum terdaftar', 404);
    }
    const validPassword = await bcrypt.compare(password, user.data.password);
    const userId = user.data._id;
    if(!validPassword){
      return wrapper.error('error', 'Password invalid!', 409);
    }
    const data = {
      userId,
      email
    };
    const token =  await jwtAuth.generateToken(data);
    return wrapper.data({jwt: token}, '', 200);
  }

  async resetPassword(payload) {
    const { email } = payload;
    const user = await query.findOneUser({email});
    if(user.err){
      return wrapper.error('error', 'Email belum terdaftar', 404);
    }
    const userId = user.data._id;
    const data = {
      userId,
      email
    };
    const token =  await jwtAuth.generateToken(data);

    const account = config.getEmailAccount();

    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
          user: account.user,
          pass: account.pass
      }
    });
    const message = {
      to: email,
      subject: 'Reset Account Password Link',
      html: `
      <h3>Please click the link below to reset your password</h3>
      <p>http://localhost:9000/api/v1/reset-password/?token=${token}</p>
      `,
    }
    console.log(message.html);
    const queryParam  = {'_id': userId};
    const updatedToken  = {'resetPassToken': token};
    const result = await command.updateOneUser(queryParam, updatedToken);
    if(result.err){
      return wrapper.error('error', 'Gagal memperbarui token reset password', 400);
    } else {
      transporter.sendMail(message);
      return result;
    }
  }

  async updatePassword(payload) {
    const { _id, token, password, confirmPassword } = payload;
    if(password != confirmPassword){
      return wrapper.error('error', 'Password tidak sama', 400);
    }
    const user = await query.findOneUser({_id});
    if(user.err){
      return wrapper.error('error', 'User tidak ditemukan', 404);
    }
    const userId = user.data._id;
    const email = user.data.email;
    try {
      verifyToken = jwt.verify(token, config.getSecretToken());
    } catch (error) {
      if(error instanceof jwt.TokenExpiredError){
        wrapper.error('error', 'Access token expired!', 401);
      }else{
        wrapper.error('error', 'Token is not valid!', 401);
      }
    }
    const account = config.getEmailAccount();

    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
          user: account.user,
          pass: account.pass
      }
    });
    const message = {
      to: email,
      subject: 'Password changed',
      html: `
      <p>Password berhasil diubah</p>
      `,
    }
    // console.log("email: ", email);
    // console.log(message);
    const queryParam  = {'_id': userId};
    const salt = await bcrypt.genSalt(10);
    
    const hashPassword = await bcrypt.hash(password, salt);
    const updatedData  = {'password': hashPassword, 'resetPassToken': ''};
    const result = await command.updateOneUser(queryParam, updatedData);
    if(result.err){
      return wrapper.error('error', 'Gagal memperbarui password', 400);
    } else {
      transporter.sendMail(message);
      return result;
    }
  }

  async updateUser(params, payload){
    payload.updatedAt = new Date();
    const result = await command.updateOneUser(params, payload);
    return result;
  }

  async deleteUser(params){
    const result = await command.deleteOneUser(params);
    return result;
  }


}

module.exports = User;
