import React from 'react';
import BackTo from '../../../components/BackTo';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/assets/images/logo.png';
import Head from 'next/head';
import { AiOutlineWarning } from 'react-icons/ai';
import Dialogue from '../../../components/Dialogue';
import { lupaPassword } from '../../../api-helpers/backend/utils';

const Home = () => {
  const [email, setEmail] = React.useState('');
  const [correctEmail, setCorrectEmail] = React.useState(true);
  const [dialogueOpen, setDialogueOpen] = React.useState(false);
  const [warningOpen, setWarningOpen] = React.useState(false);

  return (
    <div className='login'>
      <Head>
        <title>Lupa Password</title>
      </Head>
      <Link className='link' href='/'>
        <BackTo text='Kembali ke Beranda' />
      </Link>

      <div className='kontainer'>
        <Image className='logo' src={logo} alt='Image'></Image>
        <span>Lupa Kata Sandi</span>
        <span>Masukkan email untuk atur ulang Password</span>

        <div className='kotak'>
          <span>Email</span>
          <input
            onChange={(x) => {
              setEmail(x.target.value);
              setCorrectEmail(/\S+@\S+\.\S+/.test(x.target.value));
            }}
            type='text'
            placeholder='Masukkan email yang terdaftar'
            style={{
              border: !correctEmail ? '1px solid red' : '1px solid #4d4d4d',
            }}
          />
          {!correctEmail && (
            <div className='warning'>
              <AiOutlineWarning className='logo' />
              <span>Email Anda tidak Sesuai Format</span>
            </div>
          )}
        </div>

        <button
          onClick={() => {
            if (correctEmail && email !== '') {
              lupaPassword({ email })
                .then((x) => {
                  console.log(x);
                  setDialogueOpen(true);
                })
                .catch((x) => {
                  console.log(x);
                  setWarningOpen(true);
                });
            } else {
              setWarningOpen(true);
            }
          }}
        >
          Atur Ulang Kata Sandi
        </button>
      </div>

      <Link
        className='link'
        href='/dtp/login'
        style={{
          left: 0,
          righ: 0,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '2.5rem',
        }}
      >
        <BackTo text='Kembali ke Login' />
      </Link>

      <Dialogue
        open={dialogueOpen}
        handleClose={() => setDialogueOpen(false)}
        command={() => setDialogueOpen(false)}
        judul='Reset Password'
        sub='Link Reset Password telah dikirim ke Email Anda'
        but2='OK'
      />

      <Dialogue
        open={warningOpen}
        handleClose={() => setWarningOpen(false)}
        command={() => setWarningOpen(false)}
        judul='Reset Password'
        sub='Email Tidak Terdaftar'
        but2='OK'
      />
    </div>
  );
};

export default Home;
