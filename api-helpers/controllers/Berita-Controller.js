import Berita from '../model/Berita';

export const getAllBerita = async (req, res) => {
  let daftarBerita;

  try {
    daftarBerita = await Berita.find();
  } catch (err) {
    return new Error(err);
  }

  if (!daftarBerita) {
    return res.status(500).json({ message: 'Terdapat Kesalahan' });
  }

  if (daftarBerita.length === 0) {
    return res.status(404).json({ message: 'Tidak ada Berita yang Ditemukan' });
  }

  return res.status(200).json({ daftarBerita: daftarBerita });
};

export const addBerita = async (req, res) => {
  // Destructure and send to the Backend
  const {
    image,
    tanggal,
    penulis,
    tags,
    judul,
    subJudul,
    isiBerita,
    belongsTo,
    status,
  } = req.body;

  let berita = new Berita({
    image,
    tanggal,
    penulis,
    tags,
    judul,
    subJudul,
    isiBerita,
    belongsTo,
    status,
  });

  try {
    berita = await berita.save();
    // Save document to the collections
  } catch (err) {
    return new Error(err);
  }

  // Validation apakah berita sudah tersimpan
  if (!berita) {
    return res.status(500).json({ message: 'Terdapat Kesalahan' });
  }

  // Berhasil dan tersimpan di Database
  return res.status(201).json({ berita });
};

export const updateBerita = async (req, res) => {
  const id = req.query.id;
  const { image, tanggal, penulis, tags, judul, subJudul, isiBerita, status } =
    req.body;

  // Validation
  if (penulis === '') {
    return res.status(422).json({ message: 'Invalid Inputs' });
  }

  let berita;

  try {
    // Elemen yang diupdate
    berita = await Berita.findByIdAndUpdate(id, {
      image,
      tanggal,
      penulis,
      tags,
      judul,
      subJudul,
      isiBerita,
      status,
    });
  } catch (err) {
    return new Error(err);
  }

  if (!berita) {
    return res.status(500).json({ message: 'Terdapat Kesalahan' });
  }

  return res.status(200).json({ message: 'Successfully Updated' });
};

export const deleteBerita = async (req, res) => {
  const id = req.query.id;

  let berita;

  try {
    berita = await Berita.findByIdAndRemove(id);
  } catch (err) {
    return new Error(err);
  }

  if (!berita) {
    return res.status(500).json({ message: 'Terdapat Kesalahan' });
  }

  return res.status(200).json({ message: 'Successfully Deleted' });
};

export const getBeritaById = async (req, res) => {
  const id = req.query.id;

  let berita;

  try {
    berita = await Berita.findById(id);
  } catch (err) {
    return new Error(err);
  }

  if (!berita) {
    return res.status(404).json({ message: 'Berita tak ditemukan' });
  }

  return res.status(200).json({ berita });
};

export const getBeritaByOwner = async (req, res) => {
  const id = req.query.id;

  let berita;

  try {
    berita = await Berita.find();
  } catch (err) {
    return new Error(err);
  }

  berita = berita.filter((x) => x.belongsTo === id);

  if (!berita || berita.length === 0) {
    return res.status(404).json({ message: 'Berita tak ditemukan' });
  }

  return res.status(200).json({ berita });
};
