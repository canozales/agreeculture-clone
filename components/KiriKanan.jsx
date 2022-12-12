import React from 'react';
import Image from 'next/image';

const KiriKanan = ({ data }) =>
  data.status === 'kiri' ? (
    <div className='kiriKanan kiriKananReverse'>
      <Image className='gambarhp' src={data.image1} alt='image'></Image>
      <div>
        <span className={data.color}>{data.title1}</span>
        <span>{data.title2}</span>
        <span>{data.text}</span>
        {data.type === 'image' ? (
          <Image className='gambar' src={data.image2} alt='image'></Image>
        ) : (
          <button className={data.background}>Hubungi Kami</button>
        )}
      </div>
    </div>
  ) : (
    <div className='kiriKanan'>
      <div>
        <span className={data.color}>{data.title1}</span>
        <span>{data.title2}</span>
        <span>{data.text}</span>
        {data.type === 'image' ? (
          <Image className='gambar' src={data.image2} alt='image'></Image>
        ) : (
          <button className={data.background}>Hubungi Kami</button>
        )}
      </div>
      <Image className='gambarhp' src={data.image1} alt='image'></Image>
    </div>
  );

export default KiriKanan;
