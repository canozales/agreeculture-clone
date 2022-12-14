const generalArticle = () => {
  const model = {
    id:'',
    judul:'',
    author:'',
    category:[],
    content:'',
    createdAt:'',
    updatedAt:'',
  };
  return model;
};

module.exports = {
  generalArticle: generalArticle
};
