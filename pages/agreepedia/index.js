import React from 'react';
import { RiErrorWarningLine } from 'react-icons/ri';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

import gambar from '../../public/assets/images/partner2a.png';
import Image from 'next/image';
import agree4 from '../../public/assets/images/agree4.png';
import agree6 from '../../public/assets/images/agree6.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';

import Layout from '../Layout';
import landingPages from '../../public/assets/data/landingPages';
import Head from 'next/head';
import Heading from '../../components/agreepedia/Heading';
import Iklan from '../../components/agreepedia/Iklan';
import Berita from '../../components/agreepedia/Berita';
import Swiper2 from '../../components/agreepedia/Swiper2';

const Agreepedia = () => {
  const iklan1 = 'assets/images/digital-learning.png';
  const iklan2 = 'assets/images/forum-agreepedia.png';
  const iklan3 = 'assets/images/aplikasi-agreepedia.png';
  const [expert, setExpert] = React.useState(false);

  return (
    <Layout navbarType={3}>
      <Head>
        <title>Agreepedia</title>
      </Head>
      <div className='agreepedia'>
        <div className='home'>
          <Image className='gambar1' src={agree4} alt='image'></Image>
          <span>
            Kolaborasi, diskusi, dan update berita seputar komoditas mulai dari
            pertanian, perikanan, hingga peternakan.
          </span>
          <Image className='gambar2' src={agree6} alt='image'></Image>
        </div>

        <div className='konten'>
          <Heading
            text1='Artikel Agreepedia'
            text2='Baca berbagai informasi terbaru seputar agrikultur untuk
            meningkatkan pemahamanmu!'
            text3='Lihat Semua'
            id='home-article'
          />

          <div className='berita-utama'>
            {React.Children.toArray(
              landingPages.beritaAgreepedia.slice(4, 5).map((x) => (
                <div style={{ cursor: 'pointer' }} className='berita2'>
                  <Image className='gambar' src={x.image} alt='image'></Image>
                  <div className='kanan'>
                    <span>{x.text}</span>
                    <span>{x.subText}</span>
                    <div className='sektor'>
                      {React.Children.toArray(
                        x.sektor.map((y) => <span>{y}</span>)
                      )}
                    </div>
                    <div className='penulis'>
                      <Image
                        className='gambar'
                        src={gambar}
                        alt='image'
                      ></Image>
                      <span>{x.penulis}</span>
                      <RiErrorWarningLine className='logo' />
                      <span>{x.date}</span>
                    </div>
                  </div>
                </div>
              ))
            )}

            <div className='kanan'>
              {React.Children.toArray(
                landingPages.beritaAgreepedia
                  .slice(0, 3)
                  .map((x) => (
                    <Berita
                      judul={x.text}
                      subJudul={x.subText}
                      sektor={x.sektor}
                      penulis={x.penulis}
                      image={x.image}
                      date={x.date}
                    />
                  ))
              )}
            </div>
          </div>
          <Heading
            text1='Digital Learning'
            text2='Baca berbagai informasi terbaru seputar agrikultur untuk
            meningkatkan pemahamanmu!'
            id='home-digital-learning'
          />

          <Iklan
            text1='Dapet Ilmu + Sertifikat, Gratis!'
            text2='Kembangkan ilmu pengetahuanmu di bidang agrikultur dan dapatkan
          sertifikat dari course yang dikurasi oleh Ahli Agrikultur Indonesia'
            text3='Fitur canggih Agreepedia akan segera hadir spesial buat kamu !'
            iklan={iklan1}
          />
          <div style={{ marginTop: '5rem' }}></div>
          <Heading
            text1='Info Budi Daya'
            text2='Baca berbagai informasi terbaru seputar agrikultur untuk
            meningkatkan pemahamanmu!'
            id='home-info-budidaya'
          />

          <div className='slider'>
            <BsArrowLeft className='logo-kiri' />
            <BsArrowRight className='logo-kanan' />
            <Swiper
              slidesPerView='auto'
              breakpoints={{
                // when window width is >= 640px
                1370: {
                  slidesPerView: 5,
                },
                1200: {
                  slidesPerView: 4,
                },
                980: {
                  slidesPerView: 3,
                },
                680: {
                  slidesPerView: 2,
                },
                0: {
                  slidesPerView: 1,
                },
              }}
              // install Swiper modules
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              loop={true}
              navigation={{
                nextEl: '.logo-kanan',
                prevEl: '.logo-kiri',
              }}
              // onSwiper={(swiper) => console.log(swiper)}
              // onSlideChange={() => console.log('slide change')}
            >
              {React.Children.toArray(
                landingPages.dataSwiper.map((x) => (
                  <SwiperSlide>
                    <Image
                      className='gambar'
                      src={x.gambar}
                      alt='image'
                    ></Image>
                    <span>{x.text}</span>
                  </SwiperSlide>
                ))
              )}
            </Swiper>
          </div>
          <div style={{ marginTop: '2.5rem' }}></div>
          <Heading
            text1='Forum Agreepedia'
            text2='Diskusikan dan tanyakan permasalahan agrikultur kamu kepada ahli di Agreepedia'
            id='home-forum'
          />

          <Iklan
            text1='
            Perluas Jaringan Bersama Pengguna Lainnya'
            text2='Buka forum diskusimu sendiri dan bangun komunitas pertanian bersama penggiat agrikultur'
            text3='Fitur Forum akan segera hadir, tunggu ya!'
            iklan={iklan2}
          />

          <div style={{ marginTop: '5rem' }}></div>
          <Heading
            text1='Aplikasi Agreepedia'
            text2='Fitur canggih dari Agree untuk tingkatkan proses budidaya kamu'
            id='home-aplikasi'
          />

          <Iklan
            text1='
            Fitur Canggih Agreepedia'
            text2='Nikmati berbagai kemudahan dari fitur canggih Agreepedia untuk meningkatkan efisiensi proses budi dayamu'
            text3='Fitur canggih Agreepedia akan segera hadir spesial buat kamu !'
            iklan={iklan3}
          />
        </div>

        <div
          style={{ scrollMarginTop: '6.5rem' }}
          id='home-register'
          className='konten2'
        >
          <span>Ayo Daftar Agreepedia Sekarang</span>
          <span>
            Pilih cara daftarmu, semua ada benefitnya, gabung ke komunitas
            Agrikultur terbesar di Indonesia!
          </span>
          <div>
            <span
              style={{ cursor: 'pointer', color: expert ? '#000' : '#979797' }}
              className='expert'
            >
              Pengguna Expert
            </span>
            <span
              style={{ cursor: 'pointer', color: !expert ? '#000' : '#979797' }}
              className='basic'
            >
              Pengguna Basic
            </span>
          </div>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            loop={true}
            slidesPerView={1}
            navigation={{
              nextEl: '.expert',
              prevEl: '.basic',
            }}
            // onSwiper={(swiper) => setExpert(!expert)}
            onSlideChange={() => setExpert(!expert)}
          >
            {React.Children.toArray(
              landingPages.dataSwiper2.map((x) => (
                <SwiperSlide>
                  <Swiper2
                    satu={x.satu}
                    dua={x.dua}
                    tiga={x.tiga}
                    empat={x.empat}
                    lima={x.lima}
                    enam={x.enam}
                    backgroundShade={x.backgroundShade}
                    backgroundImage={x.backgroundImage}
                  />
                </SwiperSlide>
              ))
            )}
          </Swiper>
        </div>
      </div>
    </Layout>
  );
};

export default Agreepedia;
