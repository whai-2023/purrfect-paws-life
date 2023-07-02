import YellowSquare from './YellowSquare'
import RedSquare from './RedSquare'
import PurpleSquare from './PurpleSquare'
import GreenSquare from './GreenSquare'
import BlueSquare from './BlueSquare'
import Footer from './Footer'

import useGameStore from '../gameStore'

import { useQuery } from '@tanstack/react-query'
import { useState, useEffect } from 'react'
import { getAllYellowSquares } from '../apis'

import { redData, purpleData, greenData, blueData } from '../lib/lib'

import cat1 from '../public/catImage/cat1.jpg'
import cat2 from '../public/catImage/cat2.jpg'

export default function GameBoard() {
  const { turnCount, activePlayer, players } = useGameStore()

  const [player1Position, setPlayer1Position] = useState(1)
  const [player2Position, setPlayer2Position] = useState(1)

  const { data: yellowSquares } = useQuery(['yellowSquare'], () =>
    getAllYellowSquares()
  )

  useEffect(() => {
    setPlayer1Position(players[0].moveTotal)
    setPlayer2Position(players[1].moveTotal)
  }, [turnCount])

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
