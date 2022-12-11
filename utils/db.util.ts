import knexConfig from '../config/knex.config';
import knexLib from 'knex';

const environment = process.env.NODE_ENV || 'development';
export const createKnex = () => knexLib(knexConfig[environment]);
export const knex = createKnex();
