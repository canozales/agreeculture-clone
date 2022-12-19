

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
  constraints[payload.subjudul] = {length: {minimum: 3}};
  constraints[payload.image] = {length: {minimum: 5}};
  constraints[payload.author] = {length: {minimum: 3}};
  constraints[payload.tags] = {length: {minimum: 3}};
  constraints[payload.belongsTo] = {length: {minimum: 3}};
  constraints[payload.content] = {length: {minimum: 3}};
  constraints[payload.status] = {length: {minimum: 3}};
  values[payload.judul] = payload.judul;
  values[payload.subjudul] = payload.subjudul;
  values[payload.image] = payload.image;
  values[payload.author] = payload.author;
  values[payload.tags] = payload.tags;
  values[payload.belongsTo] = payload.belongsTo;
  values[payload.content] = payload.content;
  values[payload.status] = payload.status;
  return await validateConstraints(values,constraints);
};

const isValidParamGetByAuthor = async (payload) => {
  let constraints = {};
  let values = {};
  constraints[payload.judul] = {length: {minimum: 3}};
  constraints[payload.subjudul] = {length: {minimum: 3}};
  constraints[payload.image] = {length: {minimum: 5}};
  constraints[payload.author] = {length: {minimum: 3}};
  constraints[payload.tags] = {length: {minimum: 3}};
  constraints[payload.belongsTo] = {length: {minimum: 3}};
  constraints[payload.content] = {length: {minimum: 3}};
  constraints[payload.status] = {length: {minimum: 3}};
  values[payload.judul] = payload.judul;
  values[payload.subjudul] = payload.subjudul;
  values[payload.image] = payload.image;
  values[payload.author] = payload.author;
  values[payload.tags] = payload.tags;
  values[payload.belongsTo] = payload.belongsTo;
  values[payload.content] = payload.content;
  values[payload.status] = payload.status;
  return await validateConstraints(values,constraints);
};

const isValidParamGetAllArticles = async (payload) => {
  let constraints = {};
  let values = {};
  constraints[payload.judul] = {length: {minimum: 3}};
  constraints[payload.subjudul] = {length: {minimum: 3}};
  constraints[payload.image] = {length: {minimum: 5}};
  constraints[payload.author] = {length: {minimum: 3}};
  constraints[payload.tags] = {length: {minimum: 3}};
  constraints[payload.belongsTo] = {length: {minimum: 3}};
  constraints[payload.content] = {length: {minimum: 3}};
  constraints[payload.status] = {length: {minimum: 3}};
  values[payload.judul] = payload.judul;
  values[payload.subjudul] = payload.subjudul;
  values[payload.image] = payload.image;
  values[payload.author] = payload.author;
  values[payload.tags] = payload.tags;
  values[payload.belongsTo] = payload.belongsTo;
  values[payload.content] = payload.content;
  values[payload.status] = payload.status;
  return await validateConstraints(values,constraints);
};

const isValidParamPostOneArticle = async (payload) => {
  let constraints = {};
  let values = {};
  constraints[payload.judul] = {length: {minimum: 3}};
  constraints[payload.subjudul] = {length: {minimum: 3}};
  constraints[payload.image] = {length: {minimum: 5}};
  constraints[payload.author] = {length: {minimum: 3}};
  constraints[payload.tags] = {length: {minimum: 3}};
  constraints[payload.belongsTo] = {length: {minimum: 3}};
  constraints[payload.content] = {length: {minimum: 3}};
  constraints[payload.status] = {length: {minimum: 3}};
  values[payload.judul] = payload.judul;
  values[payload.subjudul] = payload.subjudul;
  values[payload.image] = payload.image;
  values[payload.author] = payload.author;
  values[payload.tags] = payload.tags;
  values[payload.belongsTo] = payload.belongsTo;
  values[payload.content] = payload.content;
  values[payload.status] = payload.status;
  return await validateConstraints(values,constraints);
};

const ifExistArticle = async (payload) => {
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('Article');
  const result = await db.findOne(payload);
  return result;
};

module.exports = {
  isValidParamGetOneArticle: isValidParamGetOneArticle,
  isValidParamGetAllArticles: isValidParamGetAllArticles,
  isValidParamPostOneArticle: isValidParamPostOneArticle,
  isValidParamGetByAuthor: isValidParamGetByAuthor,
  ifExistArticle: ifExistArticle,
};
