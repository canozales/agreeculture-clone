import React from 'react';
import { AiOutlineSearch, AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import speaker from '../../../public/assets/images/speaker.png';
import Image from 'next/image';
import BackTo from '../../../components/BackTo';
import gambar from '../../../public/assets/images/partner2a.png';
import { RiErrorWarningLine } from 'react-icons/ri';
import Layout from '../../Layout';
import Link from 'next/link';
import landingPages from '../../../public/assets/data/landingPages';
import Head from 'next/head';
import { useState, useEffect } from 'react';

const Berita = ({ text, subText, sektor, penulis, image, date }) => (
  <div className='berita3'>
    <Image className='gambar' src={image} alt='Image'></Image>
    <div className='kanan'>
      <span>{text}</span>
      <span>{subText}</span>
      <div className='sektor'>
        {React.Children.toArray(sektor.map((x) => <span>{x}</span>))}
      </div>
      <div className='penulis'>
        <Image className='gambar' src={gambar} alt='Image'></Image>
        <span>{penulis}</span>
        <RiErrorWarningLine className='logo' />
        <span>{date}</span>
      </div>
    </div>
  </div>
);

const Home = () => {
  const [showTag, setShowTag] = useState(false);
  const [selectedTag, setSelectedTag] = useState('');
  const [kataFilter, setKataFilter] = useState('');
  const [kotakFilter, setKotakFilter] = useState([]);

  const [dataTag, setDataTag] = useState([
    'Komoditas',
    'Pengantaran',
    'Agree',
    'Budidaya',
    'Teknologi',
    'Inovasi',
    'Industri',
    'Peternakan',
    'Pertanian',
    'Pupuk',
    'Perikanan',
    'Perkebunan',
    'Kelapa Sawit',
    'Menanam',
    'Sayur Organik',
    'Jamur',
    'Tanaman',
    'Hidroponik',
    'Serangga',
    'Hama',
  ]);
  const [data, setData] = useState(landingPages.beritaAgreepedia);
  const [filteredData, setFilteredData] = useState(data);
  const [filteredDataCategory, setFilteredDataCategory] = useState([]);

  useEffect(() => {
    if (kataFilter !== '') {
      if (kotakFilter.length === 0) {
        setFilteredData(
          data.filter((x) =>
            x.text.toLowerCase().includes(kataFilter.toLowerCase())
          )
        );
      } else {
        setFilteredData(
          filteredDataCategory.filter((x) =>
            x.text.toLowerCase().includes(kataFilter.toLowerCase())
          )
        );
      }
    } else if (kataFilter === '' && kotakFilter.length !== 0) {
      setFilteredData(filteredDataCategory);
    } else {
      setFilteredData(data);
    }
  }, [kataFilter, filteredDataCategory]);

  useEffect(() => {
    if (kotakFilter.length !== 0) {
      let newData = [];
      if (kataFilter !== '') {
        React.Children.toArray(
          filteredData.map((x) => {
            if (kotakFilter.some((r) => x.sektor.indexOf(r) >= 0)) {
              newData.push(x);
            }
          })
        );
      } else {
        React.Children.toArray(
          data.map((x) => {
            if (kotakFilter.some((r) => x.sektor.indexOf(r) >= 0)) {
              newData.push(x);
            }
          })
        );
      }

      setFilteredDataCategory(newData);
    } else {
      setFilteredDataCategory([]);
    }
  }, [kotakFilter]);

  return (
    <Layout navbarType={4}>
      <Head>
        <title>Agrepedia - Clone</title>
      </Head>
      <div className='artikel'>
        <div className='main'>
          <Link href='/agreepedia' className='link'>
            <BackTo text='Kembali ke Halaman Utama' />
          </Link>

          <span>Artikel Agreepedia</span>
          <span>Menampilkan semua artikel</span>
          {React.Children.toArray(
            filteredData.map((x) => (
              <Berita
                penulis={x.penulis}
                text={x.text}
                subText={x.subText}
                image={x.image}
                date={x.date}
                sektor={x.sektor}
              />
            ))
          )}
        </div>
        <div className='search'>
          <div>
            <input
              onChange={(x) => setKataFilter(x.target.value)}
              type='text'
              placeholder='Cari artikel dan penulis di sini'
            />
            <AiOutlineSearch className='logo' />
          </div>

          <span>Atau</span>

          <div>
            <span>Cari Artikel Berdasarkan Tag</span>

            {showTag ? (
              <>
                <div>
                  {React.Children.toArray(
                    dataTag.map((x) => (
                      <span
                        onClick={() => {
                          if (x === selectedTag) {
                            setSelectedTag('');
                            setKotakFilter([]);
                          } else {
                            setSelectedTag(x);
                            setKotakFilter([`${x}`]);
                          }
                        }}
                        style={{ cursor: 'pointer' }}
                        className={x === selectedTag ? 'spanDipilih' : ''}
                      >
                        {x}
                      </span>
                    ))
                  )}
                </div>

                <div
                  style={{ cursor: 'pointer' }}
                  onClick={() => setShowTag(false)}
                >
                  <AiOutlineUp />
                  <span>Lihat Lebih Sedikit</span>
                </div>
              </>
            ) : (
              <>
                <div>
                  {React.Children.toArray(
                    dataTag.slice(0, 8).map((x) => (
                      <span
                        onClick={() => {
                          if (x === selectedTag) {
                            setSelectedTag('');
                            setKotakFilter([]);
                          } else {
                            setSelectedTag(x);
                            setKotakFilter([`${x}`]);
                          }
                        }}
                        style={{ cursor: 'pointer' }}
                        className={x === selectedTag ? 'spanDipilih' : ''}
                      >
                        {x}
                      </span>
                    ))
                  )}
                </div>

                <div
                  style={{ cursor: 'pointer' }}
                  onClick={() => setShowTag(true)}
                >
                  <AiOutlineDown />
                  <span>Lihat Lebih Banyak</span>
                </div>
              </>
            )}
          </div>

          <div>
            <div>
              <span>73</span>
              <span>Artikel</span>
            </div>

            <div>
              <span>33</span>
              <span>Penulis</span>
            </div>
          </div>

          <div>
            <span>Ayo berbagi pengetahuan!</span>
            <span>Tulis artikel dan berikan manfaatnya bagi orang banyak.</span>
            <Link href='/dtp/artikel' className='link'>
              <button>
                Tulis Artikel <AiOutlineSearch className='logo' />
              </button>
            </Link>

            <Image className='gambar' src={speaker} alt='Image'></Image>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
