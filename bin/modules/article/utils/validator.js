

const validate = require('validate.js');
const wrapper = require('../../../helpers/utils/wrapper');
const Mongo = require('../../../helpers/databases/mongodb/db');
// const MySQL = require('../../../helpers/databases/mysql/db');
const config = require('../../../infra/configs/global_config');

const validateConstraints = async (values,constraints) => {
  if(validate(values,constraints)){
    return wrapper.error('Bad Request',validate(values,constraints),400);
  }
  return wrapper.data(true);

};

const isValidParamGetOneArticle = async (payload) => {
  let constraints = {};
  let values = {};
  constraints[payload.judul] = {length: {minimum: 3}};
  constraints[payload.author] = {length: {minimum: 3}};
  constraints[payload.category] = {length: {minimum: 3}};
 // constraints[payload.harga] = {length: {minimum: 4}};
  values[payload.judul] = payload.judul;
  values[payload.author] = payload.author;
  values[payload.category] = payload.category;
  //values[payload.harga] = payload.harga;

  return await validateConstraints(values,constraints);
};

const isValidParamGetAllArticles = async (payload) => {
  let constraints = {};
  let values = {};
  constraints[payload.judul] = {length: {minimum: 3}};
  constraints[payload.author] = {length: {minimum: 3}};
  constraints[payload.category] = {length: {minimum: 1}};
  //constraints[payload.harga] = {length: {minimum: 4}};
  values[payload.judul] = payload.judul;
  values[payload.author] = payload.author;
  values[payload.category] = payload.category;
  //values[payload.harga] = payload.harga;
  return await validateConstraints(values,constraints);
};

const isValidParamPostOneArticle = async (payload) => {
  let constraints = {};
  let values = {};
  constraints[payload.judul] = {length: {minimum: 3}};
  constraints[payload.author] = {length: {minimum: 3}};
  constraints[payload.category] = {length: {minimum: 1}};
  //constraints[payload.harga] = {length: {minimum: 4}};
  values[payload.judul] = payload.judul;
  values[payload.author] = payload.author;
  values[payload.category] = payload.category;
  //values[payload.harga] = payload.harga;
  return await validateConstraints(values,constraints);
};

const ifExistArticle = async (payload) => {
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('Article');
  const parameter = {'id': payload.id};
  const result = await db.findOne(parameter);
  return result;
};

module.exports = {
  isValidParamGetOneArticle: isValidParamGetOneArticle,
  isValidParamGetAllArticles: isValidParamGetAllArticles,
  isValidParamPostOneArticle: isValidParamPostOneArticle,
  ifExistArticle: ifExistArticle,
};
