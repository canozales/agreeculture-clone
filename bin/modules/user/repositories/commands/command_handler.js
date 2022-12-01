

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

// const postOneUser = async (payload) => {
//   const user = new User();
//   const postCommand = async (payload) => {
//       return await user.addNewUser(payload);
//   }
//   return postCommand(payload);
// }

const putOneUser = async (id, payload) => {
  const user = new User();
  const putCommand = async (id, payload) => {
      return await user.updateUser(id, payload);
  }
  return putCommand(id, payload);
}

const deleteOneUser = async (payload) => {
  const user = new User();
  const delCommand = async (payload) => {
      return await user.deleteUser(payload);
  }
  return delCommand(payload);
}


module.exports = {
  postDataLogin : postDataLogin,
  postDataRegister : postDataRegister,
  putOneUser: putOneUser,
  deleteOneUser: deleteOneUser
};
