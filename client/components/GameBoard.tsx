import YellowSquare from './YellowSquare'
import RedSquare from './RedSquare'
import PurpleSquare from './PurpleSquare'
import GreenSquare from './GreenSquare'
import BlueSquare from './BlueSquare'
import Footer from './Footer'

import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { getAllYellowSquares } from '../apis'

import { redData, purpleData, greenData, blueData } from '../lib/lib'

import cat1 from '../public/catImage/cat1.jpg'
import cat2 from '../public/catImage/cat2.jpg'

export default function GameBoard() {
  const queryClient = useQueryClient()

  const [activePlayer, setActivePlayer] = useState(1)
  const [player1Position, setPlayer1Position] = useState(1)
  const [player2Position, setPlayer2Position] = useState(1)

  const spinningWheelData = queryClient.getQueryData(['spinningWheelData'])

  const { data: yellowSquares } = useQuery(['yellowSquare'], () =>
    getAllYellowSquares()
  )

  const movePlayer = (steps) => {
    if (activePlayer === 1) {
      setPlayer1Position((prevPosition) => prevPosition + steps)
      setActivePlayer(2)
    } else {
      setPlayer2Position((prevPosition) => prevPosition + steps)
      setActivePlayer(1)
    }
  }

  return (
    <>
      <div
        className="game-board"
        style={{ width: '4000px', height: '800', backgroundColor: 'lightblue' }}
      >
        {purpleData.map((el) => {
          return (
            <PurpleSquare
              key={`purple ${el.id}`}
              x={el.x}
              y={el.y}
              rot={el.rot}
              content={`${el.id} ${el.content}`}
            />
          )
        })}
        {blueData.map((el) => {
          return (
            <BlueSquare
              key={`blue ${el.id}`}
              x={el.x}
              y={el.y}
              rot={el.rot}
              content={`${el.id} ${el.content}`}
            />
          )
        })}
        {redData.map((el) => {
          return (
            <RedSquare
              key={`red ${el.id}`}
              x={el.x}
              y={el.y}
              rot={el.rot}
              content={`${el.id} ${el.content}`}
            />
          )
        })}
        {yellowSquares &&
          yellowSquares.map((el) => {
            return (
              <YellowSquare
                key={el.id}
                x={el.x}
                y={el.y}
                rot={el.rot}
                content={`${el.id} ${el.input}`}
                player1={player1Position === el.id ? cat1 : ''}
                player2={player2Position === el.id ? cat2 : ''}
              />
            )
          })}
        {greenData.map((el) => {
          return (
            <GreenSquare
              key={`green ${el.id}`}
              x={el.x}
              y={el.y}
              rot={el.rot}
              content={`${el.id} ${el.content}`}
            />
          )
        })}
      </div>
      <Footer />
    </>
  )
}
