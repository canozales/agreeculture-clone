import { SlBookOpen } from 'react-icons/sl';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import {
  BsBuilding,
  BsTruck,
  BsBookHalf,
  BsChatLeftText,
} from 'react-icons/bs';

const kartu1 = [
  {
    logo: <BsBuilding className='logo' />,
    teks1: 'Perusahaan',
    teks2: 'Monitor bisnis pertanianmu dari meja kerjamu',
    status: 'yes',
  },
  {
    logo: <BsTruck className='logo' />,
    teks1: 'Penjual',
    teks2: 'Temukan pembeli dari komoditasmu & bertransaksi',
    status: 'yes',
  },
  {
    logo: <HiOutlineShoppingCart className='logo' />,
    teks1: 'Pembeli',
    teks2: 'Penuhi Kebutuhan agrikultur Anda hingga skala besar',
    status: 'yes',
  },
];

const kartu2 = [
  {
    logo: <SlBookOpen className='logo' />,
    teks1: 'Artikel',
    teks2: 'Bagikan informasi menarik kepada seluruh pengguna Agree',
    status: 'yes',
  },
  {
    logo: <BsBookHalf className='logo' />,
    teks1: 'Digital Learning',
    teks2: 'Tingkatkan pengetahuan dan raih sertifikat melalui materi menarik',
    status: 'no',
  },
  {
    logo: <BsChatLeftText className='logo' />,
    teks1: 'Forum',
    teks2:
      'Ikut berbagi dan berinteraksi bersama ahli dan pengguna Agree lainnya',
    status: 'no',
  },
];

export { kartu1, kartu2 };
