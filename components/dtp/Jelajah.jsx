import React from 'react';
import Link from 'next/link';

const Jelajah = ({ judul, t1, t2, kartu }) => (
  <>
    <span className='subjudul'>{judul}</span>
    <div className='luaran'>
      {t1 && t2 && (
        <div className='tulisan'>
          <div>
            <span>{t1}</span>
            <span>{t2}</span>
          </div>
          <Link className='link' href='/agreepedia'>
            <button>Buka Agreepedia</button>
          </Link>
        </div>
      )}

      <div className='holder'>
        {React.Children.toArray(
          kartu.map((x) => (
            <div
              className={`kartu ${
                x.status === 'no' ? 'kartu-dtp-nonaktif' : ''
              }`}
            >
              {x.logo}
              <span>{x.teks1}</span>
              <span>{x.teks2}</span>
            </div>
          ))
        )}
      </div>
    </div>
  </>
);

export default Jelajah;
