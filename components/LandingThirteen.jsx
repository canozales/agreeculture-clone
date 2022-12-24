import React from 'react';
import Image from 'next/image';

const LandingThirteen = ({ data }) => {
  return (
    <div
      className={`home-13 ${data.background}`}
      data-testid='landing-thirteen'
    >
      <div>
        <Image className='gambar' src={data.imageLeft} alt='image'></Image>
        <span>{data.text}</span>
        <button className={data.color}>{data.textButton}</button>
      </div>
      <Image className='gambar2' src={data.imageRight} alt='image'></Image>
      <Image className='ombak' src={data.imageBottom} alt='image'></Image>
    </div>
  );
};

export default LandingThirteen;
