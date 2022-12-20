import React from 'react';
import landingPages from '../../public/assets/data/landingPages';
import LandingThirteen from '../../components/LandingThirteen';
import LandingFourteen from '../../components/LandingFourteen';
import LandingSix from '../../components/LandingSix';
import LandingFiveteen from '../../components/LandingFiveteen';
import LandingSixteen from '../../components/LandingSixteen';
import LandingSeventeen from '../../components/LandingSeventeen';
import KiriKanan from '../../components/KiriKanan';
import RangkaianKartu from '../../components/RangkaianKartu';
import Layout from '../Layout';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Layout navbarType={1}>
        <Head>
          <title>Agree Partner</title>
        </Head>
        <LandingThirteen data={landingPages.landingThirteen[0]} />
        <LandingFourteen
          data={landingPages.dataKartu1}
          heading={landingPages.headingPartner}
        />
        <LandingSeventeen
          data={landingPages.dataTestimoni1}
          heading={landingPages.pengantarTestimoni1}
        />
        <LandingFiveteen data={landingPages.landingFiveteen} />

        <RangkaianKartu data={landingPages.dataKartu2} />
        <div style={{ marginBottom: '5rem' }}></div>
        <KiriKanan data={landingPages.dataKiriKanan1} />

        <RangkaianKartu data={landingPages.dataKartu3} />
        <div style={{ marginBottom: '5rem' }}></div>
        <KiriKanan data={landingPages.dataKiriKanan2} />

        <RangkaianKartu data={landingPages.dataKartu4} />
        <div style={{ marginBottom: '5rem' }}></div>
        <KiriKanan data={landingPages.dataKiriKanan3} />

        <RangkaianKartu data={landingPages.dataKartu5} />
        <div className='kisah'>
          <span>Kisah Sukses</span>
          <span>
            Cerita singkat bagaimana UD Agro Trustech dapat memonitor petani
            mitra mereka secara digital dan menjadikan mereka bankable
          </span>
        </div>
        <LandingSixteen
          data={landingPages.dataMasalah1}
          background='home-16-back-1'
        />
        <LandingSix
          text1='Kembangkan bisnis pertanian Anda,'
          text2='tumbuh dengan pesat bersama Agree'
          text3='Saya Tertarik'
          background='#47AF64'
        />
      </Layout>
    </>
  );
};

export default Home;
