import mongoose from 'mongoose';

export const connectToDatabase = async () => {
  await mongoose
    .connect(
      'mongodb+srv://kelompokagree:kelompokagree@cluster0.0etg3vh.mongodb.net/?retryWrites=true&w=majority'
    )
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log(err));
};
