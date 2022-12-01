

const Mongo = require('../../../../helpers/databases/mongodb/db');
// const MySQL = require('../../../../helpers/databases/mysql/db');
// const wrapper = require('../../../../helpers/utils/wrapper');
const config = require('../../../../infra/configs/global_config');
//const ObjectId = require('mongodb').ObjectId;
const uniqueId = require('uuid-mongodb');
const { UUID } = require('mongodb');



const findOneUser = async (parameter) => {
  parameter = {$and:[parameter]};
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('user');
  const recordset = await db.findOne(parameter);
  return recordset;

};

// const findById = async (id) => {
//   const db = new Mongo(config.getDevelopmentDB());
//   db.setCollection('user');
//   console.log("id: ",typeof id, id);
//   const parameter = {
//     _id: id
//   };
//   console.log("_id: ",typeof parameter._id, parameter._id);
//   const recordset = await db.findOne(parameter);
//   return recordset;
// };

const findAllUsers = async (parameter) => {
  parameter = {$and:[parameter]};
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('user');
  const recordset = await db.findMany();
  return recordset;
};


module.exports = {
  findOneUser,
  findAllUsers
};
