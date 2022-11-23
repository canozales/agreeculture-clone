

// const nconf = require('nconf');
const command = require('./command');
const model = require('./command_model');
const query = require('../queries/query');
const wrapper = require('../../../../helpers/utils/wrapper');
// const config = require('../../../../infra/configs/global_config');
const validate = require('validate.js');
// const logger = require('../../../../helpers/utils/logger');
const jwtAuth = require('../../../../auth/jwt_helper');
const commonUtil = require('../../../../helpers/utils/common');
const algorithm = 'aes-256-ctr';
const secretKey = 'Dom@in2018';
const bcrypt = require('bcryptjs');

class User{

  async generateCredential(payload) {
    const { email, password } = payload;
    const user = await query.findOneUser({email});
    if(user.err){
      return wrapper.error('error', user.err, 409);
    }
    const userId = user.data._id;
    const userEmail = user.data.email;
    const pass = await commonUtil.decrypt(user.data.password, algorithm, secretKey);
    if(email!==userEmail || pass!==password){
      return wrapper.error('error', 'Username or password invalid!', 409);
    }
    const data = {
      email,
      sub: userId
    };
    const token =  await jwtAuth.generateToken(data);
    return wrapper.data(token, '', 200);
  }

  async register(payload) {
    // console.log(payload);
    const { password } = payload;
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
    const result = await command.insertOneUser(document);
    return result;
  }

  async login(payload) {
    // console.log(payload);
    const { email, password } = payload;
    const user = await query.findOneUser({email});
    // console.log(user);
    // console.log(password);
    // console.log(user.data.password);
    const validPassword = await bcrypt.compare(password, user.data.password);
    if(user.err){
      return wrapper.error('error', user.err, 409);
    }
    const userId = user.data._id;
    const userEmail = user.data.email;
    if(email!==userEmail){
      return wrapper.error('error', 'Username or password invalid!', 409);
    }
    if(!validPassword){
      return wrapper.error('error', 'Username or password invalid!', 409);
    }

    const data = {
      email,
      sub: userId
    };
    const token =  await jwtAuth.generateToken(data);
    return wrapper.data(token, '', 200);
  }

}

module.exports = User;
