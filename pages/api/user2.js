import {
  getUserById,
  userLogin,
} from '../../api-helpers/controllers/User-Controller';
import { connectToDatabase } from '../../api-helpers/utils';

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === 'POST') {
    return userLogin(req, res);
  }
}
