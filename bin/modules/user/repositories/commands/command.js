

const Mongo = require('../../../../helpers/databases/mongodb/db');
// const wrapper = require('../../../../helpers/utils/wrapper');
const config = require('../../../../infra/configs/global_config');

const insertOneUser = async (document) => {
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('user');
  document.createdAt = new Date();
  const result = await db.insertOne(document);
  return result;
};

const updateOneUser = async (params, document) => {
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('user');
  document.updatedAt = new Date();
  const result = await db.upsertOne(params, document);
  return result;
};

const deleteOneUser = async (params) => {
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('user');
  const result = await db.deleteOne(params);
  return result;
};

module.exports = {
  insertOneUser: insertOneUser,
  updateOneUser: updateOneUser,
  deleteOneUser: deleteOneUser
};
