const Mongo = require('../../../../helpers/databases/mongodb/db');
// const wrapper = require('../../../../helpers/utils/wrapper');
const config = require('../../../../infra/configs/global_config');

const insertOneArticle = async (document) => {
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('Article');
  document.createdAt = new Date();
  const result = await db.insertOne(document);
  return result;
};

const updateOneArticle = async (params, document) => {
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('Article');
  document.updatedAt = new Date();
  const result = await db.upsertOne(params, document);
  return result;
};

const deleteOneArticle = async (params) => {
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('Article');
  const result = await db.deleteOne(params);
  return result;
};

module.exports = {
  insertOneArticle: insertOneArticle,
  updateOneArticle: updateOneArticle,
  deleteOneArticle: deleteOneArticle
};
