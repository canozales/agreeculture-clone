import React from 'react';
import RangkaianKartu from './RangkaianKartu';

const LandingFourteen = ({ data, heading }) => {
  return (
    <div className='home-14' data-testid='landing-fourteen'>
      <span>{heading.title}</span>
      <span>{heading.text}</span>
      <RangkaianKartu data={data} />
    </div>
  );
};

export default LandingFourteen;
