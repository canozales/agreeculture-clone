import React from 'react';
import BackTo from '../../../../components/BackTo';
import { AiOutlineWarning, AiOutlineClose } from 'react-icons/ai';
import { RiErrorWarningLine } from 'react-icons/ri';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import Link from 'next/link';
import EasyCrop from '../EasyCrop';
import nophoto from '../../../../public/assets/images/nophoto.jpg';
import nophoto2 from '../../../../public/assets/images/nophoto2.png';
import Image from 'next/image';
import OutsideClickHandler from 'react-outside-click-handler';
import Dialogue from '../../../../components/Dialogue';
import Cookies from 'js-cookie';
import Head from 'next/head';
import { useRouter } from 'next/router';
import {
  getBeritaById,
  updateBerita,
} from '../../../../api-helpers/backend/utils';
import {
  KartuBerita,
  modules,
  formats,
} from '../../../../components/dtp/TambahArtikel';

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const Tambah = () => {
  const [dialogueOpen, setDialogueOpen] = useState(false);
  const [warningOpen, setWarningOpen] = useState(false);
  const [pesanWarning, setPesanWarning] = useState('');

  const [judul, setJudul] = useState('');
  const [subJudul, setSubJudul] = useState('');
  const [pratinjau, setPratinjau] = useState(false);
  const [final, setFinal] = useState(false);
  const [filTahap1, setFilTahap1] = useState(false);
  const [image, setImage] = React.useState(null);
  const inputRef = React.useRef();
  const input2Ref = React.useRef();
  const handleImageUpload = async (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };
  const [pilihanAktif, setPilihanAktif] = React.useState(false);
  const [tag, setTag] = React.useState([]);

  const [inputValue, setInputValue] = React.useState('');

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

  const [idBerita, setIdBerita] = React.useState('');
  const [gambarAkhir, setGambarAkhir] = React.useState(nophoto);
  const [tanggal, setTanggal] = React.useState(new Date());
  const [filteredTagTersedia, setFilteredTagTersedia] =
    React.useState(tagTersedia);

  const penulis = String(Cookies.get('nama'));
  const id = String(Cookies.get('id'));
  const jwt = String(Cookies.get('jwt'));
  const [value, setValue] = useState(idBerita);
  React.useEffect(() => {
    if (!router.isReady) return;

    getBeritaById(router.query.id, jwt)
      .then((data) => {
        setIdBerita(router.query.id);
        setJudul(data.judul);
        setSubJudul(data.subjudul);
        setValue(data.content);
        setImage(data.image);
        if (data.image !== '') {
          setGambarAkhir(data.image);
        }
        if (data.tags) {
          setTag(data.tags);
          setFilteredTagTersedia(
            filteredTagTersedia.filter((x) => !data.tags.includes(x))
          );
        }

        setTanggal(new Date(data.updatedAt));
      })
      .catch((err) => {
        console.log(err);
        router.push('/dtp/artikel/');
      });
  }, [router.isReady]);

  React.useEffect(() => {
    inputValue === ''
      ? // Selisih Antara Tag Tersedia dengan Tag yang ditempati
        setFilteredTagTersedia(tagTersedia.filter((x) => tag.indexOf(x) === -1))
      : setFilteredTagTersedia(
          filteredTagTersedia.filter((data) =>
            data.toLowerCase().includes(inputValue.toLowerCase())
          )
        );
  }, [inputValue]);

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
    <>
      <Head>
        <title>Edit Artikel</title>
      </Head>
      {pratinjau ? (
        <div className='tambah2'>
          <Link className='link' href='/dtp/artikel'>
            <BackTo text='Kembali ke Draft' />
          </Link>

          <span>Pratinjau Artikelmu</span>
          <div className='pratinjau'>
            <span>{judul}</span>
            <span>{subJudul}</span>
            <div>
              <span>{'Oleh ' + penulis}</span>
              <span>{`${tanggal.toLocaleDateString('default', {
                day: '2-digit',
              })} ${tanggal.toLocaleDateString('default', {
                month: 'long',
              })} ${tanggal.toLocaleDateString('default', {
                year: 'numeric',
              })}`}</span>
            </div>
            <div dangerouslySetInnerHTML={{ __html: value }}></div>
          </div>
        </div>
      ) : !final ? (
        <div className='tambah'>
          <Link href='/dtp/artikel' className='link'>
            <BackTo text='Kembali ke Halaman Artikel' />
          </Link>

          <span>Draft</span>
          <div className='tempat'>
            <div className='sub'>
              <div className='kotak'>
                <span>Judul</span>
                <input
                  value={judul}
                  onChange={(x) => setJudul(x.target.value)}
                  type='text'
                  placeholder='Tulis judul artikel semenarik mungkin'
                  style={{
                    border:
                      filTahap1 && (judul.length < 10 || judul.length > 100)
                        ? '1px solid red'
                        : '',
                  }}
                />

                {filTahap1 ? (
                  judul.length < 10 || judul.length > 100 ? (
                    <div className='warning'>
                      <AiOutlineWarning className='logo' />
                      <span>Panjang judul harus diantara 10-100 karakter</span>
                    </div>
                  ) : null
                ) : null}
              </div>

              <div className='sub'>
                <button
                  onClick={() => {
                    updateBerita({
                      id: idBerita,
                      belongsTo: id,
                      isiBerita: value,
                      judul,
                      subJudul,
                    })
                      .then(() => {
                        router.push('/dtp/artikel/');
                      })
                      .catch((x) => {
                        console.log(x);
                      });
                  }}
                >
                  Simpan sebagai Draft
                </button>
                <button
                  onClick={() => {
                    {
                      judul.length < 10 ||
                      judul.length > 99 ||
                      value === '<p><br></p>' ||
                      value === ''
                        ? setFilTahap1(true)
                        : setFinal(true);
                    }
                  }}
                >
                  Lanjutkan
                </button>
              </div>
            </div>

            <div className='sub'>
              <div className='kotak'>
                <span>Sub Judul Artikel</span>
                <input
                  value={subJudul}
                  onChange={(x) => setSubJudul(x.target.value)}
                  type='text'
                  placeholder='Bisa berupa deskripsi singkat atau rangkuman artikelmu'
                />
              </div>

              <span
                onClick={() => {
                  console.log(value);
                  setPratinjau(true);
                }}
              >
                Pratinjau Artikel
              </span>
            </div>
            <div className='sub'>
              <span>Artikel</span>
              {filTahap1 ? (
                value === '<p><br></p>' || value === '' ? (
                  <span>Konten artikel tidak boleh kosong</span>
                ) : null
              ) : null}
            </div>

            <ReactQuill
              theme='snow'
              style={{
                color: '#000',
              }}
              modules={modules}
              formats={formats}
              value={value}
              onChange={setValue}
              placeholder={'Write something awesome...'}
            />
          </div>
        </div>
      ) : (
        <div className='tambah3'>
          <Link className='link' href='/dtp/artikel'>
            <BackTo text='Kembali ke Artikel' />
          </Link>

          <span>Pratinjau Tampilan Artikelmu</span>
          <div className='pratinjau'>
            <div className='atas'>
              <div className='kiri'>
                <span>Thumbnail</span>
                {image ? (
                  <EasyCrop
                    image={image}
                    setGambarAkhir={setGambarAkhir}
                    setImage={setImage}
                  />
                ) : (
                  <div onClick={() => inputRef.current.click()}>
                    <Image className='image' src={nophoto2} alt='Image'></Image>
                    <span>Upload Thumbnail</span>
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
                    <span>Judul Artikel</span>

                    {judul.length < 10 || judul.length > 100 ? (
                      <div className='warning'>
                        <RiErrorWarningLine className='logo' />
                        <span>
                          Panjang judul harus diantara 10-100 karakter
                        </span>
                      </div>
                    ) : null}
                  </div>

                  <input
                    value={judul}
                    onChange={(x) => setJudul(x.target.value)}
                    type='text'
                    placeholder='Tulis judul artikel semenarik mungkin'
                    style={{
                      border:
                        judul.length < 10 || judul.length > 100
                          ? '1px solid red'
                          : '',
                    }}
                  />
                </div>
                <div className='kotak'>
                  <div>
                    <span>Sub Judul Artikel</span>
                  </div>
                  <input
                    value={subJudul}
                    onChange={(x) => setSubJudul(x.target.value)}
                    type='text'
                    placeholder='Bisa berupa deskripsi singkat atau rangkuman artikelmu'
                  />
                </div>
                <div className='kotak2'>
                  <div>
                    <span>Tag (Maksimal 5)</span>
                    {tag.length > 5 ? (
                      <div className='warning'>
                        <RiErrorWarningLine className='logo' />
                        <span>Maksimal hanya 5 Tag</span>
                      </div>
                    ) : null}
                  </div>

                  <OutsideClickHandler
                    onOutsideClick={() => {
                      setPilihanAktif(false);
                    }}
                  >
                    <div className='isi'>
                      <div>
                        {React.Children.toArray(
                          tag.map((x, index) => (
                            <div>
                              <span>{x}</span>
                              <AiOutlineClose
                                onClick={() => {
                                  setFilteredTagTersedia((current) => [
                                    ...current,
                                    tag[index],
                                  ]);

                                  const newTag = tag.filter(
                                    (_, i) => i !== index
                                  );
                                  setTag(newTag);
                                }}
                                className='logo'
                              />
                            </div>
                          ))
                        )}
                      </div>
                      <div>
                        <AiOutlineWarning className='logo' />

                        <input
                          value={inputValue}
                          ref={input2Ref}
                          onClick={() => setPilihanAktif(true)}
                          onChange={(x) => setInputValue(x.target.value)}
                          type='text'
                          placeholder='Cari tag'
                        />
                        {pilihanAktif && (
                          <div className='pilihan'>
                            {React.Children.toArray(
                              filteredTagTersedia.map((x, index) => (
                                <span
                                  onClick={() => {
                                    setTag((current) => [
                                      ...current,
                                      filteredTagTersedia[index],
                                    ]);
                                    const newFilteredTagTersedia =
                                      filteredTagTersedia.filter(
                                        (_, i) => i !== index
                                      );

                                    setFilteredTagTersedia(
                                      newFilteredTagTersedia
                                    );
                                    setInputValue('');
                                  }}
                                >
                                  {x}
                                </span>
                              ))
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </OutsideClickHandler>
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
                      } else if (tag.length === 0 || tag.length > 5) {
                        setPesanWarning(
                          'Pastikan Jumlah Tag Anda sesuai Aturan'
                        );
                        setWarningOpen(true);
                      } else if (judul.length < 10 || judul.length > 100) {
                        setPesanWarning(
                          'Panjang judul harus diantara 10-100 karakter'
                        );
                        setWarningOpen(true);
                      } else {
                        setDialogueOpen(true);
                      }
                    }}
                  >
                    Update Artikel
                  </button>
                  <div>
                    <RiErrorWarningLine className='logo' />
                    <span>
                      Artikelmu akan melalui proses validasi oleh tim
                      Agreepedia, kamu akan mendapatkan notifikasi jika proses
                      validasi selesai
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='bawah'>
              <span>Pratinjau Thumbnail Artikelmu</span>
              <div>
                <div>
                  {/* <span>Vertikal</span> */}
                  <KartuBerita
                    sektor={tag}
                    text={judul}
                    image={gambarAkhir}
                    date='28 November 2022'
                  />
                </div>
              </div>
            </div>
          </div>

          <Dialogue
            open={dialogueOpen}
            handleClose={() => setDialogueOpen(false)}
            command={() => {
              console.log(idBerita);
              console.log(id);
              console.log(jwt);
              updateBerita({
                id: idBerita,
                belongsTo: id,
                content: value,
                judul,
                subjudul: subJudul,
                tags: tag,
                image: dataURLtoFile(gambarAkhir, generateFilename(15)),
                author: penulis,
                status: 'Posted',
                jwt,
              })
                .then(() => {
                  router.push('/dtp/artikel/');
                })
                .catch((x) => {
                  console.log(x);
                });
            }}
            judul='Yakin ingin update Artikel?'
            sub='Artikelmu akan diupdate ke Database Agreepedia'
            but1='Kembali'
            but2='Update'
          />
          <Dialogue
            open={warningOpen}
            handleClose={() => setWarningOpen(false)}
            command={() => setWarningOpen(false)}
            judul='Tidak dapat Submit Artikel'
            sub={pesanWarning}
            but2='OK'
          />
        </div>
      )}
    </>
  );
};

export default Tambah;
