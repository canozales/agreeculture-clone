'use strict';

const mysql = require('mysql');
const Emitter = require('../../events/event_emitter');
const wrapper = require('../../utils/wrapper');
const validate = require("validate.js");

class DB{
    constructor(config){
        this.config = config;
        this.statePool = false;
    }

    getConnection() {
        return this.statePool;
    }

    setConnection() {
        this.statePool = true;
    }

    done(connection) {
        connection.release();
        this.statePool = false;
    }

    createConnection() {
        this.pool = new mysql.createPool(this.config);
        this.setConnection();
    }

    async findData(statement) {
        const self = this;
        if(!self.statePool){
            this.createConnection();
        }
        if(self.statePool){
            const recordset = () => {
                return new Promise((resolve, reject) => {
                    self.pool.getConnection((err, connection) => {
                        if (err) {
                            let errorMessage;
                            if (err.code === 'PROTOCOL_CONNECTION_LOST') {
                                errorMessage = 'Database connection was closed.';
                            }
                            if (err.code === 'ER_CON_COUNT_ERROR') {
                                errorMessage = 'Database has too many connections.';
                            }
                            if (err.code === 'ECONNREFUSED') {
                                errorMessage = 'Database connection was refused.';
                            }
                            self.done(connection);
                            return reject(wrapper.error(err.code,errorMessage,503));
                        } else {
                            connection.query(statement, function (err, result, fields) {
                                if (err) {
                                    self.done(connection);
                                    return reject(wrapper.error(err.code,errorMessage,503));
                                } else {
                                    self.done(connection);
                                    return resolve(wrapper.data(JSON.stringify(result[0])));
                                }
                            });
                        }
                    });
                });
            }
            const result = await recordset().then(result =>{
                return wrapper.data(result.data);
            }).catch(err =>{
                return err;
            });
            return result;
        }
    }

    /*async findMany(statement) {
        const self = this;
        if(!self.statePool){
            this.createConnection();
        }
        if(self.statePool){
            try{
            const recordset = await self.connection.connect().then(async () =>{
                const req = new sql.Request(self.connection);
                const recordset = await req.query(statement);
                self.done();
                if(validate.isEmpty(recordset)){
                return wrapper.error(`Data Not Found`,`Please Try Another Input`,404)
                }else{          
                return wrapper.data(recordset);
                }
            }).catch((err) => {
                self.done();
                return wrapper.error(err,err.message,503);
            });
            return recordset;
            }catch(err){
            self.done();
            return wrapper.error(err,err.message,503);
            };
        }
    }*/


    /*async postOne(statement) {
        const self = this;
        if(!self.statePool){
            this.createConnection()
        }
        if(self.statePool){
            try{
                const recordset = await self.connection.connect().then(async () => {
                    const req = new sql.Request(self.connection);
                    const recordset = await req.query(statement)
                    self.done();
                    return wrapper.data(req.rowsAffected)
                }).catch((err) => {
                    self.done()
                    return wrapper.error(err,err.message,503);
                });
                return recordset;
            }catch(err){
                self.done();
                return wrapper.error(err,err.message,503);
            }
        }
    }*/
}

module.exports = DB;
