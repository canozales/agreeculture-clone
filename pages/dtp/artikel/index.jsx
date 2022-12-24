import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../Layout';

import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { deleteBerita } from '../../../api-helpers/backend/utils';
import { getBeritaByOwner } from '../../../api-helpers/backend/utils';
import { Kartu1, Kartu2 } from '../../../components/dtp/Artikel';
import { useRouter } from 'next/router';

import landingPages from '../../../public/assets/data/landingPages';
import KartuBerita from '../../../components/KartuBerita';
import Dialogue from '../../../components/Dialogue';
import Cookies from 'js-cookie';

const Artikel = () => {
  const [data, setData] = React.useState([]);
  const id = Cookies.get('id');
  const jwt = Cookies.get('jwt');
  console.log(jwt);
  const router = useRouter();
  const [dialogueOpen, setDialogueOpen] = React.useState(false);
  const [idHapus, setIdHapus] = React.useState('');

  React.useEffect(() => {
    getBeritaByOwner(id, jwt)
      .then((x) => {
        setData(x);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Layout navbarType={2} active={5}>
      <Head>
        <title>Artikel</title>
      </Head>
      <div className='dtp'>
        <div className='article'>
          <span>Artikel</span>

          <div className='tulis'>
            <div>
              <span>Tulis artikelmu yuk</span>
              <span>
                Sharing pengetahuanmu tentang agrikultur untuk membantu
                mengembangkan agrikultur di Indonesia dan dapatkan reward poin!
              </span>
            </div>
            <Link href='/dtp/artikel/tambah'>
              <button>Tulis Artikel</button>
            </Link>
          </div>

          <div className='tulis2'>
            {data.length !== 0 ? (
              <>
                {' '}
                <span>Artikelmu</span>
                <div className='dataKartu'>
                  {React.Children.toArray(
                    data.map((x) => (
                      <Kartu1
                        x={x}
                        router={router}
                        setIdHapus={setIdHapus}
                        setDialogueOpen={setDialogueOpen}
                      />
                    ))
                  )}
                </div>
                <div className='konten-table'>
                  <div>
                    <span>Judul Konten</span>
                    <span>Tanggal Diperbarui</span>
                    <span>Status</span>
                    <span></span>
                  </div>

                  {React.Children.toArray(
                    data.map((x) => (
                      <Kartu2
                        x={x}
                        router={router}
                        setIdHapus={setIdHapus}
                        setDialogueOpen={setDialogueOpen}
                      />
                    ))
                  )}
                </div>
                <div className='navigate-bottom'>
                  <AiOutlineLeft className='logo' />
                  <span>1/1</span>
                  <AiOutlineRight className='logo' />
                </div>
              </>
            ) : (
              <div className='belum'>
                <span>Kamu belum punya artikel</span>
                <span>
                  Yuk mulai tulis artikel dan bagikan pengetahuanmu sekarang
                  agar manfaatnya bisa dirasakan banyak orang
                </span>

                <Link href='/dtp/artikel/tambah'>
                  <button style={{ cursor: 'pointer' }}>Tulis Artikel</button>
                </Link>
              </div>
            )}
          </div>

          <div className='tulis3'>
            <div>
              <span>Artikel Spesial untuk Kamu</span>
              <Link className='link' href='/agreepedia/artikel'>
                <span>Lihat Semua</span>
              </Link>
            </div>
            <div className='holder'>
              {React.Children.toArray(
                landingPages.daftarBerita
                  .slice(0, 8)
                  .map((x) => (
                    <KartuBerita
                      image={x.image}
                      text={x.text}
                      sektor={x.sektor}
                      date={x.date}
                    />
                  ))
              )}
            </div>
          </div>
        </div>
        <Dialogue
          open={dialogueOpen}
          handleClose={() => setDialogueOpen(false)}
          command={() => {
            deleteBerita(idHapus, jwt)
              .then(() => {
                router.reload(window.location.pathname);
              })
              .catch((x) => {
                console.log(x);
              });
          }}
          judul='Konfirmasi Hapus'
          sub='Artikelmu akan dihapus dari Database Agreepedia'
          but1='Kembali'
          but2='Hapus'
        />
      </div>
    </Layout>
  );
};

export default Artikel;
