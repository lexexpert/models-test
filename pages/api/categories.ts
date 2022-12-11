import type { NextApiRequest, NextApiResponse } from 'next';
import { handleGetCategories } from '../../backend/handlers/categories';

export default async function Categories(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return handleGetCategories(req, res);
    default:
      console.error(`Method Not Allowed ${req.method}`);
      return res.status(405).json({ message: `Method Not Allowed ${req.method}` });
  }
}
