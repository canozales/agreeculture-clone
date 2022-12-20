import React from 'react';

const LandingSix = ({ text1, text2, text3, background }) => {
  return (
    <div className='home-6 '>
      <span>{text1}</span>
      <span>{text2}</span>
      <span style={{ backgroundColor: `${background}`, cursor: 'pointer' }}>
        {text3}
      </span>
    </div>
  );
};

export default LandingSix;
