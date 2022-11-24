

const Mongo = require('../../../../helpers/databases/mongodb/db');
// const MySQL = require('../../../../helpers/databases/mysql/db');
// const wrapper = require('../../../../helpers/utils/wrapper');
const config = require('../../../../infra/configs/global_config');
//const ObjectId = require('mongodb').ObjectId;
const uniqueId = require('uuid-mongodb');


const findOneUser = async (parameter) => {
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('user');
  const recordset = await db.findOne(parameter);
  return recordset;
};

const findById = async (id) => {
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('user');
  const parameter = {
    _id: uniqueId.from(id)
  };
  const recordset = await db.findOne(parameter);
  return recordset;
};

const findAllUsers = async (parameter) => {
  parameter = {$and:[parameter]};
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('user');
  const recordset = await db.findMany();
  return recordset;
};


module.exports = {
  findOneUser,
  findById,
  findAllUsers
};
