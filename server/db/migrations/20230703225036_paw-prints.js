/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('paw-prints', (table) => {
    table.increments('id')
    table.integer('x')
    table.integer('y')
    table.string('type')
    table.integer('path')
    table.integer('space')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('paw-prints')
}
