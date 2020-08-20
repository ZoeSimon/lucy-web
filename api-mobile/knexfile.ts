// Update with your config settings.

import dotenv from 'dotenv';

const env = process.env.NODE_ENV || 'development';

console.log('1===================================================');
console.log('process.env:', process.env);
console.log('2===================================================');
console.log(env);
if (env === 'development') {
  const temp = dotenv.config();
  console.log('dotenv:', JSON.stringify(temp.parsed));
}
console.log('3===================================================');

module.exports = {
  development: {
    debug: true,
    client: 'postgresql',
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT || 5432,
      database: process.env.DB_DATABASE,
      user: process.env.DB_USER,
      password: process.env.DB_PASS
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      // stub: './config/knex-migration-stub.js',
      tableName: 'migration',
      directory: 'src/database/migrations'
    }
    // seeds: {
    //   // stub: './config/knex-migration-stub.js',
    //   tableName: 'seed',
    //   directory: 'src/database/seeds'
    // }
  },
  test: {
    client: 'postgresql',
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT || 5432,
      database: process.env.DB_DATABASE,
      user: process.env.DB_USER,
      password: process.env.DB_PASS
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      // stub: './config/knex-migration-stub.js',
      tableName: 'migration',
      directory: 'src/database/migrations'
    }
  },
  production: {
    client: 'postgresql',
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT || 5432,
      database: process.env.DB_DATABASE,
      user: process.env.DB_USER,
      password: process.env.DB_PASS
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'migration',
      directory: 'src/database/migrations'
    },
    seeds: {
      // stub: './config/knex-migration-stub.js',
      tableName: 'seed',
      directory: 'src/database/seeds'
    }
  }
};
