import React from 'react';
import Image from 'next/image';

const KartuBerita = ({ image, sektor, date, text }) => (
  <div className='kartu-berita'>
    <Image
      width={1000}
      height={1000}
      className='gambar'
      src={image}
      alt='Image'
    ></Image>
    <div className='kol'>
      <div className='flex'>
        {React.Children.toArray(sektor.map((x) => <span>{x}</span>))}
      </div>
      <span>{text.length > 70 ? `${text.substring(0, 70)}...` : text}</span>
      <div className='flex-bet'>
        <span>agree</span>
        <span>{date}</span>
      </div>
    </div>
  </div>
);

export default KartuBerita;
