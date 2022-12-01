const { v4: uuidv4 } = require('uuid');

const generalUser = () => {
  const model = {
    _id: uuidv4(),
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
