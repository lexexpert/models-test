const knexConfig = {
  development: {
    client: 'postgresql',
    connection: `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    debug: false,
    pool: { min: 0, max: 20 },
    seeds: {
      directory: __dirname + '/seeds/development',
    },
    migrations: {
      tableName: 'migrations',
    },
    log: {
      warn(message: string) {
        console.warn(message);
      },
      error(message: string) {
        console.error(message);
      },
    },
  },

  test: {
    client: 'postgresql',
    connection: `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    debug: false,
    pool: { min: 0, max: 20 },
    seeds: {
      directory: __dirname + '/seeds/development',
    },
    migrations: {
      tableName: 'migrations',
    },
    log: {
      warn(message: string) {
        console.warn(message);
      },
      error(message: string) {
        console.error(message);
      },
    },
  },

  production: {
    client: 'postgresql',
    connection: `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    pool: { min: 0, max: 100 },
    seeds: {
      directory: __dirname + '/seeds/production',
    },
    migrations: {
      tableName: 'migrations',
    },
    log: {
      warn(message: string) {
        console.warn(message);
      },
      error(message: string) {
        console.error(message);
      },
    },
  },
};

export default knexConfig;
