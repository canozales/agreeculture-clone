import React from 'react';
import logo from '../public/assets/images/agree4.png';
import Image from 'next/image';
import Link from 'next/link';
import Popup from './Popup';
import { useState, useEffect } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import landingPages from '../public/assets/data/landingPages';
import {
  AiOutlineClose,
  AiOutlineEdit,
  AiOutlineSetting,
  AiOutlineLogout,
  AiOutlineMenu,
} from 'react-icons/ai';

import { FaUserCircle } from 'react-icons/fa';
import { BiChevronDown } from 'react-icons/bi';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const Navbar3 = ({ tipe }) => {
  const [isPopup, setIsPopup] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [nama, setNama] = React.useState('');
  const [gambar, setGambar] = React.useState('undefined');
  const router = useRouter();
  const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
      if (Cookies.get('nama')) {
        setNama(String(Cookies.get('nama')));
      }
      const foto = localStorage.getItem('gambar');
      if (foto !== 'undefined') {
        setGambar(foto);
      }

      if (tipe === 1) {
        const updatePosition = () => {
          setScrollPosition(window.pageYOffset);
        };

        window.addEventListener('scroll', updatePosition);

        updatePosition();

        return () => window.removeEventListener('scroll', updatePosition);
      }
    }, []);

    return scrollPosition;
  };

  const scrollPosition = useScrollPosition();

  return (
    <>
      <div
        className={`navbar3 flex-x-between ${
          tipe === 1
            ? scrollPosition > 0
              ? 'navbar3-back1'
              : 'navbar3-back2'
            : tipe === 2
            ? 'navbar3-back1'
            : 'navbar3-back2'
        }`}
      >
        <Link href='/'>
          <Image className='image' src={logo} alt='Image'></Image>
        </Link>

        <div className='flex-x-between tengah'>
          <span>
            <a href='/agreepedia#home-article'>Artikel</a>
          </span>

          <span>
            <a href='/agreepedia#home-digital-learning'>Digital Learning</a>
          </span>
          <span>
            <a href='/agreepedia#home-info-budidaya'>Info Budi Daya</a>
          </span>
          <span>
            <a href='/agreepedia#home-forum'>Forum</a>
          </span>
          <span>
            <a href='/agreepedia#home-aplikasi'>Aplikasi</a>
          </span>
          <span>
            <a href='/agreepedia#home-register'>Expert</a>
          </span>
        </div>
        <div className='flex-x-between kanan'>
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
                        localStorage.removeItem('gambar');
                        router.push('/');
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
            <>
              <Link className='link' href='/dtp/login'>
                Masuk
              </Link>
              <span>
                <Link className='link' href='/dtp/register'>
                  Daftar
                </Link>
              </span>
            </>
          )}
        </div>

        <div className='app__navbar3-smallscreen'>
          <AiOutlineMenu
            className='logo'
            color='#47AF64'
            fontSize={35}
            onClick={() => setToggleMenu(true)}
          />
          {/* If True then Render Inside () */}
          {toggleMenu && (
            <div className='app__navbar3-smallscreen_overlay flex__center slide-bottom'>
              <AiOutlineClose
                fontSize={27}
                color='#47AF64'
                className='overlay__close logo'
                onClick={() => setToggleMenu(false)}
              />
              <ul className='app__navbar3-smallscreen_links'>
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
                              localStorage.removeItem('gambar');
                              router.push('/');
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
                  <a href='#home-article' onClick={() => setToggleMenu(false)}>
                    Artikel
                  </a>
                </li>
                <li>
                  <a
                    href='#home-digital-learning'
                    onClick={() => setToggleMenu(false)}
                  >
                    Digital Learning
                  </a>
                </li>
                <li>
                  <a
                    href='#home-info-budidaya'
                    onClick={() => setToggleMenu(false)}
                  >
                    Info Budi Daya
                  </a>
                </li>
                <li>
                  <a href='#home-forum' onClick={() => setToggleMenu(false)}>
                    Forum
                  </a>
                </li>
                <li>
                  <a href='#home-aplikasi' onClick={() => setToggleMenu(false)}>
                    Aplikasi
                  </a>
                </li>
                <li>
                  <a href='#home-register' onClick={() => setToggleMenu(false)}>
                    Expert
                  </a>
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

export default Navbar3;
