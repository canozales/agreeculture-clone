import React from 'react';
import RangkaianKartu3 from './RangkaiKartu3';

const LandingSeventeen = ({ data, heading }) => {
  return (
    <div style={{ backgroundColor: `${heading.color}` }} className='home-17'>
      <span>{heading.title}</span>
      <span>{heading.text}</span>
      <RangkaianKartu3 data={data} warna={heading.colorText} />
    </div>
  );
};

export default LandingSeventeen;
