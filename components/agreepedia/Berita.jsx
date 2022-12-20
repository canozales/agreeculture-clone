import React from 'react';
import { RiErrorWarningLine } from 'react-icons/ri';
import Image from 'next/image';
import gambar from '../../public/assets/images/partner2a.png';

const Berita = ({ judul, subJudul, sektor, image, date, penulis }) => (
  <div style={{ cursor: 'pointer' }} className='berita'>
    <Image className='gambar' src={image} alt='image'></Image>
    <div className='kanan'>
      <span>{judul}</span>
      <span>{subJudul}</span>
      <div className='sektor'>
        {React.Children.toArray(sektor.map((x) => <span>{x}</span>))}
      </div>
      <div className='penulis'>
        <Image className='gambar' src={gambar} alt='image'></Image>
        <span>{penulis}</span>
        <RiErrorWarningLine className='logo' />
        <span>{date}</span>
      </div>
    </div>
  </div>
);

export default Berita;
