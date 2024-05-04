/* eslint-disable no-restricted-syntax */
const _ = require("lodash");

/* eslint-disable camelcase */
exports.up = async (knex) => {
  const hasTable = await knex.schema.hasTable("products");
  if (!hasTable) {
    await knex.schema.createTable("products", (table) => {
      table.bigIncrements("id").primary();
      table.string("name").notNullable();
      table.string("description").notNullable();
      table.bigInteger("price").notNullable();
      table.bigInteger("stock");
      table.dateTime("created_at").defaultTo(knex.fn.now());
      table.dateTime("updated_at").defaultTo(knex.fn.now());
    });
  }
};

// eslint-disable-next-line no-shadow
exports.down = async () => {};
