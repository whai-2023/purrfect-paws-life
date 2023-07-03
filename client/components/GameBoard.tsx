import PawPrint from './PawPrint'
import Footer from './Footer'
import PopUp from './PopUp'

import useGameStore from '../gameStore'

import { useQuery } from '@tanstack/react-query'
import { useState, useEffect } from 'react'
import { getAllYellowSquares } from '../apis'

// when using vite, generally we should either:
//   - import the image url from somewhere in `client/`
//   - or, use a plaintext string when using the public folder
// i.e., we can probably move these images to `client/assets/` and import from there
import cat1 from '../public/catImage/cat1.jpg'
import cat2 from '../public/catImage/cat2.jpg'

export default function GameBoard() {
  const { activePlayer, players, setTreats } = useGameStore()

  const [player1Position, setPlayer1Position] = useState(1)
  const [player2Position, setPlayer2Position] = useState(1)

  // it seems as though yellowSquares requires a lot of conditional logic
  // perhaps it could be valuable to render the GameBoard component inside this one
  // and call this one GameBoardWrapper
  // this would allow us to get rid of some conditional logic (if(yellowSquares), yelowSquares ? ... : ..., yellowSquares && ...)
  const { data: yellowSquares } = useQuery(['yellowSquare'], () =>
    getAllYellowSquares()
  )

  useEffect(() => {
    // addTreats doesn't necessarily need to be a function
    function addTreats() {
      if (yellowSquares) {
        activePlayer === 1
          ? setTreats(yellowSquares[players[0].moveTotal].value)
          : setTreats(yellowSquares[players[1].moveTotal].value)
      }
    }
    addTreats()
    setPlayer1Position(players[0].moveTotal)
    setPlayer2Position(players[1].moveTotal)
    // .log can be removed
    console.log(players, activePlayer)
  }, [activePlayer])

  return (
    <>
      <div
        className="game-board"
        style={{
          width: '3710px',
          height: '1800px',
        }}
      >
        {/* nested ternary is hard to read */}
        {yellowSquares ? (
          activePlayer === 1 ? (
            // instead of a ternary like this, we can use a variable like:
            // const popupPlayer = activePlayer === 1 ? player1Position : player2Position
            // const popupContent = yellowSquares[popupPlayer - 1]
            // ...
            // <PopUp content={popupContent} />
            <PopUp content={yellowSquares[player1Position - 1]} />
          ) : (
            <PopUp content={yellowSquares[player2Position - 1]} />
          )
        ) : (
          // typically, we can use null instead of empty strings
          // in which case, we can probably use {yellowSquares && ...}
          // to be more consistent with the code below
          ''
        )}
        {yellowSquares &&
          yellowSquares.map((el) => {
            return (
              <PawPrint
                key={el.id}
                x={el.x}
                y={el.y}
                // with context, I get what rot is
                // but rotation may be more readable
                rot={el.rot}
                content={`${el.id} ${el.input} Treats: ${el.value}`}
                player1={player1Position === el.id ? cat1 : ''}
                player2={player2Position === el.id ? cat2 : ''}
              />
            )
          })}
      </div>
      <Footer />
    </>
  )
}
