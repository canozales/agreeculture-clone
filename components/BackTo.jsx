import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';

const BackTo = ({ text }) => {
  return (
    <div className='beranda'>
      <BsArrowLeft className='logo' />
      <span>{text}</span>
    </div>
  );
};

export default BackTo;
