import React from 'react';
import Searching from '../../components/Searching';
import Layout from '../Layout';
import Head from 'next/head';

const index = () => {
  return (
    <>
      <Layout navbarType={1}>
        <Head>
          <title>Berita Kegiatan</title>
        </Head>
        <Searching />
      </Layout>
    </>
  );
};

export default index;
