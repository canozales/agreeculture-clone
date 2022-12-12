import React from 'react';
import landingPages from '../../public/assets/data/landingPages';
import LandingThirteen from '../../components/LandingThirteen';
import LandingFourteen from '../../components/LandingFourteen';
import LandingSeventeen from '../../components/LandingSeventeen';
import LandingEighteen from '../../components/LandingEighteen';
import Layout from '../Layout';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Layout navbarType={1}>
        <Head>
          <title>Agree Market</title>
        </Head>
        <LandingThirteen data={landingPages.landingThirteen[2]} />
        <LandingFourteen
          data={landingPages.dataKartu7}
          heading={landingPages.headingMarket}
        />
        <LandingEighteen />
        <LandingSeventeen
          data={landingPages.dataTestimoni3}
          heading={landingPages.pengantarTestimoni3}
        />
      </Layout>
    </>
  );
};

export default Home;
