import React from 'react';
import Image from 'next/image';

const RangkaianKartu2 = ({ data }) => {
  return (
    <div className='rangkaiKartu2'>
      {React.Children.toArray(
        data.map((x) => (
          <div className='kartu flex-y-between'>
            <span>{x.text}</span>
            <div className='flex-y-between'>
              <span>{x.title1}</span>
              <span>{x.title2}</span>
            </div>
            <Image className='gambar' src={x.image} alt='Image'></Image>
          </div>
        ))
      )}
    </div>
  );
};

export default RangkaianKartu2;
