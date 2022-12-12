import React from 'react';
import Layout from '../Layout';
import landingPages from '../../public/assets/data/landingPages';
import Introdtp from '../../components/dtp/Introdtp';
import perusahaan2 from '../../public/assets/images/perusahaan2.svg';
import Head from 'next/head';

const Penjual = () => {
  return (
    <Layout navbarType={2} active={3}>
      <Head>
        <title>Penjual</title>
      </Head>
      <Introdtp
        t1='Jadi penjual pertanian dari komoditas petani terbaik'
        t2='Jual - Beli komoditas terbaik dari petani yang dikelola langsung oleh Agree'
        t3='Daftar sebagai Penjual'
        destinasi='/landing/agree-market'
        dataKartu={landingPages.dataKartu7}
        image={perusahaan2.src}
        warna='#9bce54'
      />
    </Layout>
  );
};

export default Penjual;
