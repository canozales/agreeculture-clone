

// const nconf = require('nconf');
// const rp = require('request-promise');
const model = require('./command_model');
const command = require('./command');
// const query = require('../queries/query');
// const wrapper = require('../../../../helpers/utils/wrapper');
// const config = require('../../../../infra/configs/global_config');
const validate = require('validate.js');
// const logger = require('../../../../helpers/utils/logger');
// const SNS = require('../../../../helpers/components/aws-sns/sns');
// const Emitter = require('../../../../helpers/events/event_emitter');
// const EventPublisher = require('../../../../helpers/events/event_publisher');

class Article{

  async addNewArticle(payload){
    const data = [payload];
    let view = model.generalArticle();
    view = data.reduce((accumulator, value) => {
      if(!validate.isEmpty(value.id)){accumulator.id = value.id;}
      if(!validate.isEmpty(value.judul)){accumulator.judul = value.judul;}
      if(!validate.isEmpty(value.author)){accumulator.author = value.author;}
      if(!validate.isEmpty(value.category)){accumulator.category = value.category;}
      if(!validate.isEmpty(value.content)){accumulator.content = value.content;}
      return accumulator;
    }, view);
    const document = view;
    const result = await command.insertOneArticle(document);
    return result;
  }

  async updateArticle(params, payload){
    const data = [payload];
    let view = model.generalArticle();
    view = data.reduce((accumulator, value) => {
      if(!validate.isEmpty(value.id)){accumulator.id = value.id;}
      if(!validate.isEmpty(value.judul)){accumulator.judul = value.judul;}
      if(!validate.isEmpty(value.author)){accumulator.author = value.author;}
      if(!validate.isEmpty(value.category)){accumulator.category = value.category;}
      if(!validate.isEmpty(value.content)){accumulator.content = value.content;}
      return accumulator;
    }, view);
    const document = view;
    const result = await command.updateOneArticle(params, document);
    return result;
  }

  async deleteArticle(params){
    const result = await command.deleteOneArticle(params);
    return result;
  }

}

module.exports = Article;
