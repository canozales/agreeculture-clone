import React from 'react';
import landingPages from '../../public/assets/data/landingPages';
import LandingFourteen from '../../components/LandingFourteen';
import LandingSix from '../../components/LandingSix';
import LandingSixteen from '../../components/LandingSixteen';
import LandingSeventeen from '../../components/LandingSeventeen';
import LandingThirteenB from '../../components/LandingThirteenB';
import Layout from '../Layout';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Layout navbarType={1}>
        <Head>
          <title>Smart Farming</title>
        </Head>
        <LandingThirteenB data={landingPages.landingThirteen[3]} />
        <LandingFourteen
          data={landingPages.dataKartu8}
          heading={landingPages.smartFarming}
        />
        <LandingSeventeen
          data={landingPages.dataTestimoni4}
          heading={landingPages.pengantarTestimoni4}
        />

        <div className='kisah'>
          <span>Kisah Sukses</span>
          <span>
            Cerita Pak Santos seorang petani cabai dalam mengimplementasikan
            Agree Smart Farming
          </span>
        </div>
        <LandingSixteen
          data={landingPages.dataMasalah3}
          background='home-16-back-3'
        />
        <LandingSix
          text1='Bapak Santos sudah mendapatkan manfaat Smart'
          text2='Farming, saatnya Anda beraksi!'
          text3='Hubungi Kami'
          background='#47AF64'
        />
      </Layout>
    </>
  );
};
export default Home;
