// const wrapper = require('../../../../helpers/utils/wrapper');
// const validator = require('../../utils/validator');
const Article = require('./domain');

const getOneArticle = async (queryParam) => {
  const getQuery = async (queryParam) => {
    const article = new Article(queryParam);
    const result = await article.viewOneArticle();
    return result;
  };
  const result = await getQuery(queryParam);
  return result;
};


const getAllArticles = async (queryParam) => {
  const getQuery = async (queryParam) => {
    const article = new Article(queryParam);
    const result = await article.viewAllArticles();
    return result;
  };

  const result = await getQuery(queryParam);
  return result;
};


module.exports = {
  getOneArticle : getOneArticle,
  getAllArticles : getAllArticles
};
