import React from 'react';
import { BsCheck2Circle } from 'react-icons/bs';

const LandingSixteen = ({ data, background }) => {
  return (
    <div className={`home-16 ${background}`} data-testid='landing-sixteen'>
      <div>
        {React.Children.toArray(
          data.map((x) => (
            <div>
              <div>
                <BsCheck2Circle className='logo' />
                <span>{x.title1}</span>
              </div>
              <span>{x.title2}</span>
              <span>{x.text}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default LandingSixteen;
