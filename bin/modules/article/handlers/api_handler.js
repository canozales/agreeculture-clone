const wrapper = require('../../../helpers/utils/wrapper');
const validator = require('../utils/validator');
// const queryParser = require('../utils/query_parser');
const queryHandler = require('../repositories/queries/query_handler');
const commandHandler = require('../repositories/commands/command_handler');
const jwt = require('jsonwebtoken');

const getOneArticle = async (req, res, next) => {
  const queryParam = req.params.id;
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
      wrapper.response(res, 'success', result, 'Article found');
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
      wrapper.response(res, 'success', result, 'Articles found');
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
      wrapper.response(res, 'success', result, 'List of articles found');
  };

  sendResponse(await getRequest(validateParam));
};


const postOneArticle = async (req, res, next) => {
  const payload = req.body;
  payload.userId = req.userData.userId;
  payload.author = req.userData.name;
  // console.log(req.userData);
  // console.log(payload);
  const validateParam = await validator.isValidParamPostOneArticle(payload);
  const postRequest = async (result) => {
    if(result.err){
      return result;
    }
    return await commandHandler.postOneArticle(payload);

  };
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) :
      wrapper.response(res,'success',result,'Article created');
  };
  sendResponse(await postRequest(validateParam));
};

const putOneArticle = async (req, res, next) => {
  const queryParam  = {'_id': req.params.id};
  const payload = req.body;
  payload.image = req.files['image']['path'];
  const validateParam = await validator.ifExistArticle(queryParam);
  const putRequest = async (result) => {
    if(result.err){
      return result;
    }
    return await commandHandler.putOneArticle(queryParam, payload);

  };
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) :
      wrapper.response(res,'success',result,'Article updated');
  };
  sendResponse(await putRequest(validateParam));
};

const deleteOneArticle = async (req, res, next) => {
  const payload  = {'_id': req.params.id};
  const validateParam = await validator.ifExistArticle(payload);
  const deleteRequest = async (result) => {
    if(result.err){
      return result;
    }
    return await commandHandler.deleteOneArticle(payload);

  };
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) :
      wrapper.response(res,'success',result,'Article deleted');
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
