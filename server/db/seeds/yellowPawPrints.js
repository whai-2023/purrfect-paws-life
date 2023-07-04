/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('yellow-paw-prints').del()
  await knex('yellow-paw-prints').insert([
    {
      id: 1,
      input: 'You play hide and seek with your owner!',
      value: 5,
    },
    {
      id: 2,
      input: 'You find a giant fresh piece of ham in the trash!',
      value: 5,
    },
    {
      id: 3,
      input: 'You catch the house mouse!',
      value: 5,
    },
    {
      id: 4,
      input: 'You win the cat lottery!',
      value: 20,
    },
    {
      id: 5,
      input: 'You do the impossible! You catch the laser pointer!',
      value: 10,
    },
    {
      id: 6,
      input: 'You learn a new trick!',
      value: 5,
    },
    {
      id: 7,
      input: 'You explore a new neighbourhood!',
      value: 5,
    },
    {
      id: 8,
      input: 'Owner forgets they already feed you. Two dinners!',
      value: 10,
    },
    {
      id: 9,
      input: 'You have a nice nap in the sun.',
      value: 5,
    },
    {
      id: 10,
      input: 'You wake your owner up at night...',
      value: -5,
    },
    {
      id: 11,
      input: 'Make biscuits / pies.',
      value: 5,
    },
    {
      id: 12,
      input: 'Your owner knits you a cute outfit.',
      value: 5,
    },
    {
      id: 13,
      input: 'You meet the celebrity, grumpy cat!',
      value: 10,
    },
    {
      id: 14,
      input: 'Snuggle with your owner.',
      value: 5,
    },
    {
      id: 15,
      input: 'Your owner gives you belly scratches.',
      value: 5,
    },
    {
      id: 16,
      input: 'You give the cutest meow your owner has ever heard!',
      value: 5,
    },
    {
      id: 17,
      input: 'Spend the night sleeping in your owners bed.',
      value: 5,
    },
    {
      id: 18,
      input: 'Learn to high-five with your owner.',
      value: 5,
    },
    {
      id: 19,
      input: 'Cat vomit on the carpet...',
      value: -5,
    },
    {
      id: 20,
      input: 'Get sick from drinking bad water...',
      value: -5,
    },
    {
      id: 21,
      input: 'You get into an alley fight...',
      value: -5,
    },
    {
      id: 22,
      input: 'You oversleep and miss breakfast...',
      value: -5,
    },
    {
      id: 23,
      input: 'Debt collector comes to your door!',
      value: -10,
    },
    {
      id: 24,
      input: "Break your owner's favourite vase...",
      value: -5,
    },
    {
      id: 25,
      input: "Knock the Christmas tree down. You've ruined Christmas!",
      value: -10,
    },
    {
      id: 26,
      input: 'Cough a furball onto the carpet...',
      value: -5,
    },
    {
      id: 27,
      input:
        'Owner catches you trying to steal food off the kitchen counter...',
      value: -5,
    },
    {
      id: 28,
      input: 'You bite your owner...',
      value: -5,
    },
    {
      id: 29,
      input: 'You spill your food bowl all over the floor...',
      value: -5,
    },
  ])
}
