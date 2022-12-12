import React from 'react';
import Image from 'next/image';

const Kartu = ({ image, title, text, color }) => (
  <div className='kartu'>
    <Image className='gambar' src={image} alt='gambar'></Image>
    <span className={color}>{title}</span>
    <span>{text}</span>
  </div>
);

const RangkaianKartu = ({ data }) => {
  return (
    <div className='rangkaiKartu'>
      {React.Children.toArray(
        data.map((x) => (
          <Kartu
            image={x.image}
            title={x.title}
            text={x.text}
            color={x.color}
          />
        ))
      )}
    </div>
  );
};

export default RangkaianKartu;
