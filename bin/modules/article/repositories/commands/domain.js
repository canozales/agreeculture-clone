// const nconf = require('nconf');
// const rp = require('request-promise');
const model = require('./command_model');
const command = require('./command');
const query = require('../queries/query');
// const query = require('../queries/query');
// const wrapper = require('../../../../helpers/utils/wrapper');
// const config = require('../../../../infra/configs/global_config');
const validate = require('validate.js');
//const { query } = require('mssql');
const wrapper = require('../../../../helpers/utils/wrapper');
// const logger = require('../../../../helpers/utils/logger');
// const SNS = require('../../../../helpers/components/aws-sns/sns');
// const Emitter = require('../../../../helpers/events/event_emitter');
// const EventPublisher = require('../../../../helpers/events/event_publisher');
// const jwt = require('jsonwebtoken');
const minioClient = require('../../../../helpers/components/minio/sdk');

class Article{

  async addNewArticle(payload){
    const {judul} = payload;
    const article = await query.findOneArticle({judul});
    if(!article.err){
      return wrapper.error('error', 'artikel telah ditambahkan sebelumnya/sudah ada', 400);
    }
    const data = [payload];
    let view = model.generalArticle();
    view = data.reduce((accumulator, value) => {
      if(!validate.isEmpty(value._id)){accumulator._id = value._id;}
      if(!validate.isEmpty(value.userId)){accumulator.userId = value.userId;}
      if(!validate.isEmpty(value.judul)){accumulator.judul = value.judul;}
      if(!validate.isEmpty(value.subjudul)){accumulator.subjudul = value.subjudul;}
      if(!validate.isEmpty(value.image)){accumulator.image = value.image;}
      if(!validate.isEmpty(value.author)){accumulator.author = value.author;}
      if(!validate.isEmpty(value.tags)){accumulator.tags = value.tags;}
      if(!validate.isEmpty(value.belongsTo)){accumulator.belongsTo = value.belongsTo;}
      if(!validate.isEmpty(value.content)){accumulator.content = value.content;}
      if(!validate.isEmpty(value.status)){accumulator.status = value.status;}
      return accumulator;
    }, view);
    const document = view;
    document.createdAt = new Date();
    const result = await command.insertOneArticle(document);
    return result;
  }

  async updateArticle(params, payload){
    const image = payload.image;
    const bucketName = 'article-thumbnail';
    const time = new Date();
    const ms = time.getMilliseconds().toString();
    const ss = time.getSeconds().toString();
    const mm = time.getMinutes().toString();
    const hh = time.getHours().toString();
    const fileName = `articleThumbnail${hh}${mm}${ss}${ms}`;
    // console.log('image: ', payload);
    // const {judul} = payload;
    // console.log("judul: ", judul);
    // const article = await query.findOneArticle({judul});
    // if(!article.err){
    //   return wrapper.error('error', 'artikel belum ditambahkan sebelumnya/tidak ditemukan', 400);
    // }
    minioClient.init();
    const bucket = await minioClient.bucketCreate(bucketName);
    if(bucket.err){
      return wrapper.error(bucket.err);
    }
    const upload = await minioClient.objectUpload(bucketName, fileName, image);
    if(upload.err){
      return wrapper.error(upload.err);
    }
    const url = await minioClient.objectGetUrl(bucketName, fileName);
    if(url.err){
      return wrapper.error(url.err);
    }
    payload.image = url.data.toString();
    payload.updatedAt = new Date();
    const result = await command.updateOneArticle(params, payload);
    return result;
  }

  async deleteArticle(params){
    const result = await command.deleteOneArticle(params);
    return result;
  }

}

module.exports = Article;
