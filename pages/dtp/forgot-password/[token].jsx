import React from 'react';
import BackTo from '../../../components/BackTo';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/assets/images/logo.png';
import Head from 'next/head';
import {
  AiOutlineWarning,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from 'react-icons/ai';
import Dialogue from '../../../components/Dialogue';
import { useRouter } from 'next/router';
import { gantiPassword } from '../../../api-helpers/backend/utils';

const Home = () => {
  const [password, setPassword] = React.useState('');
  const [password2, setPassword2] = React.useState('');
  const [pesan, setPesan] = React.useState('');
  const [correctPassword, setCorrectPassword] = React.useState(true);
  const [matchPassword, setMatchPassword] = React.useState(true);
  const [dialogueOpen, setDialogueOpen] = React.useState(false);
  const [warningOpen, setWarningOpen] = React.useState(false);
  const [hidePass1, setHidePass1] = React.useState(true);
  const [hidePass2, setHidePass2] = React.useState(true);
  const router = useRouter();
  const [token, setToken] = React.useState('');

  React.useEffect(() => {
    if (!router.isReady) return;
    setToken(router.query.token);
  }, [router.isReady]);

  return (
    <div className='login'>
      <Head>
        <title>Reset Password</title>
      </Head>
      <Link className='link' href='/'>
        <BackTo text='Kembali ke Beranda' />
      </Link>

      <div className='kontainer'>
        <Image className='logo' src={logo} alt='Image'></Image>
        <span>Reset Password</span>
        <span>Masukkan kata sandi baru Anda</span>

        <div className='kotak'>
          <span>Kata Sandi</span>
          <div
            style={{
              border: !correctPassword ? '1px solid red' : '1px solid #4d4d4d',
            }}
          >
            <input
              type={hidePass1 ? 'password' : 'text'}
              placeholder='Minimal 8 Karakter'
              onChange={(x) => {
                setPassword(x.target.value);
                setCorrectPassword(x.target.value.length >= 8);
                setMatchPassword(password2 === x.target.value);
              }}
            />
            {hidePass1 ? (
              <AiOutlineEye
                className='logo'
                color={!correctPassword ? 'red' : ''}
                onClick={() => {
                  setHidePass1(false);
                }}
              />
            ) : (
              <AiOutlineEyeInvisible
                className='logo'
                color={!correctPassword ? 'red' : ''}
                onClick={() => {
                  setHidePass1(true);
                }}
              />
            )}
          </div>
          {!correctPassword && (
            <div className='warning'>
              <AiOutlineWarning className='logo' />
              <span>Password Minimal 8 Karakter</span>
            </div>
          )}
        </div>

        <div className='kotak'>
          <span>Konfirmasi Kata Sandi</span>
          <div
            style={{
              border: !matchPassword ? '1px solid red' : '1px solid #4d4d4d',
            }}
          >
            <input
              type={hidePass2 ? 'password' : 'text'}
              placeholder='Ulangi Kata Sandi Anda'
              onChange={(x) => {
                setPassword2(x.target.value);
                setMatchPassword(password === x.target.value);
              }}
            />
            {hidePass2 ? (
              <AiOutlineEye
                className='logo'
                color={!matchPassword ? 'red' : ''}
                onClick={() => {
                  setHidePass2(false);
                }}
              />
            ) : (
              <AiOutlineEyeInvisible
                className='logo'
                color={!matchPassword ? 'red' : ''}
                onClick={() => {
                  setHidePass2(true);
                }}
              />
            )}
          </div>
          {!matchPassword && (
            <div className='warning'>
              <AiOutlineWarning className='logo' />
              <span>Kedua Kata Sandi tidak Sesuai</span>
            </div>
          )}
        </div>

        <button
          onClick={() => {
            if (
              matchPassword &&
              correctPassword &&
              password !== '' &&
              password2 !== ''
            ) {
              console.log('before');
              console.log(token);
              gantiPassword({
                newPassword: password,
                confirmPassword: password2,
                token,
              })
                .then(() => {
                  console.log('after');
                  setPesan('Password Anda berhasil di Reset');
                  setDialogueOpen(true);
                  router.push('/dtp/login');
                  router.push('/dtp/login');
                })
                .catch((x) => {
                  setPesan(x);
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
        sub={pesan}
        but2='OK'
      />

      <Dialogue
        open={warningOpen}
        handleClose={() => setWarningOpen(false)}
        command={() => setWarningOpen(false)}
        judul='Reset Password'
        sub='Pastikan kedua Password Anda Sesuai'
        but2='OK'
      />
    </div>
  );
};

export default Home;
