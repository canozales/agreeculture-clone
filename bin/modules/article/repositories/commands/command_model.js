const { v4: uuidv4 } = require('uuid');

const generalArticle = () => {
  const model = {
    _id:uuidv4(),
    userId:'',
    judul:'',
    subjudul:'',
    image:'',
    author:'',
    tags:[],
    belongsTo:'',
    content: '',
    status:'',
    createdAt:'',
    updatedAt:'',
  };
  return model;
};

module.exports = {
  generalArticle: generalArticle
};
