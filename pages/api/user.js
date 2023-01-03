import {
  addUser,
  userUpdate,
} from '../../api-helpers/controllers/User-Controller';
import { connectToDatabase } from '../../api-helpers/utils';

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === 'POST') {
    return addUser(req, res);
  } else if (req.method === 'PUT') {
    return userUpdate(req, res);
  }
}
