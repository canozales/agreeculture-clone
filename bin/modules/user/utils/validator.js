

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
  constraints[payload.name] = {length: {minimum: 3}};
  values[payload.name] = payload.name;
  return await validateConstraints(values,constraints);
};

const ifExistUser = async (payload) => {
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('user');
  const parameter = {'email': payload.email};
  const result = await db.findOne(parameter);
  return result;
};

module.exports = {
  isValidParamPostDataRegister: isValidParamPostDataRegister,
  ifExistUser: ifExistUser,
};
