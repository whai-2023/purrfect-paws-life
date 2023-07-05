# Purrfect Paws Life

### 1. Installation

This project uses legacy packages that require an older version of React.

Please run this commands to install packages:
`npm install --save --legacy-peer-deps react-wheel-of-prizes react-audio-player use-sound react-confetti fireworks react-text-transition && npm i --legacy-peer-deps`

Please run this command to populate database:
`npm run knex migrate:latest && npm run knex seed:run`

Please run this command to run the server:
`npm run dev`

You will see the project working at `http://localhost:5173/`

### 2. Purpose
 Our game is similar too hasbros game of life and we were inspired by their game.

 The goal of the game is to make some treats and be better than all other cats by the end of the game, where a winning page will be shown with the richest cat being the winner.

 Currently many gameplay features are still to be implemented, so please forgive this as a proof of concecpt.

 ### 3. Gameplay and rules
 
 When you are loaded in you will see the beautiful start screen, press 'Purrfect Paws Life' in the center to get sent to the game.
 
 Once there press the spinning wheel and get transported through the board when you land on certain squares they do different things.
 
 When you go through the game you have a currency of Treats aswell as being able to attain assets.

 Red squares will allow you to choose a life path (to be implemented).
 
 Yellow squares give you whatever is in the pop up in the top left of your screen this could be positive or negative and will take away or increase your treats.
 
 Blue squares will allow you to buy a house, or choose an owner (to be implemented).
