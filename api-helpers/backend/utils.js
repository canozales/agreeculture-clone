import axios from 'axios';

// dtp/register
export const addUser = async ({ email, password, password2 }) => {
  const res = await axios.post('http://localhost:8000/api/v1/register', {
    email,
    password,
    confirmPassword: password2,
  });

  if (res.status !== 201) {
    return new Error('Terdapat Kesalahan');
  }

  const resData = await res.data;
  return resData;
};

// dtp/login
export const userLogin = async ({ email, password }) => {
  const res = await axios.post('http://localhost:8000/api/v1/login', {
    email,
    password,
  });

  if (res.status !== 200) {
    return new Error('Terdapat Kesalahan');
  }

  const resData = await res.data;
  return resData.data.jwt;
};

export const lupaPassword = async ({ email }) => {
  const res = await axios.post('http://localhost:8000/api/v1/forgot-password', {
    email,
  });

  if (res.status !== 200) {
    return new Error('Terdapat Kesalahan');
  }

  const resData = await res.data;
  return resData.data;
};

export const gantiPassword = async ({
  newPassword,
  confirmPassword,
  token,
}) => {
  const res = await axios.post(
    `http://localhost:8000/api/v1/reset-password/?token=${token}`,
    {
      newPassword,
      confirmPassword,
    }
  );

  if (res.status !== 200) {
    return new Error('Terdapat Kesalahan');
  }

  const resData = await res.data;
  return resData.data;
};

// dtp/profile

export const userUpdate = async ({ id, nama, gambar, pekerjaan, jwt }) => {
  var bodyFormData = new FormData();
  bodyFormData.append('name', nama);
  bodyFormData.append('job', pekerjaan);
  bodyFormData.append('userImage', gambar);

  const res = await axios.put(
    `http://localhost:8000/api/v1/user/${id}`,
    bodyFormData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        'auth-token': jwt,
      },
    }
  );

  if (res.status !== 200) {
    return new Error('Terdapat Kesalahan');
  }

  const resData = await res.data;
  return resData;
};

// dtp/profile
export const getUserById = async (id, jwt) => {
  const res = await axios.get(`http://localhost:8000/api/v1/user/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'auth-token': jwt,
    },
  });
  if (res.status !== 200) {
    return new Error('Terdapat Kesalahan');
  }

  const data = await res.data.data;
  return data;
};

// dtp/artikel/tambah
export const sendBerita = async ({
  penulis,
  image,
  tags,
  judul,
  subJudul,
  isiBerita,
  belongsTo,
  status,
  jwt,
}) => {
  const res = await axios.post(
    'http://localhost:8001/api/v1/article/',
    {
      author: penulis,
      image: image,
      tags: tags,
      judul: judul,
      subjudul: subJudul,
      content: isiBerita,
      belongsTo: belongsTo,
      status: status,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'auth-token': jwt,
      },
    }
  );

  if (res.status !== 201) {
    return new Error('Terdapat Kesalahan');
  }

  const resData = await res.data;
  return resData;
};

//dtp/artikel/preview
export const getBeritaById = async (id, jwt) => {
  const res = await axios.get(`http://localhost:8001/api/v1/article/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'auth-token': jwt,
    },
  });
  if (res.status !== 200) {
    return new Error('Terdapat Kesalahan');
  }

  const data = await res.data;
  return data.data;
};

export const getBeritaByOwner = async (id, jwt) => {
  const res = await axios.get(`http://localhost:8001/api/v1/article/`, {
    headers: {
      'Content-Type': 'application/json',
      'auth-token': jwt,
    },
  });

  if (res.status !== 200) {
    return new Error('Terdapat Kesalahan');
  }

  const data = await res.data;
  return data.data.filter((x) => x.belongsTo === id);
};

export const deleteBerita = async (id, jwt) => {
  const res = await axios.delete(`http://localhost:8001/api/v1/article/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'auth-token': jwt,
    },
  });
  if (res.status !== 200) {
    return new Error('Terdapat Kesalahan');
  }

  const resData = await res.data;
  return resData;
};

export const updateBerita = async ({
  id,
  judul,
  subjudul,
  belongsTo,
  status,
  content,
  author,
  tags,
  image,
  jwt,
}) => {
  var bodyFormData = new FormData();
  bodyFormData.append('judul', judul);
  bodyFormData.append('subjudul', subjudul);
  bodyFormData.append('belongsTo', belongsTo);
  bodyFormData.append('status', status);
  bodyFormData.append('content', content);
  bodyFormData.append('author', author);
  bodyFormData.append('tags[]', JSON.stringify(tags));
  bodyFormData.append('image', image);

  const res = await axios.put(
    `http://localhost:8001/api/v1/article/${id}`,
    bodyFormData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        'auth-token': jwt,
      },
    }
  );

  if (res.status !== 200) {
    return new Error('Terdapat Kesalahan');
  }

  const resData = await res.data;
  return resData;
};
