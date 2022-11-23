

const data = (data,description='',code=200) => {
  return {err:null,data:data,message:description,code:code};
};

const paginationData = (data,meta,description='',code=200) => {
  return {err:null,data:data,meta:meta,message:description,code:code};
};

const error = (err,description,code=500) => {
  return {err:err,data:'',message:description,code:code};
};

const response = (res,type,result,message,code) => {
  if(message){
    result.message = message;
  }
  if(code){
    result.code = code;
  }
  let status = false;
  switch(type){
  case 'fail':
    status = false;
    break;
  case 'success':
    status = true;
    break;
  }
  res.send(result.code,
    {
      success: status,
      data: result.data,
      message: result.message,
      code: result.code
    }
  );
};

const paginationResponse = (res,type,result,message=null,code=null) => {
  if(message){
    result.message = message;
  }
  if(code){
    result.code = code;
  }
  let status = 'error';
  switch(type){
  case 'fail':
    status = 'fail';
    break;
  case 'success':
    status = 'success';
    break;
  }
  res.send(
    {
      status: status,
      data: result.data,
      meta: result.meta,
      code: result.code,
      message: result.message
    }
  );
};

module.exports = {
  data: data,
  paginationData: paginationData,
  error: error,
  response: response,
  paginationResponse: paginationResponse
};
