import React from 'react';
import landingPages from '../../public/assets/data/landingPages';
import LandingEight from '../../components/LandingEight';
import LandingNine from '../../components/LandingNine';
import GoogleMap from '../../components/GoogleMap';
import Layout from '../Layout';
import Head from 'next/head';

const index = () => {
  return (
    <>
      <Layout navbarType={1}>
        <Head>
          <title>Tentang Kami</title>
        </Head>

        <LandingEight />
        <LandingNine data={landingPages.landingNine} />
        <GoogleMap />
      </Layout>
    </>
  );
};

export default index;
