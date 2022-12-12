import React from 'react';
import { BiChevronRight } from 'react-icons/bi';
import KartuBerita from './KartuBerita';

const LandingSeven = ({ data }) => {
  return (
    <div className='home-7'>
      <div className='atas'>
        <span>Berita & Kegiatan Agree</span>
        <div>
          <span>Lihat Berita & Kegiatan Lainnya</span>
          <BiChevronRight className='logo' />
        </div>
      </div>
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
