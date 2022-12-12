const KotakPilihan = ({ textLabel, setKotakFilter, index }) => (
  <div className='kotakpilihan'>
    <input
      onChange={(x) => {
        const hurufnya = String(x.currentTarget.nextElementSibling.innerHTML);
        if (x.target.checked) {
          setKotakFilter((current) => [...current, hurufnya]);
        } else {
          setKotakFilter((current) =>
            current.filter((y) => {
              return y !== hurufnya;
            })
          );
        }
      }}
      type='checkbox'
      id={`${index}cekbok`}
    />
    <label htmlFor={`${index}cekbok`}>{textLabel}</label>
  </div>
);

const dataKotakPilihan = [
  'Inovasi',
  'Pengantaran',
  'Hewan',
  'Teknologi',
  'Peternakan',
  'Manusia',
  'Tanaman',
];

export { KotakPilihan, dataKotakPilihan };
