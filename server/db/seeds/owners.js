/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('owners').del()
  await knex('owners').insert([
    { id: 1, name: 'Sarah', allowance: 143092, tax: -1 },
    { id: 2, name: 'Aiden', allowance: 1, tax: -12 },
    { id: 3, name: 'Mathias', allowance: 10, tax: -5 },
    { id: 4, name: 'Dylan', allowance: 15, tax: -9 },
    { id: 5, name: 'Rohan', allowance: 20, tax: -15 },
  ])
}
