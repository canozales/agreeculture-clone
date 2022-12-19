const Mongo = require('../../../../helpers/databases/mongodb/db');
const config = require('../../../../infra/configs/global_config');
// const ObjectId = require('mongodb').ObjectId;

const findOneArticle = async (parameter) => {
  // console.log('param-query: ', parameter);
  parameter = {$and:[parameter]};
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('Article');
  const recordset = await db.findOne(parameter);
  return recordset;
};

const findByAuthor = async (parameter) => {
  parameter = {$and:[parameter]};
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('Article');
  const recordset = await db.findMany(parameter);
  return recordset;
};

const findAllArticles = async (parameter) => {
  parameter = {$and:[parameter]};
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('Article');
  const recordset = await db.findMany();
  return recordset;
};


module.exports = {
  findOneArticle: findOneArticle,
  findByAuthor: findByAuthor,
  findAllArticles: findAllArticles
};
