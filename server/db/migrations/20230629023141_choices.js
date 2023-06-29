/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('choices', (table) => {
    table.increments('id')
    table.string('choice1')
    table.string('choice2')
    table.integer('x')
    table.integer('y')
    table.integer('rotation')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('choices')
}
