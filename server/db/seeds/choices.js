/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('choices').del()
  await knex('choices').insert([
    {
      id: 1,
      choice1: 'Adventurous Cat',
      choice2: 'Cat school',
      x: 0,
      y: 0,
      rotation: 0,
    },
    { id: 2, choice1: 'Partner', choice2: 'Solo', x: 0, y: 0, rotation: 0 },
    { id: 3, choice1: 'Kittens', choice2: 'Invest', x: 0, y: 0, rotation: 0 },
  ])
}
