

// const nconf = require('nconf');
// const rp = require('request-promise');
// const model = require('./query_model');
const query = require('./query');
const wrapper = require('../../../../helpers/utils/wrapper');
// const config = require('../../../../infra/configs/global_config');
// const validate = require('validate.js');
// const logger = require('../../../../helpers/utils/logger');

class Article{
  constructor(param){
    this._id = param._id;
    this.userId = param.userId;
    this.judul = param.judul;
    this.subjudul = param.subjudul;
    this.iamge = param.iamge;
    this.author = param.author;
    this.category = param.category;
    this.belongsTo = param.belongsTo;
    this.content = param.content;
    this.status = param.status;
    this.createdAt =  param.createdAt;
    this.updatedAt = param.updatedAt;
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
