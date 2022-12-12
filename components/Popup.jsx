import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Kartu = ({ title, text, image, path }) => (
  <Link href={path} className='kartu'>
    <Image className='gambar' src={image} alt='Image'></Image>
    <div>
      <span>{title}</span>
      <span>{text}</span>
    </div>
  </Link>
);

const Popup = ({ data }) => {
  return (
    <div className='home-11'>
      {React.Children.toArray(
        data.map((x) => (
          <Kartu title={x.title} text={x.text} image={x.image} path={x.path} />
        ))
      )}
    </div>
  );
};

export default Popup;
