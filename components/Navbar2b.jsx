import React from 'react';
import { FaPlane } from 'react-icons/fa';
import {
  AiOutlineEdit,
  AiOutlineSetting,
  AiOutlineLogout,
  AiOutlineMenu,
} from 'react-icons/ai';
import { BiChevronDown } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { ThemeContext, ThemeUpdateContext } from '../pages/Layout';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

const Navbar2b = () => {
  const [showOptions, setShowOptions] = useState(false);
  const isOpen = React.useContext(ThemeContext);
  const setIsOpen = React.useContext(ThemeUpdateContext);
  const [nama, setNama] = React.useState('Budi Setiawan');
  const router = useRouter();
  const [gambar, setGambar] = React.useState('undefined');

  React.useEffect(() => {
    setNama(String(Cookies.get('nama')));
    const foto = localStorage.getItem('gambar');
    if (foto !== '') {
      setGambar(foto);
    }
  }, []);

  return (
    <div className='sidebar-2' data-testid='navbar-twob'>
      <span className='dash'>Dashboard Navigasi</span>
      <AiOutlineMenu onClick={() => setIsOpen(true)} className='logo' />
      <div className=' profilex'>
        <div
          className={`select ${showOptions ? 'profilex-effect' : ''}`}
          onClick={() => setShowOptions(true)}
        >
          {gambar !== 'undefined' ? (
            <Image
              className='gambar'
              width={50}
              height={50}
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
            <div className='options'>
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
    </div>
  );
};

export default Navbar2b;
