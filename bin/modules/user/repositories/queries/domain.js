

// const nconf = require('nconf');
// const rp = require('request-promise');
// const model = require('./query_model');
const query = require('./query');
const wrapper = require('../../../../helpers/utils/wrapper');
// const config = require('../../../../infra/configs/global_config');
// const validate = require('validate.js');
// const logger = require('../../../../helpers/utils/logger');

class User{
  constructor(queryParam){
    this._id = queryParam;
  }

  async viewOneUser(){
    const param = {'_id': this._id};
    const result = await query.findOneUser(param);
    if(result.err){
      return result;
    }
    return wrapper.data(result.data);

  }


  async viewAllUsers(){
    const param = {};
    const result = await query.findAllUsers(param);

    if(result.err){
      return result;
    }
    return wrapper.data(result.data);

  }


}

module.exports = User;
