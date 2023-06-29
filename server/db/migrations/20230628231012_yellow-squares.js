/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('yellow-squares', (table) => {
    table.increments('id')
    table.string('input')
    table.integer('value')
    table.integer('x')
    table.integer('y')
    table.integer('rot')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('yellow-squares')
}
