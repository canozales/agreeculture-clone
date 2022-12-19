const wrapper = require('../../../helpers/utils/wrapper');
const validator = require('../utils/validator');
// const queryParser = require('../utils/query_parser');
const queryHandler = require('../repositories/queries/query_handler');
const commandHandler = require('../repositories/commands/command_handler');

const getOneArticle = async (req, res, next) => {
  const queryParam = {'_id': req.params.id};
  // console.log('qp: ', queryParam);
  const validateParam = await validator.isValidParamGetOneArticle(queryParam);

  const getRequest = async (result) => {
    if(result.err){
      return result;
    }
    return await queryHandler.getOneArticle(queryParam);

  };

  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) :
      wrapper.response(res, 'success', result, 'Your Request Has Been Processed');
  };

  sendResponse(await getRequest(validateParam));
};

const getByAuthor = async (req, res, next) => {
  const queryParam = req.params;
  const validateParam = await validator.isValidParamGetByAuthor(queryParam);

  const getRequest = async (result) => {
    if(result.err){
      return result;
    }
    return await queryHandler.getByAuthor(queryParam);

  };

  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) :
      wrapper.response(res, 'success', result, 'Your Request Has Been Processed');
  };

  sendResponse(await getRequest(validateParam));
};


const getAllArticles = async (req, res, next) => {
  const queryParam = req.params;
  const validateParam = await validator.isValidParamGetAllArticles(queryParam);

  const getRequest = async (result) => {
    if(result.err){
      return result;
    }
    return await queryHandler.getAllArticles(queryParam);

  };

  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) :
      wrapper.response(res, 'success', result, 'Your Request Has Been Processed');
  };

  sendResponse(await getRequest(validateParam));
};


const postOneArticle = async (req, res, next) => {
  const payload = req.body;
  const validateParam = await validator.isValidParamPostOneArticle(payload);
  const postRequest = async (result) => {
    if(result.err){
      return result;
    }
    return await commandHandler.postOneArticle(payload);

  };
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) :
      wrapper.response(res,'success',result,'Your Request Has Been Processed');
  };
  sendResponse(await postRequest(validateParam));
};

const putOneArticle = async (req, res, next) => {
  const id  = req.params;
  const payload = req.body;
  const validateParam = await validator.ifExistArticle(payload);
  const putRequest = async (result) => {
    if(result.err){
      return result;
    }
    return await commandHandler.putOneArticle(id, payload);

  };
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) :
      wrapper.response(res,'success',result,'Your Request Has Been Processed');
  };
  sendResponse(await putRequest(validateParam));
};

const deleteOneArticle = async (req, res, next) => {
  const payload = req.params;
  const validateParam = await validator.isValidParamGetOneArticle(payload);
  const deleteRequest = async (result) => {
    if(result.err){
      return result;
    }
    return await commandHandler.deleteOneArticle(payload);

  };
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) :
      wrapper.response(res,'success',result,'Your Request Has Been Processed');
  };
  sendResponse(await deleteRequest(validateParam));
};

module.exports = {
  getOneArticle: getOneArticle,
  getAllArticles: getAllArticles,
  getByAuthor: getByAuthor,
  postOneArticle: postOneArticle,
  putOneArticle: putOneArticle,
  deleteOneArticle: deleteOneArticle
};
