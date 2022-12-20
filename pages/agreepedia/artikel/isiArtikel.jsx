import React from 'react';
import BackTo from '../../../components/BackTo';
import Image from 'next/image';
import gambar from '../../../public/assets/images/partner2a.png';

const Home = () => {
  return (
    <div className='isiArtikel'>
      <BackTo text='Kembali ke Daftar Artikel' />
      <span>Menghasilkan Daging Berkualitas dengan Rekayasa Genetika</span>
      <span>
        Solusi untuk pemenuhan konsumsi daging yang memiliki sejuta manfaat
      </span>
      <div>
        <span>Oleh Diah Rachmawati</span>
        <span>16 November 2022</span>
        <div>
          <span>Industri</span>
          <span>Peternakan</span>
          <span>Inovasi</span>
          <span>Agribisnis</span>
          <span>Teknologi</span>
        </div>
      </div>

      <div className='paragraf'>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo libero
          incidunt repellat, sequi nobis consequatur voluptatum nisi, debitis
          dicta quibusdam beatae doloremque obcaecati aspernatur harum pariatur
          necessitatibus natus eius reiciendis. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Suscipit, dolor excepturi? Ipsam sint
          quis, eum accusamus vitae, reiciendis laboriosam est impedit magni
          asperiores repellendus unde maiores, eius cumque delectus vero. Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Eos quasi tempore
          animi, laudantium illo nisi, quisquam nulla voluptates, adipisci omnis
          ullam labore beatae! Molestias aperiam tenetur aliquam odio ut
          suscipit?
        </span>
      </div>
      <div className='title'>Apa itu lorem?</div>
      <div className='paragraf'>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo libero
          incidunt repellat, sequi nobis consequatur voluptatum nisi, debitis
          dicta quibusdam beatae doloremque obcaecati aspernatur harum pariatur
          necessitatibus natus eius reiciendis. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Suscipit, dolor excepturi? Ipsam sint
          quis, eum accusamus vitae, reiciendis laboriosam est impedit magni
          asperiores repellendus unde maiores, eius cumque delectus vero. Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Eos quasi tempore
          animi, laudantium illo nisi, quisquam nulla voluptates, adipisci omnis
          ullam labore beatae! Molestias aperiam tenetur aliquam odio ut
          suscipit?
        </span>
      </div>

      <div className='image'>
        <Image className='gambar' src={gambar} alt='Image'></Image>
      </div>
    </div>
  );
};

export default Home;
