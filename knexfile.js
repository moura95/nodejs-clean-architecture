require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    debug: process.env.KNEX_DEBUG === "1",
    // debug: true,
    ...pool(2, 10),
    // acquireConnectionTimeout: 10000000,
    migrations: {
      directory: `${__dirname}/database/migrations`,
      schemaName: "public",
      tableName: "knex_migrations",
    },
    seeds: {
      directory: `${__dirname}/database/seeds/development`,
    },
    useNullAsDefault: true,
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    ...pool(2, 10),
    debug: process.env.KNEX_DEBUG === "1",
    migrations: {
      directory: `${__dirname}/database/migrations`,
      schemaName: "public",
      tableName: "knex_migrations",
    },
    seeds: {
      directory: `${__dirname}/database/seeds/production`,
    },
  },
};

/**
 * Determine settings for Knex pool.
 *
 * Checks for an environment variable called KNEX_POOL which (if it exists)
 * should consist of 2 comma-separated numbers (e.g. "10,20").  An invalid
 * KNEX_POOL is ignored.
 *
 * @param {number} [min] - The 'min' value for the Knex pool.
 * Overridden by environment variable 'KNEX_POOL'.
 * @param {number} [max] - The 'max' value for the Knex pool.
 * Overridden by environment variable 'KNEX_POOL'.
 * @return {object|undefined} if object, has a 'pool' key
 */
// eslint-disable-next-line consistent-return
  const bounds = {};

  if (min) {
    bounds.min = min;
  }
  if (max) {
    bounds.max = max;
  }

  const match = (process.env.KNEX_POOL || "").match(/^(\d+),(\d+)$/);
  if (match) {
    bounds.min = Number(match[1]);
    bounds.max = Number(match[2]);
  }

  if (Object.keys(bounds).length) {
    return {
      pool: {
        ...bounds,
        createRetryIntervalMillis: 200,
        acquireTimeoutMillis: 60000,
        createTimeoutMillis: 30000,
        idleTimeoutMillis: 600000,
      },
    };
  }
}
