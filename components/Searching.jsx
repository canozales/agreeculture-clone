import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { IoFilter } from 'react-icons/io5';
import landingPages from '../public/assets/data/landingPages';
import KartuBerita from './KartuBerita';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { KotakPilihan, dataKotakPilihan } from './BeritaKegiatan';

const Searching = () => {
  const [showTag, setShowTag] = useState(false);
  const [kataFilter, setKataFilter] = useState('');
  const [kotakFilter, setKotakFilter] = useState([]);

  const [data, setData] = useState(landingPages.daftarBerita);
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
    <div className='home-12'>
      <span>Berita dan Kegiatan Agree</span>
      <div className='bagian-filter'>
        <span>Tampilkan</span>
        <div onClick={() => setShowTag(true)}>
          <IoFilter className='logo' />
          <span>Filter</span>
          {showTag && (
            <OutsideClickHandler
              onOutsideClick={() => {
                setShowTag(false);
              }}
            >
              <div className='filter-holder' style={{ cursor: 'default' }}>
                <span>Tags</span>
                <button>Pilih Semua</button>
                {React.Children.toArray(
                  dataKotakPilihan.map((x, index) => (
                    <KotakPilihan
                      setKotakFilter={setKotakFilter}
                      textLabel={x}
                      index={index}
                    />
                  ))
                )}
              </div>
            </OutsideClickHandler>
          )}
        </div>
        <div>
          <input
            type='text'
            onChange={(x) => setKataFilter(x.target.value)}
            placeholder='Cari judul artikel...'
          />
          <BsSearch />
        </div>
      </div>
      <div className='bagian-kartu'>
        {React.Children.toArray(
          filteredData.map((x) => (
            <KartuBerita
              image={x.image}
              text={x.text}
              sektor={x.sektor}
              date={x.date}
            />
          ))
        )}
      </div>
      <div className='navigate-bottom'>
        <AiOutlineLeft className='logo' />
        <span>1/1</span>
        <AiOutlineRight className='logo' />
      </div>
    </div>
  );
};

export default Searching;
