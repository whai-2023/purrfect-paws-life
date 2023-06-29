/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('cat-towers').del()
  await knex('cat-towers').insert([
    { id: 1, material: 'carboard', value: 2 },
    { id: 2, material: 'concrete', value: 4 },
    { id: 3, material: 'wool', value: 6 },
    { id: 4, material: 'linen', value: 7 },
    { id: 5, material: 'plastic', value: 10 },
    { id: 6, material: 'wood', value: 12 },
    { id: 7, material: 'bronze', value: 15 },
    { id: 8, material: 'silver', value: 17 },
    { id: 9, material: 'gold', value: 20 },
    { id: 10, material: 'diamond', value: 25 },
  ])
}
