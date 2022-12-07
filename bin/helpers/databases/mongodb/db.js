

const mongoConnection = require('./connection');
// const Emitter = require('../../events/event_emitter');
const wrapper = require('../../utils/wrapper');
const validate = require('validate.js');
const logger = require('../../utils/logger');

class DB{
  constructor(config){
    this.config = config;
  }

  setCollection(collectionName){
    this.collectionName = collectionName;
  }

  async getDatabase(){
    let config = this.config;
    config = config.replace('//','');
    const pattern = new RegExp('\/([a-zA-Z0-9-\s]+)\?');
    const dbName = pattern.exec(config);
    return dbName[1];
  }

  async findOne(parameter){
    let ctx = 'mongodb-findOne';
    const config = this.config;
    const dbName = await this.getDatabase();
    const collectionName = this.collectionName;
    const result = await mongoConnection.getConnection(config);
    if(result.err){
      logger.log(ctx, result.err.message, 'Error mongodb connection');
      return result;
    }
    try{
      const cacheConnection = result.data.db;
      const connection = cacheConnection.db(dbName);
      const db = connection.collection(collectionName);
      const recordset = await db.findOne(parameter);
      if(validate.isEmpty(recordset)){
        return wrapper.error('Data Not Found','User not found',404);
      }
      return wrapper.data(recordset);

    }catch(err){
      logger.log(ctx, err.message, 'Error find data in mongodb');
      return wrapper.error(`Error Find One Mongo ${err.message}`,`${err.message}`,409);
    }

  }

  async findMany(parameter){
    let ctx = 'mongodb-findMany';
    const config = this.config;
    const dbName = await this.getDatabase();
    const collectionName = this.collectionName;
    const result = await mongoConnection.getConnection(config);
    if(result.err){
      logger.log(ctx, result.err.message, 'Error mongodb connection');
      return result;
    }
    try{
      const cacheConnection = result.data.db;
      const connection = cacheConnection.db(dbName);
      const db = connection.collection(collectionName);
      const recordset = await db.find(parameter).toArray();
      if(validate.isEmpty(recordset)){
        return wrapper.error('Data Not Found','Users not found',404);
      }
      return wrapper.data(recordset);

    }catch(err){
      logger.log(ctx, err.message, 'Error find data in mongodb');
      return wrapper.error(`Error Find Many Mongo ${err.message}`,`${err.message}`,409);
    }

  }

  async insertOne(document){
    let ctx = 'mongodb-insertOne';
    const config = this.config;
    const dbName = await this.getDatabase();
    const collectionName = this.collectionName;
    const result = await mongoConnection.getConnection(config);
    if(result.err){
      logger.log(ctx, result.err.message, 'Error mongodb connection');
      return result;
    }
    try{
      const cacheConnection = result.data.db;
      const connection = cacheConnection.db(dbName);
      const db = connection.collection(collectionName);
      const recordset = await db.insertOne(document);
      if(recordset.result.n!==1) {
        return wrapper.error('Internal Server Error','Failed Inserting Data to Database',500);
      }
      return wrapper.data(document,'created',201);

    }catch(err){
      logger.log(ctx, err.message, 'Error insert data in mongodb');
      return wrapper.error(`Error Insert One Mongo ${err.message}`,`${err.message}`,409);
    }

  }

  async insertMany(data){
    let ctx = 'mongodb-insertMany';
    const document = data;
    const config = this.config;
    const dbName = await this.getDatabase();
    const collectionName = this.collectionName;
    const result = await mongoConnection.getConnection(config);
    if(result.err){
      logger.log(ctx, result.err.message, 'Error mongodb connection');
      return result;
    }
    try{
      const cacheConnection = result.data.db;
      const connection = cacheConnection.db(dbName);
      const db = connection.collection(collectionName);
      const recordset = await db.insertMany(document);
      if(recordset.result.n<1) {
        return wrapper.error('Internal Server Error','Failed Inserting Data to Database',500);
      }
      return wrapper.data(document,'created',201);

    }catch(err){
      logger.log(ctx, err.message, 'Error insert data in mongodb');
      return wrapper.error(`Error Insert Many Mongo ${err.message}`,`${err.message}`,409);
    }

  }

  async upsertOne(parameter,updateQuery){
    let ctx = 'mongodb-upsertOne';
    const config = this.config;
    const dbName = await this.getDatabase();
    const collectionName = this.collectionName;
    const result = await mongoConnection.getConnection(config);
    if(result.err){
      logger.log(ctx, result.err.message, 'Error mongodb connection');
      return result;
    }
    try{
      const cacheConnection = result.data.db;
      const connection = cacheConnection.db(dbName);
      const db = connection.collection(collectionName);
      const data = await db.updateOne(parameter, { $set:updateQuery }, { upsert: true });
      if(data.result.nModified>=0){
        const nModified = data.result.nModified;
        const recordset = await this.findOne(parameter);
        if(nModified===0){
          return wrapper.data(recordset.data,'created',201);
        }
        return wrapper.data(recordset.data,'updated',200);
      }
    }catch(err){
      logger.log(ctx, err.message, 'Error upsert data in mongodb');
      return wrapper.error(`Error Upsert Mongo ${err.message}`,`${err.message}`,409);
    }

  }

  async deleteOne(parameter){
    let ctx = 'mongodb-delOne';
    const config = this.config;
    const dbName = await this.getDatabase();
    const collectionName = this.collectionName;
    const result = await mongoConnection.getConnection(config);

    if(result.err){
      logger.log(ctx, result.err.message, 'Error mongodb connection');
      return result;
    }
    try{
      const cacheConnection = result.data.db;
      const connection = cacheConnection.db(dbName);
      const db = connection.collection(collectionName);
      const recordset = await db.deleteOne(parameter);

      if(validate.isEmpty(recordset)){
        return wrapper.error('Data Not Found','User not found',404);
      }
      return wrapper.data('Data Found','Your Request Has Been Processed',200);

    }catch(err){
      logger.log(ctx, err.message, 'Error find data in mongodb');
      return wrapper.error(`Error Find One Mongo ${err.message}`,`${err.message}`,409);
    }

  }


  async findAllData(fieldName ,row, page, param){
    let ctx = 'mongodb-findAllData';
    const config = this.config;
    const dbName = await this.getDatabase();
    const collectionName = this.collectionName;
    const result = await mongoConnection.getConnection(config);
    if(result.err){
      logger.log(ctx, result.err.message, 'Error mongodb connection');
      return result;
    }
    try{
      const cacheConnection = result.data.db;
      const connection = cacheConnection.db(dbName);
      const db = connection.collection(collectionName);
      let parameterSort = {};
      parameterSort[fieldName] = 1;
      const parameterPage = row * (page - 1);
      const recordset = await db.find(param).sort(parameterSort).limit(row).skip(parameterPage).toArray();
      if(validate.isEmpty(recordset)){
        return wrapper.error('Data Not Found','Data not found',404);
      }
      return wrapper.data(recordset);

    }catch(err){
      logger.log(ctx, err.message, 'Error upsert data in mongodb');
      return wrapper.error('Error Mongo',`${err.message}`,409);
    }


  }

  async countData(param){
    let ctx = 'mongodb-countData';
    const config = this.config;
    const dbName = await this.getDatabase();
    const collectionName = this.collectionName;
    const result = await mongoConnection.getConnection(config);
    if(result.err){
      logger.log(ctx, result.err.message, 'Error mongodb connection');
      return result;
    }
    try{
      const cacheConnection = result.data.db;
      const connection = cacheConnection.db(dbName);
      const db = connection.collection(collectionName);
      const recordset = await db.count(param);
      if(validate.isEmpty(recordset)){
        return wrapper.error('Data Not Found','Data not found',404);
      }
      return wrapper.data(recordset);

    }catch(err){
      logger.log(ctx, err.message, 'Error count data in mongodb');
      return wrapper.error('Error Mongo',`${err.message}`,409);
    }


  }
}

module.exports = DB;
