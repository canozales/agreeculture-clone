import React from 'react';
import Image from 'next/image';
import { FaUserCircle } from 'react-icons/fa';
import { FaPlane } from 'react-icons/fa';
import { BiChevronDown } from 'react-icons/bi';

const Profile = () => {
  return (
    <div className='profilex'>
      <div className='select'>
        {/* <Image className='gambar' src={gambar}></Image> */}
        <FaUserCircle className='logo' />
        <span>Profil Kamu</span>
        <BiChevronDown className='logo' />
      </div>

      <div className='options'>
        <div>
          <FaPlane className='logo' />
          <span>Edit Profil</span>
        </div>
        <div>
          <FaPlane className='logo' />
          <span>Edit Profil</span>
        </div>
        <div>
          <FaPlane className='logo' />
          <span>Edit Profil</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
