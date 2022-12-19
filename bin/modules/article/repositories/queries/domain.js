

// const nconf = require('nconf');
// const rp = require('request-promise');
// const model = require('./query_model');
const query = require('./query');
const wrapper = require('../../../../helpers/utils/wrapper');
// const config = require('../../../../infra/configs/global_config');
// const validate = require('validate.js');
// const logger = require('../../../../helpers/utils/logger');

class Article{
  constructor(queryParam){
    this._id = queryParam;
  }

  async viewOneArticle(){
    const param = {'_id': this._id};
    const result = await query.findOneArticle(param);
    if(result.err){
      return result;
    }
    return wrapper.data(result.data);
  }

  async viewByAuthor(){
    const param = {'Author': this.userId};
    const result = await query.findAllArticles(param);

    if(result.err){
      return result;
    }
    return wrapper.data(result.data);

  }


  async viewAllArticles(){
    const param = {};
    const result = await query.findAllArticles(param);

    if(result.err){
      return result;
    }
    return wrapper.data(result.data);

  }

}

module.exports = Article;
