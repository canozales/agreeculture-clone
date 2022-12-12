import React from 'react';
import Layout from '../Layout';
import perusahaan3 from '../../public/assets/images/perusahaan3.svg';
import { AiOutlineClose } from 'react-icons/ai';
import { RiErrorWarningLine } from 'react-icons/ri';
import Head from 'next/head';

const Pembeli = () => {
  const [terbuka, setTerbuka] = React.useState(true);

  return (
    <Layout navbarType={2} active={4}>
      <Head>
        <title>Pembeli</title>
      </Head>
      <div className='dtp company'>
        {terbuka && (
          <div className='ditutup'>
            <div>
              <RiErrorWarningLine className='logo' />
              <div>
                <span>Yuk, lengkapi data untuk jadi pembeli!</span>
                <span>
                  Interaksi jadi lebih mudah di Agree Market dengan data yang
                  lengkap
                </span>
              </div>
            </div>

            <AiOutlineClose
              onClick={() => setTerbuka(false)}
              style={{ cursor: 'pointer' }}
              className='logo'
            />
          </div>
        )}

        <div
          style={{ backgroundImage: `url(${perusahaan3.src})` }}
          className='perusahaan'
        >
          <div>
            <span>Penuhi berbagai kebutuhan Anda di Agree Market!</span>
            <span>
              Beli produk berkualitas hingga skala besar dari petani terbaik
              Agree.
            </span>
            <button style={{ backgroundColor: '#ffb035' }}>
              Lengkapi Data Pembeli
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Pembeli;
