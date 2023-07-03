import YellowSquare from './YellowSquare'
import RedSquare from './RedSquare'
import PurpleSquare from './PurpleSquare'
import GreenSquare from './GreenSquare'
import BlueSquare from './BlueSquare'
import Footer from './Footer'
import PopUp from './PopUp'

import useGameStore from '../gameStore'

import { useQuery } from '@tanstack/react-query'
import { useState, useEffect } from 'react'
import { getAllYellowSquares } from '../apis'

import { redData, purpleData, greenData, blueData } from '../lib/lib'

import cat1 from '../public/catImage/cat1.jpg'
import cat2 from '../public/catImage/cat2.jpg'

export default function GameBoard() {
  const { activePlayer, players, setTreats } = useGameStore()

  const [player1Position, setPlayer1Position] = useState(1)
  const [player2Position, setPlayer2Position] = useState(1)

  const { data: yellowSquares } = useQuery(['yellowSquare'], () =>
    getAllYellowSquares()
  )

  useEffect(() => {
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
    console.log(players, activePlayer)
  }, [activePlayer])

  return (
    <>
      <div
        className="game-board"
        style={{
          width: '4000px',
          height: '800px',
          backgroundColor: 'lightblue',
        }}
      >
        {yellowSquares ? (
          activePlayer === 1 ? (
            <PopUp content={yellowSquares[player1Position - 1]} />
          ) : (
            <PopUp content={yellowSquares[player2Position - 1]} />
          )
        ) : (
          ''
        )}
        {yellowSquares &&
          yellowSquares.map((el) => {
            return (
              <YellowSquare
                key={el.id}
                x={el.x}
                y={el.y}
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
