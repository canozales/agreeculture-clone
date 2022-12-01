

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

const isValidParamPostDataRegister = async (payload) => {
  let constraints = {};
  let values = {};
  if(validate.isEmpty(payload.email)){
    return wrapper.error('Bad Request','Email is required',400);
  }
  constraints[payload.name] = {length: {minimum: 3}};
  constraints[payload.email] = {email: true};
  values[payload.name] = payload.name;
  values[payload.email] = payload.email;
  return await validateConstraints(values,constraints);
};

const isValidParamGetAllUsers = async (payload) => {
  let constraints = {};
  let values = {};
  constraints[payload.name] = {length: {minimum: 3}};
  values[payload.name] = payload.name;

  return await validateConstraints(values,constraints);
};


const ifExistUser = async (payload) => {
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('user');
  const result = await db.findOne(payload);
  return result;
};

module.exports = {
  isValidParamPostDataRegister: isValidParamPostDataRegister,
  isValidParamGetAllUsers: isValidParamGetAllUsers,
  ifExistUser: ifExistUser,
};
