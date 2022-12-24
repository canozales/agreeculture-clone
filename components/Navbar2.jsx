import React from 'react';
import Image from 'next/image';
import { AiOutlineHome, AiOutlineClose } from 'react-icons/ai';
import {
  BsBuilding,
  BsTruck,
  BsChatLeftText,
  BsBookHalf,
} from 'react-icons/bs';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { SlBookOpen } from 'react-icons/sl';
import logo from '../public/assets/images/logo.png';
import Link from 'next/link';
import { ThemeContext, ThemeUpdateContext } from '../pages/Layout';

const Navbar2 = ({ active }) => {
  const isOpen = React.useContext(ThemeContext);
  const setIsOpen = React.useContext(ThemeUpdateContext);

  return (
    <>
      <div
        className='sidebar'
        style={{ display: isOpen ? 'flex' : null }}
        data-testid='navbar-two'
      >
        <div className='tempatlogo'>
          {isOpen ? (
            <AiOutlineClose onClick={() => setIsOpen(false)} className='logo' />
          ) : (
            <Link href='/'>
              <Image className='gambar' src={logo} alt='Image'></Image>
            </Link>
          )}
        </div>

        <Link
          className={`list ${active === 1 ? 'list-activated' : null}`}
          style={{ pointerEvents: `${active === 1 ? 'none' : 'nostylex'}` }}
          href='/dtp'
        >
          <AiOutlineHome className='logo' />
          <span>Beranda</span>
        </Link>
        <span className='tulisan'>KEMITRAAN</span>
        <Link
          style={{ pointerEvents: `${active === 2 ? 'none' : 'nostylex'}` }}
          className={`list ${active === 2 ? 'list-activated' : null}`}
          href='/dtp/perusahaan'
        >
          <BsBuilding className='logo' />
          <span>Perusahaan</span>
        </Link>
        <Link
          style={{ pointerEvents: `${active === 3 ? 'none' : 'nostylex'}` }}
          className={`list ${active === 3 ? 'list-activated' : null}`}
          href='/dtp/penjual'
        >
          <BsTruck className='logo' />
          <span>Penjual</span>
        </Link>
        <Link
          style={{ pointerEvents: `${active === 4 ? 'none' : 'nostylex'}` }}
          className={`list ${active === 4 ? 'list-activated' : null}`}
          href='/dtp/pembeli'
        >
          <HiOutlineShoppingCart className='logo' />
          <span>Pembeli</span>
        </Link>
        <span className='tulisan'>AGREEPEDIA</span>
        <Link
          style={{ pointerEvents: `${active === 5 ? 'none' : 'nostylex'}` }}
          className={`list ${active === 5 ? 'list-activated' : null}`}
          href='/dtp/artikel'
        >
          <SlBookOpen className='logo' />
          <span>Artikel</span>
        </Link>
        <div
          className='list'
          style={{ color: '#bdbdbd', pointerEvents: 'none' }}
        >
          <BsBookHalf className='logo' />
          <span>Digital Learning</span>
        </div>
        <div
          className='list'
          style={{ color: '#bdbdbd', pointerEvents: 'none' }}
        >
          <BsChatLeftText className='logo' />
          <span>Forum</span>
        </div>
      </div>
    </>
  );
};

export default Navbar2;
