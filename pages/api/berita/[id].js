import { connectToDatabase } from '../../../api-helpers/utils';
import {
  deleteBerita,
  updateBerita,
  getBeritaById,
} from '../../../api-helpers/controllers/Berita-Controller';

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === 'PUT') {
    return updateBerita(req, res);
  } else if (req.method === 'DELETE') {
    return deleteBerita(req, res);
  } else if (req.method === 'GET') {
    return getBeritaById(req, res);
  }
}
