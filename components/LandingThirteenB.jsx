import React from 'react';
import Image from 'next/image';

const LandingThirteenB = ({ data }) => {
  return (
    <div className={`home-13b ${data.background}`}>
      <div>
        <Image className='gambar' src={data.imageLeft} alt='Image'></Image>
        <span>{data.text}</span>
        <button className={data.color}>Hubungi Kami</button>
      </div>
    </div>
  );
};

export default LandingThirteenB;
