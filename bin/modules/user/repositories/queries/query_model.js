

const generalUser = () => {
  const model = {
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
