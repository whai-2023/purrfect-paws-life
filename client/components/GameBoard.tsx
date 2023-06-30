import YellowSquare from './YellowSquare'
import RedSquare from './RedSquare'
import PurpleSquare from './PurpleSquare'
import GreenSquare from './GreenSquare'
import BlueSquare from './BlueSquare'
import Footer from './Footer'

import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import { useState, useEffect } from 'react'
import { getAllYellowSquares } from '../apis'

import { redData, purpleData, greenData, blueData } from '../lib/lib'

import cat1 from '../public/catImage/cat1.jpg'
import cat2 from '../public/catImage/cat2.jpg'

export default function GameBoard() {
  const queryClient = useQueryClient()

  const [activePlayer, setActivePlayer] = useState(1)
  const [player1Position, setPlayer1Position] = useState(1)
  const [player2Position, setPlayer2Position] = useState(1)

  // fetch todos
  // redux state manager (sync, async)
  // react-query (async)

  // fetch todos
  //
  // { rollId: 1, value: 4 }
  // { rollId: 2, value: 1 }
  // { rollId: 3, value: 5 }
  // { rollId: 4, value: 3 }
  // { rollId: 5, value: 2 }

  const spinningWheelData =
    queryClient.getQueryData<number>(['spinningWheelData']) ?? 1

  const [prevSpinningWheelData, setPrevSpinningWheelData] =
    useState(spinningWheelData)
  const { data: yellowSquares } = useQuery(['yellowSquare'], () =>
    getAllYellowSquares()
  )

  const movePlayer = (steps: number) => {
    if (activePlayer === 1) {
      setPlayer1Position((prevPosition) => prevPosition + steps)
      setActivePlayer(2)
    } else {
      setPlayer2Position((prevPosition) => prevPosition + steps)
      setActivePlayer(1)
    }
  }

  if (spinningWheelData !== prevSpinningWheelData) {
    console.log('render2')
    movePlayer(spinningWheelData)
    setPrevSpinningWheelData(spinningWheelData)
  }

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
