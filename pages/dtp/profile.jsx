import React from 'react';
import Layout from '../Layout';
import EasyCrop from './artikel/EasyCrop';
import { RiErrorWarningLine } from 'react-icons/ri';
import { useState } from 'react';
import { useRouter } from 'next/router';
import nophoto from '../../public/assets/images/nophoto.jpg';
import nophoto2 from '../../public/assets/images/nophoto2.png';
import Cookies from 'js-cookie';
import Image from 'next/image';
import Dialogue from '../../components/Dialogue';
import { getUserById, userUpdate } from '../../api-helpers/backend/utils';

const profile = () => {
  const [dialogueOpen, setDialogueOpen] = useState(false);
  const [warningOpen, setWarningOpen] = useState(false);
  const [pesanWarning, setPesanWarning] = useState('');

  const [judul, setJudul] = useState('');
  const [subJudul, setSubJudul] = useState('');
  const [image, setImage] = React.useState(null);
  const inputRef = React.useRef();
  const handleImageUpload = async (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const [tagTersedia, setTagTersedia] = React.useState([
    'Binatang',
    'Makanan',
    'Kolam',
    'Bunga',
    'Iklim',
    'Teknologi',
    'Inovasi',
    'Perbankan',
  ]);
  const router = useRouter();
  const [gambarAkhir, setGambarAkhir] = React.useState(nophoto);
  React.useState(tagTersedia);
  const id = String(Cookies.get('id'));
  const jwt = String(Cookies.get('jwt'));

  React.useEffect(() => {
    getUserById(id, jwt)
      .then((x) => {
        const { name, job, imageUrl } = x;
        if (name !== '') {
          setJudul(name);
        }
        if (job !== '') {
          setSubJudul(job);
        }

        if (imageUrl !== '') {
          setImage(imageUrl);
          setGambarAkhir(imageUrl);
        }
      })
      .catch((err) => console.log(err));
  }, [id]);

  const dataURLtoFile = (dataurl, filename) => {
    const arr = dataurl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n) {
      u8arr[n - 1] = bstr.charCodeAt(n - 1);
      n -= 1; // to make eslint happy
    }
    return new File([u8arr], filename, { type: mime });
  };

  function generateFilename(length) {
    var result = '';
    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    result += '.jpg';
    return result;
  }

  return (
    <Layout navbarType={2} active={0}>
      <div className='propail'>
        <div className='tambah4'>
          <div className='pratinjau'>
            <div className='atas'>
              <div className='kiri'>
                <span>Foto Profile</span>
                {image ? (
                  <EasyCrop
                    image={image}
                    setGambarAkhir={setGambarAkhir}
                    setImage={setImage}
                  />
                ) : (
                  <div onClick={() => inputRef.current.click()}>
                    <Image className='image' src={nophoto2} alt='Image'></Image>
                    <span>Upload Foto Profile</span>
                    <input
                      type='file'
                      accept='image/png, image/jpg, image/jpeg'
                      ref={inputRef}
                      onChange={handleImageUpload}
                      style={{ display: 'none' }}
                    />
                  </div>
                )}
                <div>
                  <RiErrorWarningLine
                    className='logo'
                    style={{
                      color:
                        gambarAkhir !== nophoto
                          ? Buffer.from(
                              gambarAkhir.substring(
                                gambarAkhir.indexOf(',') + 1
                              )
                            ).length /
                              1e6 >
                            1
                            ? 'red'
                            : ''
                          : '',
                    }}
                  />
                  {gambarAkhir !== nophoto ? (
                    Buffer.from(
                      gambarAkhir.substring(gambarAkhir.indexOf(',') + 1)
                    ).length /
                      1e6 >
                    1 ? (
                      <span style={{ color: 'red' }}>
                        Ukuran foto Anda melebihi 1MB
                      </span>
                    ) : (
                      <span>Ukuran foto Anda dapat diterima</span>
                    )
                  ) : (
                    <span>
                      Maksimal foto 1 MB dengan eksistensi JPEG, JPG, atau PNG
                    </span>
                  )}
                </div>
              </div>
              <div className='kanan'>
                <div className='kotak'>
                  <div>
                    <span>Nama Lengkap</span>
                  </div>

                  <input
                    value={judul}
                    onChange={(x) => setJudul(x.target.value)}
                    type='text'
                    placeholder='Masukkan Nama lengkap Anda'
                  />
                </div>
                <div className='kotak'>
                  <div>
                    <span>Pekerjaan</span>
                  </div>
                  <input
                    value={subJudul}
                    onChange={(x) => setSubJudul(x.target.value)}
                    type='text'
                    placeholder='Masukkan Pekerjaan Anda'
                  />
                </div>

                <div>
                  <button
                    onClick={() => {
                      if (gambarAkhir === nophoto) {
                        setPesanWarning('Anda belum menentukan Gambar');
                        setWarningOpen(true);
                      } else if (
                        Buffer.from(
                          gambarAkhir.substring(gambarAkhir.indexOf(',') + 1)
                        ).length /
                          1e6 >
                        1
                      ) {
                        setPesanWarning('Ukuran Foto Anda melebihi 1 MB');
                        setWarningOpen(true);
                      } else if (subJudul.length === 0) {
                        setPesanWarning('Silahkan isi Pekerjaan Anda');
                        setWarningOpen(true);
                      } else if (judul.length === 0) {
                        setPesanWarning('Silahkan isi Nama Lengkap Anda');
                        setWarningOpen(true);
                      } else {
                        setDialogueOpen(true);
                      }
                    }}
                  >
                    Update Profile
                  </button>
                  <div>
                    <RiErrorWarningLine className='logo' />
                    <span>
                      Silahkan melengkapi Profil Anda untuk mendapatkan
                      Keuntungan yang lebih banyak dari Fitur Agreepedia
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Dialogue
            open={dialogueOpen}
            handleClose={() => setDialogueOpen(false)}
            command={() => {
              userUpdate({
                id,
                jwt,
                nama: judul,
                pekerjaan: subJudul,
                gambar: dataURLtoFile(gambarAkhir, generateFilename(15)),
              })
                .then(() => {
                  Cookies.set('nama', judul);
                  localStorage.setItem('gambar', gambarAkhir);
                  router.push('/dtp/artikel/');
                })
                .catch((x) => {
                  console.log(x);
                });
            }}
            judul='Yakin ingin Update Profile?'
            sub='Profilemu akan diupdate dari Database Agreepedia'
            but1='Kembali'
            but2='Update'
          />
          <Dialogue
            open={warningOpen}
            handleClose={() => setWarningOpen(false)}
            command={() => setWarningOpen(false)}
            judul='Tidak dapat Update Profile'
            sub={pesanWarning}
            but2='OK'
          />
        </div>
      </div>
    </Layout>
  );
};

export default profile;
