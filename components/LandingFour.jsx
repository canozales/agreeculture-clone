import React from 'react';
import RangkaianKartu2 from './RangkaianKartu2';
import { BiChevronRight } from 'react-icons/bi';

const LandingFour = ({ data }) => {
  return (
    <div className='home-4'>
      <div className='main flex-y-between-start'>
        <span>Cerita dari mereka yang sudah bergabung</span>
        <span>
          Mari berkembang bersama Agree dan para petani. Mulai dari Anda, hingga
          seluruh Indonesia
        </span>
        <div className='bawah'>
          <span>Saya Mau Baca</span>
          <BiChevronRight className='logo' />
        </div>
      </div>
      <RangkaianKartu2 data={data} />
    </div>
  );
};

export default LandingFour;
