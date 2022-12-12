const nodemailer = require('nodemailer');
const config = require('../../../infra/configs/global_config');
const wrapper = require('../../utils/wrapper');


let transporter;

const init = () => {
  const account = config.getEmailAccount();
  transporter = new nodemailer.createTransport({
    service: 'Gmail',
    host: 'smtp.gmail.com',
    secure: false,
    auth: {
      user: account.user,
      pass: account.pass
    }
  });
  transporter.verify((err, success) => {
    if (err) {
      wrapper.error(err);
    } else {
    //   console.log('Server is ready for taking our messages');
    }
  });
};

const sendMail = async (message) => {
  try {
    const send = transporter.sendMail(message);
    if(send){
      return wrapper.data(true);
    }
  } catch (err) {
    return wrapper.error(err);
  }
};

module.exports = {
  init,
  sendMail
};
