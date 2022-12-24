import React from 'react';
import wave from '../../public/assets/images/wave3.png';
import logo from '../../public/assets/images/logo.png';
import Image from 'next/image';
import {
  AiOutlineCheck,
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineWarning,
} from 'react-icons/ai';
import BackTo from '../../components/BackTo';
import Link from 'next/link';
import Dialogue from '../../components/Dialogue';
import { addUser } from '../../api-helpers/backend/utils';
import Head from 'next/head';
import Router from 'next/router';

const Register = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [password2, setPassword2] = React.useState('');

  const [correctEmail, setCorrectEmail] = React.useState(true);
  const [correctPassword, setCorrectPassword] = React.useState(true);
  const [matchPassword, setMatchPassword] = React.useState(true);

  const [setuju, setSetuju] = React.useState(false);
  const [hidePass1, setHidePass1] = React.useState(true);
  const [hidePass2, setHidePass2] = React.useState(true);

  const [dialogueOpen, setDialogueOpen] = React.useState(false);
  const [warningOpen, setWarningOpen] = React.useState(false);
  const [pesanWarning, setPesanWarning] = React.useState(false);

  return (
    <div className='register' data-testid='register-one'>
      <Head>
        <title>Register</title>
      </Head>
      <div className='kiri' data-testid='register-two'>
        <div data-testid='register-three'>
          <Link className='link' href='/' style={{ marginBottom: '3rem' }}>
            <BackTo text='Kembali ke Beranda' />
          </Link>

          <Image className='image' src={logo} alt='Image'></Image>
          <span>
            Daftar sekarang untuk digitalisasi pertanian & tingkatkan bisnis
            anda
          </span>
          <div className='list'>
            <AiOutlineCheck className='logo' />
            <span>
              Jalin kerjasama dengan perusahaan, pemodal dan penjual komoditas
              agribisnis
            </span>
          </div>
          <div className='list'>
            <AiOutlineCheck className='logo' />
            <span>
              Kembangkan bisnis pertanian secara terpusat dan terintegrasi penuh
            </span>
          </div>
          <div className='list'>
            <AiOutlineCheck className='logo' />
            <span>
              Pendaftaran 1 pintu untuk dapat akses ke semua layanan Agree
            </span>
          </div>
        </div>
        <Image className='gambar' src={wave} alt='Image'></Image>
      </div>
      <div className='kanan' data-testid='register-four'>
        <div>
          <span>Daftar</span>
          <div className='kotak'>
            <span>Email</span>
            <input
              onChange={(x) => {
                setEmail(x.target.value);
                setCorrectEmail(/\S+@\S+\.\S+/.test(x.target.value));
              }}
              type='text'
              placeholder='Contoh: budisetiawan@agree.com'
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

          <div className='kotak' data-testid='register-five'>
            <span>Kata Sandi</span>
            <div
              style={{
                border: !correctPassword
                  ? '1px solid red'
                  : '1px solid #4d4d4d',
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

          <div className='kotak' data-testid='register-six'>
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

          <div className='syarat' data-testid='register-seven'>
            <input
              onChange={(x) => setSetuju(x.target.checked)}
              type='checkbox'
              name=''
              id='ceksyarat'
            />
            <label htmlFor='ceksyarat'>
              Saya setuju dengan Syarat dan Ketentuan yang berlaku
            </label>
          </div>
          <button
            onClick={() => {
              if (email === '' || password === '' || password2 === '') {
                setPesanWarning('Pastikan Email dan Password sudah Terisi');
                setWarningOpen(true);
              } else if (!correctEmail) {
                setPesanWarning('Pastikan Email Anda sesuai dengan Format');
                setWarningOpen(true);
              } else if (
                !matchPassword ||
                !correctPassword ||
                password !== password2
              ) {
                setPesanWarning('Silahkan Periksa Kembali Password Anda');
                setWarningOpen(true);
              } else if (!setuju) {
                setPesanWarning('Pastikan Anda setuju dengan Ketentuan');
                setWarningOpen(true);
              } else {
                addUser({ email, password, password2 })
                  .then((x) => {
                    console.log(x);
                    setDialogueOpen(true);
                  })
                  .catch((x) => {
                    setPesanWarning(x.response.data.data.message);
                    setWarningOpen(true);
                  });
              }
            }}
          >
            Daftar Sekarang
          </button>
          <span className='sudah'>
            Sudah Pernah Mendaftar?{' '}
            <Link className='link' href='/dtp/login'>
              Login disini
            </Link>{' '}
          </span>
        </div>
      </div>

      <Dialogue
        open={dialogueOpen}
        handleClose={() => Router.push('/dtp/login')}
        command={() => Router.push('/dtp/login')}
        judul='Pendaftaran Berhasil'
        sub='Silahkan Login untuk Menikmati Fitur Agree'
        but2='OK'
      />
      <Dialogue
        open={warningOpen}
        handleClose={() => setWarningOpen(false)}
        command={() => setWarningOpen(false)}
        judul='Tidak dapat Register'
        sub={pesanWarning}
        but2='OK'
      />
    </div>
  );
};

export default Register;
