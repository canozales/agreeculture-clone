import React from 'react';
import Image from 'next/image';
import logo from '../../public/assets/images/logo.png';
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineWarning,
} from 'react-icons/ai';
import BackTo from '../../components/BackTo';
import Link from 'next/link';
import { userLogin } from '../../api-helpers/backend/utils';
import Dialogue from '../../components/Dialogue';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import Head from 'next/head';

const jwt = require('jsonwebtoken');

const login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [hidePass, setHidePass] = React.useState(true);

  const [correctEmail, setCorrectEmail] = React.useState(true);
  const [correctPassword, setCorrectPassword] = React.useState(true);

  const [warningOpen, setWarningOpen] = React.useState(false);
  const [dialogueOpen, setDialogueOpen] = React.useState(false);

  const [pesanJudul, setPesanJudul] = React.useState(false);
  const [pesanWarning, setPesanWarning] = React.useState(false);

  const router = useRouter();
  const ref = React.useRef(null);

  let rememberMe = false;
  let rememberEmail;

  if (Cookies.get('rememberMe')) {
    rememberMe = true;
    rememberEmail = Cookies.get('rememberEmail');
  }

  return (
    <div className='login'>
      <Head>
        <title>Login</title>
      </Head>
      <Link className='link' href='/'>
        <BackTo text='Kembali ke Beranda' />
      </Link>

      <div className='kontainer'>
        <Image className='logo' src={logo} alt='Image'></Image>
        <span>Login</span>
        <span>Masukkan Email dan Kata Sandi untuk masuk ke Agree</span>

        <div className='kotak'>
          <span>Email</span>
          <input
            onChange={(x) => {
              setEmail(x.target.value);
              setCorrectEmail(/\S+@\S+\.\S+/.test(x.target.value));
            }}
            type='text'
            defaultValue={rememberMe ? rememberEmail : ''}
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

        <div className='kotak'>
          <span>Kata Sandi</span>
          <div
            style={{
              border: !correctPassword ? '1px solid red' : '1px solid #4d4d4d',
            }}
          >
            <input
              onChange={(x) => {
                setPassword(x.target.value);
                setCorrectPassword(x.target.value.length >= 8);
              }}
              type={hidePass ? 'password' : 'text'}
              placeholder='Masukkan kata sandi Anda'
            />

            {hidePass ? (
              <AiOutlineEye
                onClick={() => setHidePass(false)}
                className='logo'
                color={!correctPassword ? 'red' : ''}
              />
            ) : (
              <AiOutlineEyeInvisible
                onClick={() => setHidePass(true)}
                className='logo'
                color={!correctPassword ? 'red' : ''}
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

        <div className='lupa'>
          <div>
            <input
              ref={ref}
              type='checkbox'
              id='cek1'
              defaultChecked={rememberMe}
            />
            <label htmlFor='cek1'>Ingat Saya</label>
          </div>

          <Link className='link' href='/dtp/forgot-password'>
            Lupa Kata Sandi?
          </Link>
        </div>
        <button
          onClick={() => {
            if (email === '' || password === '') {
              setPesanJudul('Tidak dapat Login');
              setPesanWarning('Pastikan Email dan Password sudah Terisi');
            } else if (!correctEmail) {
              setPesanJudul('Tidak dapat Login');
              setPesanWarning('Pastikan Email Anda sesuai dengan Format');
              setWarningOpen(true);
            } else if (!correctPassword) {
              setPesanJudul('Tidak dapat Login');
              setPesanWarning('Silahkan Periksa Kembali Password Anda');
              setWarningOpen(true);
            } else {
              userLogin({ email, password })
                .then((x) => {
                  const { userId, email, name, imageUrl } = jwt.verify(
                    x,
                    '234q34c5q3x45x1345x1'
                  );
                  if (ref.current.checked) {
                    Cookies.set('rememberMe', true);
                    Cookies.set('rememberEmail', email);
                  } else {
                    Cookies.set('rememberMe', false);
                  }

                  localStorage.setItem('gambar', imageUrl);
                  Cookies.set('id', userId, { expires: 1 });
                  Cookies.set('jwt', x, { expires: 1 });
                  Cookies.set('nama', name !== '' ? name : email, {
                    expires: 1,
                  });
                })
                .then(() => {
                  setDialogueOpen(true);
                })
                .catch((x) => {
                  console.log(x.response.data.data.message);
                  setPesanJudul('Tidak dapat Login');
                  setPesanWarning(x.response.data.data.message);
                  setWarningOpen(true);
                });
            }
          }}
        >
          Masuk
        </button>
        <span className='belum'>
          Belum punya akun?{' '}
          <Link className='link' href='/dtp/register'>
            Daftar Sekarang
          </Link>{' '}
        </span>
      </div>

      <Dialogue
        open={warningOpen}
        handleClose={() => setWarningOpen(false)}
        command={() => setWarningOpen(false)}
        judul={pesanJudul}
        sub={pesanWarning}
        but2='OK'
      />
      <Dialogue
        open={dialogueOpen}
        handleClose={() => {
          router.push('/dtp');
          router.push('/dtp');
        }}
        command={() => {
          router.push('/dtp');
          router.push('/dtp');
        }}
        judul='Berhasil Login'
        sub='Anda dapat Langsung menikmati Fasilitas Agree'
        but2='OK'
      />
    </div>
  );
};

export default login;
