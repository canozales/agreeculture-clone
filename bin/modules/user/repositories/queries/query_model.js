const uniqueId = require('uuid-mongodb');


const generalUser = () => {
  const model = {
    _id: '',
    name:'',
    email:'',
    password:'',
    phone:'',
    country:'',
    address: {
      name:'',
      province:'',
      city:'',
      district:'',
      urbanVillage:'',
      zipCode:''
    },
    role:''
  };
  return model;
};

module.exports = {
  generalUser: generalUser
};
