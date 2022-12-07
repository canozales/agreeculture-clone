

const commandHandler = require('../../../../../../bin/modules/user/repositories/commands/command_handler');
const domain = require('../../../../../../bin/modules/user/repositories/commands/domain');
const validator = require('../../../../../../bin/modules/user/utils/validator');
const wrapper = require('../../../../../../bin/helpers/utils/wrapper');
const EventEmitter = require('events').EventEmitter;
const sinon = require('sinon');
const assert = require('assert');

describe('postDataRegister', () => {

  let queryResult = {
    err: null,
    data: {
      _id: "f003e020-12a2-4fc7-807f-d1e7862888fa",
      name: "test",
      email: "test@gmail.com",
      createdAt: "2022-12-07T10:51:19.917Z",
      updatedAt: ""
    },
    message: 'Your Request Has Been Processed',
    code: 200
  };

  let payload = {
    name:"test",
    email:"test@gmail.com",
    password: "1234",
    confirmPassword: "1234"
  };

  it('Should return user object', async () => {

    sinon.stub(domain.prototype, 'register').returns(queryResult);
    sinon.stub(validator, 'isValidParamPostDataRegister').returns(queryResult);

    const rs = await commandHandler.postDataRegister(payload);

    assert.equal(rs.err, null);
    assert.equal(rs.code, 200);
    assert.equal(rs.data.name, 'test');

    domain.prototype.register.restore();
    validator.isValidParamPostDataRegister.restore();

  });

  // it('Should return error event store user object', async () => {

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
  //     sinon.stub(domain.prototype, 'addNewUser').returns(obj);
  //     sinon.stub(domain.prototype, 'publishNewUser').returns(obj);
  //     sinon.stub(validator, 'ifExistUser').returns(queryResult);

  //     const rs = await commandHandler.postOneUser(payload);

  //     // console.log
  //     // assert.equal(rs.err, null);
  //     assert.equal(rs.code, 500);

  //     sinon.assert.calledOnce(spy);

  //     domain.prototype.addNewUser.restore();
  //     domain.prototype.publishNewUser.restore();
  //     validator.ifExistUser.restore();

  // });

});
