

const wrapper = require('../../../helpers/utils/wrapper');
const validator = require('../utils/validator');
// const queryParser = require('../utils/query_parser');
const queryHandler = require('../repositories/queries/query_handler');
const commandHandler = require('../repositories/commands/command_handler');

const postDataLogin = async (req, res, next) => {
  const payload = req.body;
  const postRequest = async () => {
    return await commandHandler.postDataLogin(payload);
  };
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) :
      wrapper.response(res,'success',result,'Your Request Has Been Processed');
  };
  sendResponse(await postRequest());
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
      wrapper.response(res,'success',result,'Your Request Has Been Processed');
  };
  sendResponse(await postRequest(validateParam));
};

const getUser = async (req, res, next) => {
  const userId = req.userId;
  const getData = async () => {
    return await queryHandler.getUser(userId);
  };
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) :
      wrapper.response(res,'success',result,'Your Request Has Been Processed');
  };
  sendResponse(await getData());
};

module.exports = {
  postDataLogin,
  postDataRegister,
  getUser
};
