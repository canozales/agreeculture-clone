import mongoose from 'mongoose';

const { Schema } = mongoose;

const strukturUser = new Schema(
  {
    nama: String,
    email: String,
    password: String,
    gambar: String,
    pekerjaan: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User || mongoose.model('User', strukturUser);
