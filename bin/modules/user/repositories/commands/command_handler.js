

// const wrapper = require('../../../../helpers/utils/wrapper');
// const Emitter = require('../../../../helpers/events/event_emitter');
const User = require('./domain');

const postDataLogin = async (payload) => {
  const user = new User();
  const postCommand = async (payload) => {
    return await user.login(payload);
  };
  return await postCommand(payload);
};

const postDataRegister = async (payload) => {
  const user = new User();
  const postCommand = async (payload) => {
    return await user.register(payload);
  };
  return await postCommand(payload);
};

module.exports = {
  postDataLogin : postDataLogin,
  postDataRegister : postDataRegister
};
