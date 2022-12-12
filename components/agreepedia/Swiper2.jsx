import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Swiper2 = ({
  satu,
  dua,
  tiga,
  empat,
  lima,
  enam,
  backgroundShade,
  backgroundImage,
}) => (
  <div
    style={{ backgroundImage: `url(${backgroundImage})` }}
    className='slide-atas'
  >
    <div
      style={{
        background: backgroundShade,
      }}
      className='slide-bawah'
    >
      <span>{satu}</span>
      <span>{dua}</span>
      <span>{tiga}</span>
      <Link className='link' href='/dtp'>
        <button>{empat}</button>
      </Link>

      <div>
        <span>{lima}</span>
        <div>
          {React.Children.toArray(
            enam.map((x) => (
              <div>
                <Image className='gambar' src={x.gambar} alt='image'></Image>
                <span>{x.satu}</span>
                <span>{x.dua}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  </div>
);

export default Swiper2;
