/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('yellow-squares').del()
  await knex('yellow-squares').insert([
    {
      id: 1,
      input: 'Play hide and seek with owner,',
      value: 5,
      x: 410,
      y: 465,
      rot: 1,
    },
    {
      id: 2,
      input: 'You find a giant fresh piece of ham in the trash',
      value: 5,
      x: 540,
      y: 590,
      rot: 3,
    },
    {
      id: 3,
      input: 'You catch the house mouse',
      value: 5,
      x: 640,
      y: 730,
      rot: -5,
    },
    {
      id: 4,
      input: 'You win the cat lottery!',
      value: 20,
      x: 800,
      y: 780,
      rot: 7,
    },
    {
      id: 5,
      input: 'You do the impossible! You catch the laser pointer!',
      value: 10,
      x: 960,
      y: 830,
      rot: -5,
    },
    {
      id: 6,
      input: 'You learn a new trick',
      value: 5,
      x: 1100,
      y: 750,
      rot: 2,
    },
    {
      id: 7,
      input: 'You explore a new neighbourhood',
      value: 0,
      x: 1150,
      y: 540,
      rot: -5,
    },
    {
      id: 8,
      input: 'Owner forgets they already feed you. Two dinners!',
      value: 10,
      x: 1150,
      y: 400,
      rot: -5,
    },

    {
      id: 10,
      input: 'You wake your owner up at night',
      value: -5,
      x: 1360,
      y: 280,
      rot: 2,
    },
    {
      id: 11,
      input: 'Make biscuits / pies',
      value: 5,
      x: 480,
      y: 230,
      rot: -3,
    },
    {
      id: 12,
      input: 'Your owner knits you a cute outfit',
      value: 5,
      x: 830,
      y: 220,
      rot: 1,
    },
    {
      id: 13,
      input: 'You meet the celebrity, grumpy cat',
      x: 1000,
      y: 290,
      rot: -3,
    },
    {
      id: 14,
      input: 'Snuggle with your owner',
      value: 5,
      x: 1600,
      y: 290,
      rot: 1,
    },
    {
      id: 15,
      input: 'Your owner gives you belly scratches',
      value: 5,
      x: 2100,
      y: 290,
      rot: -3,
    },
    {
      id: 16,
      input: 'Give the cutest meow your owner has ever heard',
      value: 5,
      x: 1500,
      y: 560,
      rot: 1,
    },
    {
      id: 17,
      input: 'Spend the night sleeping in your owners bed',
      value: 5,
      x: 1700,
      y: 770,
      rot: -3,
    },
    {
      id: 18,
      input: 'Learn to high-five with your owner',
      value: 5,
      x: 2040,
      y: 740,
      rot: 4,
    },
    {
      id: 19,
      input: 'Cat vomit on the carpet',
      value: -5,
      x: 2170,
      y: 650,
      rot: 1,
    },
    {
      id: 20,
      input: 'Get sick from drinking bad water',
      value: 0,
      x: 2350,
      y: 650,
      rot: -3,
    },
    {
      id: 21,
      input: 'You get into an alley fight',
      value: -5,
      x: 2650,
      y: 800,
      rot: 3,
    },
    {
      id: 22,
      input: 'You oversleep and miss breakfast',
      value: -5,
      x: 2880,
      y: 700,
      rot: -2,
    },
    {
      id: 23,
      input: 'Debt collector comes to your door!',
      value: 0,
      x: 3050,
      y: 670,
      rot: 4,
    },
    {
      id: 24,
      input: "Break your owner's favourite vase",
      value: -5,
      x: 3260,
      y: 580,
      rot: 3,
    },
    {
      id: 25,
      input: "Knock the Christmas tree down. You've ruined Christmas!",
      value: -10,
      x: 3450,
      y: 600,
      rot: -2,
    },
    {
      id: 26,
      input: 'Cough a furball onto the carpet',
      value: -5,
      x: 2650,
      y: 500,
      rot: 1,
    },
    {
      id: 27,
      input: 'Owner catches you trying to steal food off the kitchen counter',
      value: -5,
      x: 2650,
      y: 360,
      rot: 3,
    },
    {
      id: 28,
      input: 'You bite your owner',
      value: -5,
      x: 3100,
      y: 170,
      rot: -2,
    },
    {
      id: 29,
      input: 'You spill your food bowl all over the floor',
      value: -5,
      x: 3450,
      y: 270,
      rot: -3,
    },
    {
      id: 30,
      input: 'FINISH',
      x: 3440, //sideways
      y: 710, // up down
      value: 0,
      rot: '1deg',
    },
    {
      id: 31,
      input: 'CHOOSE OWNER',
      x: 305, //sideways
      y: 250, // up down
      value: 0,
      rot: '5deg',
    },
    {
      id: 32,
      input: 'CHOOSE OWNER',
      x: 1020, //sideways
      y: 610, // up down
      value: 0,
      rot: '5deg',
    },
    {
      id: 33,
      input: 'PARTNER',
      x: 1850, //sideways
      y: 700, // up down
      value: 0,
      rot: '5deg',
    },

    {
      id: 34,
      input: 'buy new crib',
      x: 1920, //sideways
      y: 250, // up down
      value: 0,
      rot: '-1deg',
    },
    {
      id: 35,
      input: 'get another owner',
      x: 2300, //sideways
      y: 470, // up down
      value: 0,
      rot: '-3deg',
    },
    {
      id: 36,
      input: 'go invest in a house',
      x: 2790, //sideways
      y: 240, // up down
      value: 0,
      rot: '1deg',
    },
    {
      id: 37,
      input: 'go invest in a house',
      x: 3300, //sideways
      y: 240, // up down
      value: 0,
      rot: '1deg',
    },
    {
      id: 38,
      input: 'go invest in a house',
      x: 3500, //sideways
      y: 430, // up down
      value: 0,
      rot: '1deg',
    },
    {
      id: 39,
      input: 'go invest in a house',
      x: 3100, //sideways
      y: 560, // up down
      value: 0,
      rot: '1deg',
    },
    {
      id: 40,
      input: 'PAY DAY',
      x: 650, //sideways
      y: 250, // up down
      value: 0,
      rot: '-5deg',
    },
    {
      id: 41,
      input: 'PAY DAY',
      x: 1210,
      y: 280,
      value: 0,
      rot: '5deg',
    },
    {
      id: 42,
      input: 'PAY DAY',
      x: 1550, //sideways
      y: 700, // up down
      value: 0,
      rot: '-2deg',
    },
    {
      id: 43,
      input: 'PAY DAY',
      x: 1750, //sideways
      y: 220, // up down
      value: 0,
      rot: '3deg',
    },
    {
      id: 44,
      input: 'PAY DAY',
      x: 2270, //sideways
      y: 300, // up down
      value: 0,
      rot: '-3deg',
    },
    {
      id: 45,
      input: 'PAY DAY',
      x: 2500, //sideways
      y: 750, // up down
      value: 0,
      rot: '1deg',
    },
    {
      id: 46,
      input: 'PAY DAY',
      x: 2970, //sideways
      y: 180, // up down
      value: 0,
      rot: '1deg',
    },
    {
      id: 47,
      input: 'Choose school or owner',
      x: 220, //sideways
      y: 400, // up down
      value: 0,
      rot: '0deg',
    },
    {
      id: 48,
      input: 'Get married?',
      x: 1470, //sideways
      y: 400, // up down
      value: 0,
      rot: '-2deg',
    },
    {
      id: 49,
      input: 'Buy a house?',
      x: 2700, //sideways
      y: 640, // up down
      value: 0,
      rot: '3deg',
    },
  ])
}
