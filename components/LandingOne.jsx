import React from 'react';
import Image from 'next/image';

const LandingOne = (props) => {
  return (
    <div className='home-1'>
      <div className='gambar flex-y-between-start'>
        <span>{props.textOne}</span>
        <span>{props.textTwo}</span>
        <span style={{ cursor: 'pointer' }}>Saya Tertarik</span>
      </div>
      <div className='sponsor'>
        <span>Dipercaya oleh Lembaga dan Perusahaan Besar</span>
        <div className='flexing'>
          {React.Children.toArray(
            props.images.map((data) => (
              <Image className='logo' src={data} alt='Image'></Image>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingOne;
