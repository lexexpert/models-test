import { NextApiRequest, NextApiResponse } from 'next/types';
import { Category } from '../../../types/category.type';
import { knex } from '../../../utils/db.util';

export const handleGetCategories = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const categories: Category[] = await knex('categories');
    return res.status(200).json(categories);
  } catch (e) {
    console.error(e);
    return res.status(400).json({ errors: [e.message] });
  }
};
