import React from 'react';
import { BiChevronRight } from 'react-icons/bi';
import Image from 'next/image';

const LandingTwo = (props) => {
  return (
    <div className='home-2' data-testid='landing-two'>
      <div className='flex-y-between-start kiri'>
        <span>{props.textOne}</span>
        <span>{props.textTwo}</span>
        <div style={{ cursor: 'pointer' }}>
          <span>Saya Mau Mempelajari Agree</span>
          <BiChevronRight className='logo' />
        </div>
      </div>
      <Image className='gambar' src={props.images} alt='Image'></Image>
    </div>
  );
};

export default LandingTwo;
