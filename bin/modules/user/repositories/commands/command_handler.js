

// const wrapper = require('../../../../helpers/utils/wrapper');
// const Emitter = require('../../../../helpers/events/event_emitter');
const User = require('./domain');

const postDataLogin = async (payload) => {
  const user = new User();
  const loginCommand = async (payload) => {
    return await user.login(payload);
  };
  return await loginCommand(payload);
};

const postDataRegister = async (payload) => {
  const user = new User();
  const registerCommand = async (payload) => {
    return await user.register(payload);
  };
  return await registerCommand(payload);
};

const passwordReset = async (payload) => {
  const user = new User();
  const passResetCommand = async (payload) => {
    return await user.resetPassword(payload);
  };
  return await passResetCommand(payload);
};

const passwordUpdate = async (payload) => {
  const user = new User();
  const passUpdateCommand = async (payload) => {
    return await user.updatePassword(payload);
  };
  return await passUpdateCommand(payload);
};

const putOneUser = async (id, payload) => {
  const user = new User();
  const putCommand = async (id, payload) => {
    return await user.updateUser(id, payload);
  };
  return putCommand(id, payload);
};

const deleteOneUser = async (payload) => {
  const user = new User();
  const delCommand = async (payload) => {
    return await user.deleteUser(payload);
  };
  return delCommand(payload);
};


module.exports = {
  postDataLogin : postDataLogin,
  postDataRegister : postDataRegister,
  passwordReset: passwordReset,
  passwordUpdate: passwordUpdate,
  putOneUser: putOneUser,
  deleteOneUser: deleteOneUser
};
