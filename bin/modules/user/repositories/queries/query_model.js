
const generalUser = () => {
  const model = {
    _id: '',
    name:'',
    email:'',
    password:'',
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
  };
  return model;
};

module.exports = {
  generalUser: generalUser
};
