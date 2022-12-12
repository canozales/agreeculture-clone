import React from 'react';
import Image from 'next/image';

const LandingFiveteen = ({ data }) => {
  return (
    <div className='home-15'>
      <div>
        <span>{data.title1}</span>
        <span>{data.title2}</span>
        <span>{data.text}</span>
        <button>Hubungi Kami</button>
      </div>
      <Image className='gambar' src={data.image} alt='gambar'></Image>
    </div>
  );
};

export default LandingFiveteen;
