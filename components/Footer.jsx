import React from 'react';
import logo from '../public/assets/images/logo.png';
import Image from 'next/image';
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import Link from 'next/link';
const Footer = () => {
  return (
    <div className='footer flex-y' data-testid='footer'>
      <div className='atas'>
        <div className='flex-y-between-start agree'>
          <Image className='image' src={logo} alt='Image'></Image>
          <div className='flex-y'>
            <span>Telkom STO Kebayoran</span>
            <span>Jl. Sisingamangaraja No.4, RT.2/RW.1, Selong,</span>
            <span>Kebayoran Baru, Kota Jakarta Selatan, DKI Jakarta</span>
            <span>12110</span>
          </div>

          <div className='flex-y'>
            <span>Messenger (WA): +62-812-8000-6756</span>
            <span>Email: hello@agreeculture.id</span>
          </div>
        </div>

        <div className='layanan'>
          <span>Layanan</span>
          <Link className='link' href='/landing/agree-partner'>
            <span>Agree Partner</span>
          </Link>

          <Link className='link' href='/landing/agree-modal'>
            <span>Agree Modal</span>
          </Link>
          <Link className='link' href='/landing/agree-market'>
            <span>Agree Market</span>
          </Link>
          <Link className='link' href='/landing/smart-farming'>
            <span>Smart Farming</span>
          </Link>
          <Link className='link' href='/agreepedia'>
            <span>Agreepedia</span>
          </Link>
        </div>

        <div className='navigasi'>
          <span className='mb-1'>Navigasi</span>
          <Link className='link mb-1' href='/tentang-kami'>
            <span>Tentang Kami</span>
          </Link>
          <Link className='link' href='/berita-kegiatan'>
            <span>Berita dan Kegiatan Agree</span>
          </Link>

          <div className='satu'>
            <span className='bold mb-1'>Ikuti Kami</span>
            <div className='flex-x-between'>
              <BsFacebook className='ikon' />
              <AiOutlineInstagram className='ikon' />
              <FaLinkedinIn className='ikon' />
              <BsYoutube className='ikon' />
            </div>
          </div>
        </div>

        <div className='flex-y dua'>
          <span className='bold mb-1'>Ikuti Kami</span>
          <div className='flex-x-between'>
            <BsFacebook className='ikon' style={{ cursor: 'pointer' }} />
            <AiOutlineInstagram
              className='ikon'
              style={{ cursor: 'pointer' }}
            />
            <FaLinkedinIn className='ikon' style={{ cursor: 'pointer' }} />
            <BsYoutube className='ikon' style={{ cursor: 'pointer' }} />
          </div>
        </div>
      </div>

      <div className='bawah'>
        © Agree 2022 - Agree adalah merek milik PT Telekomunikasi Indonesia,
        Tbk. Terdaftar pada Direktorat Jendral Kekayaan Intelektual Republik
        Indonesia.
      </div>
    </div>
  );
};

export default Footer;
