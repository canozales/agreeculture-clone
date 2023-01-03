import React from 'react';
import BackTo from '../../components/BackTo';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/assets/images/logo.png';
import Head from 'next/head';

const Home = () => {
  return (
    <div className='login'>
      <Head>
        <title>Lupa Password</title>
      </Head>
      <Link className='link' href='/'>
        <BackTo text='Kembali ke Beranda' />
      </Link>

      <div className='kontainer'>
        <Image className='logo' src={logo} alt='Image'></Image>
        <span>Lupa Kata Sandi</span>
        <span>Masukkan email untuk atur ulang Password</span>

        <div className='kotak'>
          <span>Email</span>
          <input type='text' placeholder='Masukkan email yang terdaftar' />
        </div>

        <button>Atur Ulang Kata Sandi</button>
      </div>

      <Link
        className='link'
        href='/dtp/login'
        style={{
          left: 0,
          righ: 0,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '2.5rem',
        }}
      >
        <BackTo text='Kembali ke Login' />
      </Link>
    </div>
  );
};

export default Home;
