import { connectToDatabase } from '../../api-helpers/utils';
import {
  addBerita,
  getAllBerita,
} from '../../api-helpers/controllers/Berita-Controller';

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === 'GET') {
    return getAllBerita(req, res);
  } else if (req.method === 'POST') {
    return addBerita(req, res);
  }
}
