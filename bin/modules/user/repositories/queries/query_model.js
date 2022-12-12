
const generalUser = () => {
  const model = {
    _id: '',
    name:'',
    email:'',
    password:'',
    job:'',
    gender:'',
    location:''
  };
  return model;
};

module.exports = {
  generalUser: generalUser
};
