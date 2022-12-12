import React from 'react';
import Image from 'next/image';

const RangkaianKartu3 = ({ data, warna }) => {
  return (
    <div className='rangkaiKartu3'>
      {React.Children.toArray(
        data.map((x) => (
          <div className='kartu flex-y-between'>
            <span>{x.text}</span>
            <div className='flex-y-between'>
              <span style={{ color: `${warna}` }}>{x.title1}</span>
              <span>{x.title2}</span>
            </div>
            <Image className='gambar' src={x.image} alt='gambar'></Image>
          </div>
        ))
      )}
    </div>
  );
};

export default RangkaianKartu3;
