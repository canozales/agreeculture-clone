import User from '../model/User';

export const addUser = async (req, res) => {
  // Destructure and send to the Backend
  const { email, password } = req.body;

  // Validation
  if (email === '' || password === '') {
    return res.status(422).json({ message: 'Input tidak Sesuai' });
  }

  const bcrypt = require('bcrypt');
  const hashedPassword = await bcrypt.hash(password, 10);

  let user = new User({
    email,
    password: hashedPassword,
  });

  const userExist = await User.exists({ email });

  if (userExist)
    return res.status(409).json({ message: 'Email sudah Terdaftar' });

  try {
    // Save document to the collections
    user = await user.save();
  } catch (err) {
    return new Error(err);
  }

  // Validation apakah berita sudah tersimpan
  if (!user) {
    return res.status(500).json({ message: 'Terdapat Kesalahan' });
  }

  // Berhasil dan tersimpan di Database
  return res.status(201).json({ user });
};

export const userLogin = async (req, res) => {
  // Destructure and send to the Backend
  const { email, password } = req.body;

  try {
    // Validation
    if (email === '' || password === '') {
      return res.status(422).json({ message: 'Invalid Inputs' });
    }
    const user = await User.findOne({ email }).lean();

    if (!user) {
      return res.status(409).json({ message: 'Account tidak dapat ditemukan' });
    }

    const bcrypt = require('bcrypt');
    const match = await bcrypt.compare(password, user.password);

    if (match) {
      return res.status(200).json({
        id: user._id,
        nama: user.nama,
        email: user.email,
        gambar: user.gambar,
      });
    }

    return res.status(422).json({ message: 'Password Anda Salah' });
  } catch (err) {
    console.log(err);
  }
};

export const userUpdate = async (req, res) => {
  const { id, nama, gambar, pekerjaan } = req.body;

  let user;

  try {
    // Pilih sendiri elemen yang mau diupdate
    user = await User.findByIdAndUpdate(id, {
      gambar,
      nama,
      pekerjaan,
    });
  } catch (err) {
    return new Error(err);
  }

  if (!user) {
    return res.status(500).json({ message: 'Terdapat Kesalahan' });
  }

  return res.status(200).json({ message: 'Successfully Updated' });
};

export const getUserById = async (req, res) => {
  const { id } = req.body;

  let user;

  try {
    user = await User.findById(id);
  } catch (err) {
    return new Error(err);
  }

  if (!user) {
    return res.status(404).json({ message: 'Users tak ditemukan' });
  }

  return res
    .status(200)
    .json({ nama: user.nama, gambar: user.gambar, pekerjaan: user.pekerjaan });
};
