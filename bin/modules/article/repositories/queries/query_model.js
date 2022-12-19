const generalArticle = () => {
  const model = {
    _id:'',
    userId:'',
    judul:'',
    subjudul:'',
    image:'',
    author:'',
    category:[],
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
