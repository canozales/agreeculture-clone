import { HiOutlineDotsVertical, HiOutlineDotsHorizontal } from 'react-icons/hi';
import { AiFillEye, AiOutlineClose } from 'react-icons/ai';
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';
import Image from 'next/image';
import nophoto from '../../public/assets/images/nophoto.jpg';

const Kartu1 = ({ x, router, setIdHapus, setDialogueOpen }) => (
  <div className='kartunya'>
    <Image
      className='gambar'
      width={500}
      height={500}
      src={x.image !== '' ? x.image : nophoto}
      alt='Gambar'
    ></Image>
    <span>{x.judul}</span>
    <span>{`${new Date(
      x.updatedAt !== '' ? x.updatedAt : x.createdAt
    ).toLocaleDateString('default', {
      day: '2-digit',
    })} ${new Date(
      x.updatedAt !== '' ? x.updatedAt : x.createdAt
    ).toLocaleDateString('default', {
      month: 'long',
    })} ${new Date(
      x.updatedAt !== '' ? x.updatedAt : x.createdAt
    ).toLocaleDateString('default', {
      year: 'numeric',
    })}`}</span>
    <span
      style={{
        backgroundColor: x.status === 'Posted' ? '#47AF64' : '',
      }}
    >
      {x.status}
    </span>
    <HiOutlineDotsHorizontal
      onClick={(x) => x.currentTarget.nextSibling.classList.toggle('aktipkan')}
      style={{ cursor: 'pointer' }}
      className='logo'
    />
    <div className='pilihanThree'>
      <div onClick={() => router.push(`/dtp/artikel/preview/${x._id}`)}>
        <AiFillEye className='logo' />
        <span>Preview</span>
      </div>
      <div onClick={() => router.push(`/dtp/artikel/tambah/${x._id}`)}>
        <BsFillPencilFill className='logo' />
        <span>Edit</span>
      </div>
      <div
        onClick={() => {
          setIdHapus(x._id);
          setDialogueOpen(true);
        }}
      >
        <BsFillTrashFill className='logo' />
        <span>Hapus</span>
      </div>
      <div
        onClick={(x) =>
          x.currentTarget.parentElement.classList.toggle('aktipkan')
        }
      >
        <AiOutlineClose className='logo' />
        <span>Cancel</span>
      </div>
    </div>
  </div>
);

const Kartu2 = ({ x, router, setIdHapus, setDialogueOpen }) => (
  <div className='isinya'>
    <div>
      <Image
        className='gambar'
        width={500}
        height={500}
        src={x.image !== '' ? x.image : nophoto}
        alt='Gambar'
      ></Image>
      <span>{x.judul}</span>
    </div>
    <span>
      {new Date(
        x.updatedAt !== '' ? x.updatedAt : x.createdAt
      ).toLocaleDateString()}
    </span>

    <span
      style={{
        backgroundColor: x.status === 'Posted' ? '#47AF64' : '',
      }}
    >
      {x.status}
    </span>
    <div>
      <HiOutlineDotsVertical
        onClick={(x) => {
          x.currentTarget.nextSibling.classList.toggle('aktipkan');
        }}
        className='logo'
      />

      <div className='pilihanThree'>
        <div onClick={() => router.push(`/dtp/artikel/preview/${x._id}`)}>
          <AiFillEye className='logo' />
          <span>Preview</span>
        </div>
        <div onClick={() => router.push(`/dtp/artikel/tambah/${x._id}`)}>
          <BsFillPencilFill className='logo' />
          <span>Edit</span>
        </div>
        <div
          onClick={() => {
            setIdHapus(x._id);
            setDialogueOpen(true);
          }}
        >
          <BsFillTrashFill fontWeight={900} className='logo' />
          <span>Hapus</span>
        </div>
        <div
          onClick={(x) =>
            x.currentTarget.parentElement.classList.toggle('aktipkan')
          }
        >
          <AiOutlineClose className='logo' />
          <span>Cancel</span>
        </div>
      </div>
    </div>
  </div>
);

export { Kartu1, Kartu2 };
