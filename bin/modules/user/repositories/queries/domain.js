

// const nconf = require('nconf');
// const rp = require('request-promise');
// const model = require('./query_model');
const query = require('./query');
const wrapper = require('../../../../helpers/utils/wrapper');
// const config = require('../../../../infra/configs/global_config');
// const validate = require('validate.js');
// const logger = require('../../../../helpers/utils/logger');

class User{

  async viewUser(userId){
    const user = await query.findById(userId);
    const { data } = user;
    if(user.err){
      return wrapper.error('error', 'Can not find user!', 404);
    }
    return wrapper.data(data, '', 200);
  }

}

module.exports = User;
