import React from 'react';
import Layout from '../Layout';
import landingPages from '../../public/assets/data/landingPages';
import Introdtp from '../../components/dtp/Introdtp';
import perusahaan from '../../public/assets/images/perusahaan.svg';
import Head from 'next/head';

const Perusahaan = () => {
  return (
    <Layout navbarType={2} active={2}>
      <Head>
        <title>Perusahaan</title>
      </Head>
      <Introdtp
        t1='Monitor seluruh kegiatan pertanian dari meja kantormu'
        t2='Dapatkan seluruh data kegiatan pertanian untuk melihat aktivitas
      dan prediksi hasil pertanian'
        t3='Daftar sebagai Perusahaan'
        destinasi='/landing/agree-partner'
        dataKartu={landingPages.dataKartu2}
        image={perusahaan.src}
      />
    </Layout>
  );
};

export default Perusahaan;
