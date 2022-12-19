// const wrapper = require('../../../../helpers/utils/wrapper');
// const validator = require('../../utils/validator');
const Article = require('./domain');

const postOneArticle = async (payload) => {
  const article = new Article();
  const postCommand = async (payload) => {
    return await article.addNewArticle(payload);
  };
  return postCommand(payload);
};

const putOneArticle = async (id, payload) => {
  const article = new Article();
  const putCommand = async (id, payload) => {
    return await article.updateArticle(id, payload);
  };
  return putCommand(id, payload);
};

const deleteOneArticle = async (id) => {
  const article = new Article();
  const delCommand = async (id) => {
    return await article.deleteArticle(id);
  };
  return delCommand(id);
};


module.exports = {
  postOneArticle : postOneArticle,
  putOneArticle : putOneArticle,
  deleteOneArticle : deleteOneArticle
};
