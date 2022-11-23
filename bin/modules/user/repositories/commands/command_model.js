

const generalUser = () => {
  const model = {
    uuid: '',
    name:'',
    email:'',
    password:'',
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
