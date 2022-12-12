import mongoose from 'mongoose';

const { Schema } = mongoose;

const strukturBerita = new Schema(
  {
    image: String,
    tanggal: Date,
    penulis: String,
    tags: [
      {
        type: String,
      },
    ],
    judul: String,
    subJudul: String,
    isiBerita: String,
    belongsTo: String,
    status: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Berita ||
  mongoose.model('Berita', strukturBerita);

// validation, if the model already there. dont perform such operation
// Berita to beritas (conversion)
