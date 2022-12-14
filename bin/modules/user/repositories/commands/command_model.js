const { v4: uuidv4 } = require('uuid');

const generalUser = () => {
  const model = {
    _id: uuidv4(),
    imageUrl: '',
    name:'',
    email: '',
    password:'',
    confirmPassword:'',
    job:'',
    gender:'',
    location:'',
    bio:'',
    social: {
      facebook:'',
      instagram:'',
      linkedin:'',
    },
    poin: 0,
    resetPassToken: '',
    createdAt: '',
    updatedAt:''

  };
  return model;
};

module.exports = {
  generalUser: generalUser
};
