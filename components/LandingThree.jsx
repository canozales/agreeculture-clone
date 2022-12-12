import React from 'react';
import { BiChevronRight } from 'react-icons/bi';
import Image from 'next/image';

const Kartu = ({ seri, image1, image2, text, textTombol }) => (
  <div className={`${seri} flex-y-between-start`}>
    <Image className='gambarKartu' src={image1} alt='Image'></Image>
    <span>{text}</span>
    <div>
      <span>{textTombol}</span>
      <BiChevronRight className='logo' />
    </div>
    <Image className='image' src={image2} alt='Image'></Image>
  </div>
);

const LandingThree = ({ data }) => {
  return (
    <div className='home-3 flex-y-between'>
      <div className='centering'>
        <h4>Agriculture Technology</h4>
        <span>
          Mulai dari permodalan, pembibitan, hingga penjualan, semua ada di
          Agree. Yuk, cari dan pilih kebutuhan bisnis pertanian Anda disini
        </span>
      </div>

      <div className='holding'>
        {React.Children.toArray(
          data
            .filter((x) => x.seri === 'kartu-1')
            .map((x) => (
              <Kartu
                seri={x.seri}
                image1={x.image1}
                image2={x.image2}
                text={x.text}
                textTombol={x.textTombol}
              />
            ))
        )}
      </div>

      <div className='holding'>
        {React.Children.toArray(
          data
            .filter((x) => x.seri === 'kartu-2')
            .map((x) => (
              <Kartu
                seri={x.seri}
                image1={x.image1}
                image2={x.image2}
                text={x.text}
                textTombol={x.textTombol}
              />
            ))
        )}
      </div>
    </div>
  );
};

export default LandingThree;
