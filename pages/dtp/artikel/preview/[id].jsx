import React from 'react';
import BackTo from '../../../../components/BackTo';
import Link from 'next/link';
import Cookies from 'js-cookie';

import { useState } from 'react';
import { useRouter } from 'next/router';
import { getBeritaById } from '../../../../api-helpers/backend/utils';

const Tambah = () => {
  const router = useRouter();
  const idBerita = router.query.id;
  const penulis = String(Cookies.get('nama'));
  const jwt = String(Cookies.get('jwt'));
  const [judul, setJudul] = useState('');
  const [subJudul, setSubJudul] = useState('');
  const [value, setValue] = useState(idBerita);
  const [tanggal, setTanggal] = React.useState(new Date());

  React.useEffect(() => {
    if (!router.isReady) return;

    getBeritaById(router.query.id, jwt)
      .then((data) => {
        setJudul(data.judul);
        setSubJudul(data.subjudul);
        setValue(data.content);
        setTanggal(
          new Date(data.updatedAt !== '' ? data.updatedAt : data.createdAt)
        );
      })
      .catch((err) => {
        console.log(err);
        router.push('/dtp/artikel/');
      });
  }, [router.isReady]);

  return (
    <>
      <div className='tambah2'>
        <Link className='link' href='/dtp/artikel'>
          <BackTo text='Kembali ke Draft' />
        </Link>

        <span>Pratinjau Artikelmu</span>
        <div className='pratinjau'>
          <span>{judul}</span>
          <span>{subJudul}</span>
          <div>
            <span>{'Oleh ' + penulis}</span>
            <span>{`${tanggal.toLocaleDateString('default', {
              day: '2-digit',
            })} ${tanggal.toLocaleDateString('default', {
              month: 'long',
            })} ${tanggal.toLocaleDateString('default', {
              year: 'numeric',
            })}`}</span>
          </div>
          <div dangerouslySetInnerHTML={{ __html: value }}></div>
        </div>
      </div>
    </>
  );
};

export default Tambah;
