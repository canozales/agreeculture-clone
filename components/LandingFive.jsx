import React from 'react';

const LandingFive = ({ data }) => {
  return (
    <div className='home-5' data-testid='landing-five'>
      <div className='section'>
        <span>{data.text}</span>
        <div className='holding'>
          <div className='kartu'>
            <span>{data.petani}</span>
            <span>Petani Indonesia</span>
          </div>
          <div className='kartu'>
            <span>{data.perusahaan}</span>
            <span>Perusahaan Pertanian</span>
          </div>
          <div className='kartu'>
            <span>{data.permodalan}</span>
            <span>Permodalan</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingFive;
