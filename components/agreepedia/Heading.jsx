import React from 'react';
import Link from 'next/link';

const Heading = ({ text1, text2, text3, id }) => (
  <div style={{ scrollMarginTop: '5.5rem' }} className='heading' id={id}>
    <div className='garis'></div>
    <span>{text1}</span>
    <div>
      <span>{text2}</span>
      {text3 !== 'no' ? (
        <Link className='link' href='/agreepedia/artikel'>
          <span>{text3}</span>
        </Link>
      ) : null}
    </div>
  </div>
);

export default Heading;
