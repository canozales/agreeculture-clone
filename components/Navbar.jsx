import React from 'react';
import logo from '../public/assets/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import Popup from './Popup';
import { useState } from 'react';

import landingPages from '../public/assets/data/landingPages';
import {
  AiOutlineClose,
  AiOutlineEdit,
  AiOutlineSetting,
  AiOutlineLogout,
  AiOutlineMenu,
} from 'react-icons/ai';
import OutsideClickHandler from 'react-outside-click-handler';
import { FaUserCircle } from 'react-icons/fa';
import { BiChevronDown } from 'react-icons/bi';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const Navbar = () => {
  const [isPopup, setIsPopup] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [nama, setNama] = React.useState('');
  const [gambar, setGambar] = React.useState('undefined');
  const router = useRouter();

  React.useEffect(() => {
    if (Cookies.get('nama')) {
      setNama(String(Cookies.get('nama')));
    }
    const foto = localStorage.getItem('gambar');
    if (foto !== '') {
      setGambar(foto);
    }
  }, []);

  return (
    <>
      <div className='navbar'>
        <Link
          href='/'
          style={{
            top: '0',
            bottom: '0',
            marginTop: 'auto',
            marginBottom: 'auto',
          }}
        >
          <Image className='image' src={logo} alt='Image'></Image>
        </Link>

        <div className='flex-x-between tengah'>
          <span>
            <Link className='link' href='/tentang-kami'>
              Tentang Kami
            </Link>
          </span>

          <span style={{ cursor: 'pointer' }} onClick={() => setIsPopup(true)}>
            Layanan
          </span>
          <span>
            {' '}
            <Link className='link' href='/berita-kegiatan'>
              Berita dan Kegiatan Agree
            </Link>{' '}
          </span>
        </div>
        {nama !== '' ? (
          <div
            className=' profilex kanan2'
            style={{
              top: '0',
              bottom: '0',
              marginTop: 'auto',
              marginBottom: 'auto',
              position: 'relative',
            }}
          >
            <div
              className={`select ${showOptions ? 'profilex-effect' : ''}`}
              onClick={() => setShowOptions(true)}
            >
              {gambar !== 'undefined' ? (
                <Image
                  className='gambar'
                  width={100}
                  height={100}
                  src={gambar}
                  alt='Image'
                ></Image>
              ) : (
                <FaUserCircle className='logo' />
              )}

              <span>{nama}</span>
              <BiChevronDown className='logo' />
            </div>
            {showOptions && (
              <OutsideClickHandler
                onOutsideClick={() => {
                  setShowOptions(false);
                }}
              >
                <div
                  className='options'
                  style={{ position: 'absolute', width: '100%' }}
                >
                  <Link className='link' href='/dtp/profile'>
                    <div>
                      <AiOutlineEdit className='logo' />
                      <span>Edit Profil</span>
                    </div>
                  </Link>
                  <div>
                    <AiOutlineSetting className='logo' />
                    <span>Pengaturan</span>
                  </div>
                  <div
                    onClick={() => {
                      Cookies.remove('id');
                      Cookies.remove('nama');
                      Cookies.remove('jwt');
                      localStorage.removeItem('gambar');
                      router.push('/dtp/login');
                    }}
                  >
                    <AiOutlineLogout className='logo' />
                    <span>Keluar</span>
                  </div>
                </div>
              </OutsideClickHandler>
            )}
          </div>
        ) : (
          <div className='flex-x-between kanan'>
            <Link className='link' href='/dtp/login'>
              Masuk
            </Link>
            <span>
              <Link className='link' href='/dtp/register'>
                Daftar
              </Link>
            </span>
          </div>
        )}

        <div className='app__navbar-smallscreen'>
          <AiOutlineMenu
            className='logo'
            color='#47AF64'
            fontSize={35}
            onClick={() => setToggleMenu(true)}
            style={{
              top: '0',
              bottom: '0',
              marginTop: 'auto',
              marginBottom: 'auto',
            }}
          />
          {/* If True then Render Inside () */}
          {toggleMenu && (
            <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
              <AiOutlineClose
                fontSize={27}
                color='#47AF64'
                className='overlay__close logo'
                onClick={() => setToggleMenu(false)}
              />
              <ul className='app__navbar-smallscreen_links'>
                {nama !== '' && (
                  <div
                    className=' profilex kanan2 hide'
                    style={{
                      top: '0',
                      bottom: '0',
                      marginTop: 'auto',
                      marginBottom: '-1rem',
                      position: 'relative',
                    }}
                  >
                    <div
                      className={`select ${
                        showOptions ? 'profilex-effect' : ''
                      }`}
                      onClick={() => setShowOptions(true)}
                    >
                      {gambar !== 'undefined' ? (
                        <Image
                          className='gambar'
                          width={100}
                          height={100}
                          src={gambar}
                          alt='Image'
                        ></Image>
                      ) : (
                        <FaUserCircle className='logo' />
                      )}
                      <span>{nama}</span>
                      <BiChevronDown className='logo' />
                    </div>
                    {showOptions && (
                      <OutsideClickHandler
                        onOutsideClick={() => {
                          setShowOptions(false);
                        }}
                      >
                        <div
                          className='options'
                          style={{ position: 'absolute', width: '100%' }}
                        >
                          <div>
                            <AiOutlineEdit className='logo' />
                            <span>Edit Profil</span>
                          </div>
                          <div>
                            <AiOutlineSetting className='logo' />
                            <span>Pengaturan</span>
                          </div>
                          <div
                            onClick={() => {
                              Cookies.remove('id');
                              Cookies.remove('nama');
                              Cookies.remove('jwt');
                              localStorage.removeItem('gambar');
                              router.push('/dtp/login');
                            }}
                          >
                            <AiOutlineLogout className='logo' />
                            <span>Keluar</span>
                          </div>
                        </div>
                      </OutsideClickHandler>
                    )}
                  </div>
                )}
                <li>
                  <Link
                    style={{ fontSize: '1.5rem' }}
                    className='link'
                    href='/tentang-kami'
                    onClick={() => setToggleMenu(false)}
                  >
                    Tentang Kami
                  </Link>
                </li>
                <li>
                  <span
                    style={{ cursor: 'pointer', fontSize: '1.5rem' }}
                    onClick={() => {
                      setIsPopup(true);
                      setToggleMenu(false);
                    }}
                    className='link'
                  >
                    Layanan
                  </span>
                </li>
                <li>
                  <Link
                    style={{ fontSize: '1.5rem' }}
                    className='link'
                    href='/berita-kegiatan'
                    onClick={() => setToggleMenu(false)}
                  >
                    Berita dan Kegiatan Agree
                  </Link>
                </li>
                {nama === '' && (
                  <>
                    <li>
                      <Link
                        style={{ fontSize: '1.5rem' }}
                        className='link hide'
                        href='/dtp/login'
                        onClick={() => setToggleMenu(false)}
                      >
                        Masuk
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{ fontSize: '1.5rem' }}
                        className='link hide'
                        href='/dtp/register'
                        onClick={() => setToggleMenu(false)}
                      >
                        Daftar
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
      {isPopup && (
        <OutsideClickHandler
          onOutsideClick={() => {
            setIsPopup(false);
          }}
        >
          <Popup data={landingPages.popupLayanan} />
        </OutsideClickHandler>
      )}
    </>
  );
};

export default Navbar;
