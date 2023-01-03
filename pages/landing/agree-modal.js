import React from 'react';
import landingPages from '../../public/assets/data/landingPages';
import LandingThirteen from '../../components/LandingThirteen';
import LandingFourteen from '../../components/LandingFourteen';
import LandingSix from '../../components/LandingSix';
import LandingSixteen from '../../components/LandingSixteen';
import LandingSeventeen from '../../components/LandingSeventeen';
import Layout from '../Layout';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Layout navbarType={1}>
        <Head>
          <title>Agree Modal</title>
        </Head>
        <LandingThirteen data={landingPages.landingThirteen[1]} />
        <LandingFourteen
          data={landingPages.dataKartu6}
          heading={landingPages.headingModal}
        />
        <LandingSeventeen
          data={landingPages.dataTestimoni2}
          heading={landingPages.pengantarTestimoni2}
        />
        <div className='kisah'>
          <span>Kisah Sukses</span>
          <span>
            Cerita singkat bagaimana UD Eden Farm mendapatkan pemodalan dari
            Agree sehingga dapat melanjutkan bisnis mereka
          </span>
        </div>
        <LandingSixteen
          data={landingPages.dataMasalah2}
          background='home-16-back-2'
        />
        <LandingSix
          text1='Eden Farm sudah mendapatkan manfaat'
          text2='dari bekerjasama dengan Agree'
          text3='Hubungi Kami'
          background='#29a4ea'
        />
      </Layout>
    </>
  );
};

export default Home;
