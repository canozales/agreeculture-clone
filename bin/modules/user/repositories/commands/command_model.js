const uniqueId = require('uuid-mongodb');

const generalUser = () => {
  const model = {
    _id: uniqueId.v4(),
    name:'',
    email: '',
    password:'',
    confirmPassword:'',
    phone:'',
    country:'',
    address:{},
    role:''

  };
  return model;
};

module.exports = {
  generalUser: generalUser
};
