

const wrapper = require('../../../helpers/utils/wrapper');
const validator = require('../utils/validator');
// const queryParser = require('../utils/query_parser');
const queryHandler = require('../repositories/queries/query_handler');
const commandHandler = require('../repositories/commands/command_handler');

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
  const validateParam = await validator.ifExistUser(queryParam);
  const putRequest = async (result) => {
    if(result.err){
      return result;
    }
    return await commandHandler.putOneUser(queryParam, payload);

  };
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) :
      wrapper.response(res,'success',result,'User updated');
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



module.exports = {
  postDataLogin,
  postDataRegister,
  getUser,
  getAllUsers,
  putOneUser,
  deleteOneUser
};
