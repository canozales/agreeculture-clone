import Image from 'next/image';
import React from 'react';

const KartuBerita = ({ image, sektor, date, text }) => (
  <div className='kartu-berita-2'>
    <Image
      width={1000}
      height={1000}
      className='gambar'
      src={image}
      alt='Image'
    ></Image>
    <div className='kol'>
      <div className='flex'>
        {React.Children.toArray(sektor.map((x) => <span>{x}</span>))}
      </div>
      <span>{text.length > 70 ? `${text.substring(0, 70)}...` : text}</span>
      <div className='flex-bet'>
        <span>agree</span>
        <span>{date}</span>
      </div>
    </div>
  </div>
);

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
      { align: [] },
    ],
    [{ color: [] }, 'link', 'image', 'video'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'align',
  'strike',
  'script',
  'blockquote',
  'background',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
  'color',
  'code-block',
];

export { KartuBerita, modules, formats };
