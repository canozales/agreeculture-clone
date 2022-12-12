import React from 'react';
import Image from 'next/image';
import gambar2 from '../../public/assets/images/dtp-dashboard.svg';
import Layout from '../Layout';
import Jelajah from '../../components/dtp/Jelajah';
import Head from 'next/head';
import { kartu1, kartu2 } from '../../components/dtp/Beranda';

const Home = () => {
  return (
    <>
      <Layout navbarType={2} active={1}>
        <Head>
          <title>Agreeculture Clone</title>
        </Head>
        <div className='dtp'>
          <div className='utama'>
            <span>Selamat Datang</span>
            <span>
              Dashboard satu pintu sebagai tempat kolaborasi dan interaksi
              seluruh pengguna ekosistem Agree
            </span>
            <Jelajah judul='Pilih kerja sama dengan Agree' kartu={kartu1} />
            <Jelajah
              judul='Kolaborasi dan Berbagi Bersama Agree'
              t1='Kamu siap menjelajah Agreepedia!'
              t2='Nikmati beragam artikel dan tingkatkan kemampuan agrikulturmu'
              kartu={kartu2}
            />

            <Image className='gambar-back' src={gambar2} alt='Image'></Image>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
