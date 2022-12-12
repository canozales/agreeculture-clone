import { connectToDatabase } from '../../../api-helpers/utils';
import { getBeritaByOwner } from '../../../api-helpers/controllers/Berita-Controller';

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === 'GET') {
    return getBeritaByOwner(req, res);
  }
}