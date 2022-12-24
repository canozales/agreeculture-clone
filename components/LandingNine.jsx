import React from 'react';
import Image from 'next/image';

const Kartu = ({ title, text }) => (
  <div style={{ cursor: 'pointer' }} className='kartu'>
    <span>{title}</span>
    <span>{text}</span>
  </div>
);

const LandingNine = ({ data }) => {
  return (
    <div className='home-9' data-testid='landing-nine'>
      <Image className='gambar' src={data.image} alt='image'></Image>
      <span>{data.textOne}</span>
      <span>{data.textTwo}</span>
      <span>{data.textThree}</span>

      <span>Value Perusahaan</span>
      <span>Berikut adalah 3 nilai yang kami usung dalam tim kami</span>
      <div className='flex-bet'>
        {React.Children.toArray(
          data.kartu.map((x) => <Kartu title={x.title} text={x.text} />)
        )}
      </div>
    </div>
  );
};

export default LandingNine;
