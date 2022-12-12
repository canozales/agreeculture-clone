import React from 'react';
import { RiErrorWarningLine } from 'react-icons/ri';

const Iklan = ({ text1, text2, text3, iklan }) => (
  <div
    style={{
      backgroundImage: `url(${iklan})`,
    }}
    className='iklan-background'
  >
    <div className='iklan'>
      <span>{text1}</span>
      <span>{text2}</span>
      <div>
        <RiErrorWarningLine className='logo' />
        <span>{text3}</span>
      </div>
    </div>
  </div>
);

export default Iklan;
