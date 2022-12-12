

const commandHandler = require('../../../../../../bin/modules/product/repositories/commands/command_handler');
const domain = require('../../../../../../bin/modules/product/repositories/commands/domain');
const validator = require('../../../../../../bin/modules/product/utils/validator');
const wrapper = require('../../../../../../bin/helpers/utils/wrapper');
const EventEmitter = require('events').EventEmitter;
const sinon = require('sinon');
const assert = require('assert');

describe('postOneProduct', () => {

  let queryResult = {
    err: null,
    data: {
      id: '1',
      sellerId: '1',
      name: 'test',
      price: '10000',
      stock: '200',
      category: 'buah',
      brand: 'agreefarm',
      detail: 'test'
    },
    message: 'Your Request Has Been Processed',
    code: 200
  };

  let payload = {
      id: '1',
      sellerId: '1',
      name: 'test',
      price: '10000',
      stock: '200',
      category: 'buah',
      brand: 'agreefarm',
      detail: 'test lokal'
  };

  it('Should return product object', async () => {

    sinon.stub(domain.prototype, 'addNewProduct').returns(queryResult);
    sinon.stub(validator, 'ifExistProduct').returns(queryResult);

    const rs = await commandHandler.postOneProduct(payload);

    assert.equal(rs.err, null);
    assert.equal(rs.code, 200);
    assert.equal(rs.data.name, 'test');

    domain.prototype.addNewProduct.restore();
    validator.ifExistProduct.restore();

  });

  // it('Should return error event store product object', async () => {

  //     let obj = {
  //         err: new Error('whoops!'),
  //         data: null,
  //         message: 'Your Request Can not Processed',
  //         code: 500
  //     };

  //     const spy = sinon.spy();
  //     const emitter = new EventEmitter;

  //     emitter.on('error', spy);
  //     emitter.emit('error')
  //     sinon.stub(domain.prototype, 'addNewProduct').returns(obj);
  //     sinon.stub(domain.prototype, 'publishNewProduct').returns(obj);
  //     sinon.stub(validator, 'ifExistProduct').returns(queryResult);

  //     const rs = await commandHandler.postOneProduct(payload);

  //     // console.log
  //     // assert.equal(rs.err, null);
  //     assert.equal(rs.code, 500);

  //     sinon.assert.calledOnce(spy);

  //     domain.prototype.addNewProduct.restore();
  //     domain.prototype.publishNewProduct.restore();
  //     validator.ifExistProduct.restore();

  // });

});
