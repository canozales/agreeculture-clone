const jwt = require('jsonwebtoken');
const config = require('../infra/configs/global_config');
const wrapper = require('../helpers/utils/wrapper');
const fetch = require('node-fetch');

const generateToken = async (payload) => {
  const token = jwt.sign(payload, config.getSecretToken());
  return token;
};

const verifyToken = async (req, res, next) => {
  const result = {
    data: null
  };

  const token = req.header('auth-token');
  if(!token){
    wrapper.response(res, 'fail', result, 'Invalid token!', 403);
  }
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, config.getSecretToken());
  } catch (error) {
    if(error instanceof jwt.TokenExpiredError){
      wrapper.response(res, 'fail', result, 'Access token expired!', 401);
    }else{
      wrapper.response(res, 'fail', result, 'Token is not valid!', 401);
    }
  }
  const userId = decodedToken.userId;
  // const param = {'_id': userId};
  await fetch(`http://localhost:8000/api/v1/user/${userId}`, {
    method: 'GET',
    headers: {
      'auth-token' : token
    },
  }).then( async (response) => {
    const json = await response.json();
    const id = json['data']['_id'];
    if( id != userId){
      wrapper.response(res, 'fail', result, 'test!', 403);
    }
  });
  req.userId = userId;
  next();
};

module.exports = {
  generateToken,
  verifyToken
};
