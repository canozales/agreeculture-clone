

const wrapper = require('../../../helpers/utils/wrapper');
const validator = require('../utils/validator');
// const queryParser = require('../utils/query_parser');
const queryHandler = require('../repositories/queries/query_handler');
const commandHandler = require('../repositories/commands/command_handler');
const jwt = require('jsonwebtoken');
const config = require('../../../infra/configs/global_config');

const postDataLogin = async (req, res, next) => {
  const payload = req.body;
  const validateParam = await validator.isValidParamPostDataRegister(payload);
  const postRequest = async (result) => {
    if(result.err){
      return result;
    }
    return await commandHandler.postDataLogin(payload);
  };
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) :
      wrapper.response(res,'success',result,'Login success');
  };
  sendResponse(await postRequest(validateParam));
};

const postDataRegister = async (req, res, next) => {
  const payload = req.body;
  const validateParam = await validator.isValidParamPostDataRegister(payload);
  const postRequest = async (result) => {
    if(result.err){
      return result;
    }
    return await commandHandler.postDataRegister(payload);

  };
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) :
      wrapper.response(res,'success',result,'Registration success');
  };
  sendResponse(await postRequest(validateParam));
};

const getUser = async (req, res, next) => {
  const userId = req.params.userId;
  const getData = async () => {
    return await queryHandler.getUser(userId);
  };
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) :
      wrapper.response(res,'success',result,'User found');
  };
  sendResponse(await getData());
};

const getAllUsers = async (req, res, next) => {
  const queryParam = req.params;
  const validateParam = await validator.isValidParamGetAllUsers(queryParam);

  const getRequest = async (result) => {
    if(result.err){
      return result;
    }
    return await queryHandler.getAllUsers(queryParam);

  };

  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) :
      wrapper.response(res, 'success', result, 'List of users found');
  };

  sendResponse(await getRequest(validateParam));
};

const putOneUser = async (req, res, next) => {
  const queryParam  = {'_id': req.params.userId};
  const payload = req.body;
  // console.log(payload);
  const validateParam = await validator.ifExistUser(queryParam);
  const putRequest = async (result) => {
    if(result.err){
      return result;
    }
    return await commandHandler.putOneUser(queryParam, payload);

  };
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) :
      wrapper.response(res,'success', wrapper.data({
        _id: result.data._id,
        name: result.data.name,
        phone: result.data.phone
      }),'User updated');
  };
  sendResponse(await putRequest(validateParam));
};

const deleteOneUser = async (req, res, next) => {
  const payload  = {'_id': req.params.userId};
  const validateParam = await validator.ifExistUser(payload);
  const deleteRequest = async (result) => {
    if(result.err){
      return result;
    }
    return await commandHandler.deleteOneUser(payload);

  };
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) :
      wrapper.response(res,'success',result,'User deleted');
  };
  sendResponse(await deleteRequest(validateParam));
};

const passwordReset = async (req, res, next) => {
  const payload  = {'email': req.body.email};
  const validateParam = await validator.ifExistUser(payload);
  const passResetRequest = async (result) => {
    if(result.err){
      return result;
    }
    return await commandHandler.passwordReset(payload);

  };
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) :
      wrapper.response(res,'success', wrapper.data({
        _id: result.data._id,
        email: result.data.email,
      }),'Password reset link sent');
  };
  sendResponse(await passResetRequest(validateParam));
};

const passwordUpdate = async (req, res, next) => {
  const token = req.query.token;
  const newPass = req.body.newPassword;
  const confirmPass = req.body.confirmPassword;
  const decodedToken = jwt.verify(token, config.getSecretToken());
  const userId = decodedToken.userId;
  const id = {'_id': userId};
  const payload  = {'_id': userId, 'token': token, 'password': newPass, 'confirmPassword': confirmPass};
  const validateParam = await validator.ifExistUser(id);
  const passResetRequest = async (result) => {
    if(result.err){
      return result;
    }
    return await commandHandler.passwordUpdate(payload);

  };
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) :
      wrapper.response(res,'success', wrapper.data({
        _id: result.data._id,
        email: result.data.email,
      }),'Password changed');
  };
  sendResponse(await passResetRequest(validateParam));
};



module.exports = {
  postDataLogin,
  postDataRegister,
  getUser,
  getAllUsers,
  putOneUser,
  deleteOneUser,
  passwordReset,
  passwordUpdate
};
