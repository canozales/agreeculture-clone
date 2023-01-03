import axios from 'axios';

export const getAllBerita = async () => {
  const res = await axios.get('http://localhost:3000/api/agree');
  if (res.status !== 200) {
    return new Error('Terdapat Kesalahan');
  }

  // From controller getAllBerita
  const data = await res.data?.daftarBerita;
  return data;
};

export const sendBerita = async ({
  penulis,
  image,
  tags,
  judul,
  subJudul,
  isiBerita,
  belongsTo,
  status,
}) => {
  const res = await axios.post('http://localhost:3000/api/agree', {
    penulis: penulis,
    image: image,
    tags: tags,
    judul: judul,
    subJudul: subJudul,
    isiBerita: isiBerita,
    belongsTo: belongsTo,
    status: status,
  });

  if (res.status !== 201) {
    return new Error('Terdapat Kesalahan');
  }

  const resData = await res.data;
  return resData;
};

export const addUser = async ({ email, password }) => {
  const res = await axios.post('http://localhost:3000/api/user', {
    email,
    password,
  });

  if (res.status !== 201) {
    return new Error('Terdapat Kesalahan');
  }

  const resData = await res.data;
  return resData;
};

export const userUpdate = async ({ id, nama, gambar, pekerjaan }) => {
  const res = await axios.put('http://localhost:3000/api/user', {
    id,
    nama,
    gambar,
    pekerjaan,
  });

  if (res.status !== 200) {
    return new Error('Terdapat Kesalahan');
  }

  const resData = await res.data;
  return resData;
};

export const userLogin = async ({ email, password }) => {
  const res = await axios.post('http://localhost:3000/api/user2', {
    email,
    password,
  });

  if (res.status !== 200) {
    return new Error('Terdapat Kesalahan');
  }

  const resData = await res.data;
  return resData;
};

export const getUserById = async (id) => {
  const res = await axios.post(`http://localhost:3000/api/user3`, {
    id,
  });
  if (res.status !== 200) {
    return new Error('Terdapat Kesalahan');
  }

  const data = await res.data;
  return data;
};

export const getBeritaById = async (id) => {
  const res = await axios.get(`http://localhost:3000/api/berita/${id}`);
  if (res.status !== 200) {
    return new Error('Terdapat Kesalahan');
  }

  const data = await res.data;
  return data.berita;
};

export const getBeritaByOwner = async (id) => {
  const res = await axios.get(`http://localhost:3000/api/berita2/${id}`);
  if (res.status !== 200) {
    return new Error('Terdapat Kesalahan');
  }

  const data = await res.data;
  return data.berita;
};

export const updateBerita = async (id, data) => {
  const res = await axios.put(`http://localhost:3000/api/berita/${id}`, {
    penulis: data.penulis,
    image: data.image,
    tags: data.tags,
    judul: data.judul,
    subJudul: data.subJudul,
    isiBerita: data.isiBerita,
    status: data.status,
  });

  if (res.status !== 200) {
    return new Error('Terdapat Kesalahan');
  }

  const resData = await res.data;
  return resData;
};

export const deleteBerita = async (id) => {
  const res = await axios.delete(`http://localhost:3000/api/berita/${id}`);
  if (res.status !== 200) {
    return new Error('Terdapat Kesalahan');
  }

  const resData = await res.data;
  return resData;
};
