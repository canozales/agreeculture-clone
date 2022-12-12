import React from 'react';
import Link from 'next/link';
import { AiOutlineRight } from 'react-icons/ai';
import RangkaianKartu from '../RangkaianKartu';

const Introdtp = ({ t1, t2, t3, destinasi, dataKartu, image, warna }) => {
  return (
    <div className='dtp company'>
      <div style={{ backgroundImage: `url(${image})` }} className='perusahaan'>
        <div>
          <span>{t1}</span>
          <span>{t2}</span>
          <button style={{ backgroundColor: warna ? warna : 'nocolor' }}>
            {t3}
          </button>
        </div>
      </div>

      <div className='kedua'>
        <span>Fitur Unggulan</span>
        <Link className='link' href={destinasi}>
          <span>Pelajari Lebih Lanjut</span>
          <AiOutlineRight className='logo' />
        </Link>
      </div>

      <RangkaianKartu data={dataKartu} />
    </div>
  );
};

export default Introdtp;
