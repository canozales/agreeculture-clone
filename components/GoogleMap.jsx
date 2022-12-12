import React from 'react';

const GoogleMap = () => {
  return (
    <div className='home-10'>
      <iframe
        className='peta'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2004064977323!2d106.79674771455494!3d-6.237295295485041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1419239522b%3A0x8af4eb77e530e0a4!2sTelkom%20STO%20Kebayoran!5e0!3m2!1sen!2sid!4v1668125259555!5m2!1sen!2sid'
        allowFullScreen=''
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  );
};

export default GoogleMap;
