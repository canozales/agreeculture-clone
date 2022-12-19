const generalArticle = () => {
  const model = {
    _id:'',
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
