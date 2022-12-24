import React from 'react';
import { BiChevronRight } from 'react-icons/bi';
import KartuBerita from './KartuBerita';
import Link from 'next/link';

const LandingSeven = ({ data }) => {
  return (
    <div className='home-7' data-testid='landing-seven'>
      <Link className='atas link' href='/berita-kegiatan'>
        <span>Berita & Kegiatan Agree</span>
        <div>
          <span>Lihat Berita & Kegiatan Lainnya</span>
          <BiChevronRight className='logo' />
        </div>
      </Link>
      <div className='bawah'>
        {React.Children.toArray(
          data
            .slice(0, 4)
            .map((x) => (
              <KartuBerita
                image={x.image}
                text={x.text}
                sektor={x.sektor}
                date={x.date}
              />
            ))
        )}
      </div>
    </div>
  );
};

export default LandingSeven;
