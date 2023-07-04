import PawPrint from './PawPrint'
import Footer from './Footer'
import PopUp from './PopUp'

import useGameStore from '../gameStore'

import { useQuery } from '@tanstack/react-query'
import { useState, useEffect } from 'react'
import { getAllYellowSquares, getAllPawPrints } from '../apis'

import getShuffledYellowPawPrintData from '../lib/lib'

import cat1 from '../public/catImage/cat1.jpg'
import cat2 from '../public/catImage/cat2.jpg'

export default function GameBoard() {
  const { activePlayer, players, setTreats } = useGameStore()

  const [player1Space, setPlayer1Space] = useState(1)
  const [player2Space, setPlayer2Space] = useState(1)

  const [player1Path, setPlayer1Path] = useState(1)
  const [player2Path, setPlayer2Path] = useState(1)

  const { data: yellowSquares } = useQuery(['yellowSquare'], () =>
    getAllYellowSquares()
  )
  const { data: yellowPawPrintData } = useQuery(['yellowPawPrintData'], () =>
    getShuffledYellowPawPrintData()
  )
  const { data: pawPrints } = useQuery(['pawPrints'], () => getAllPawPrints())

  const yellowPawPrints = pawPrints?.filter((el) => el.type === 'Yellow')

  useEffect(() => {
    function addTreats() {
      if (yellowSquares) {
        activePlayer === 1
          ? setTreats(yellowSquares[players[0].moveTotal].value)
          : setTreats(yellowSquares[players[1].moveTotal].value)
      }
    }
    addTreats()
    setPlayer1Space(players[0].moveTotal)
    setPlayer2Space(players[1].moveTotal)
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
        {pawPrints &&
          pawPrints.map((el) => {
            return (
              <>
                {el.type === 'Yellow' &&
                activePlayer === 1 &&
                player1Space === el.space &&
                player1Path === el.path ? (
                  <PopUp content={yellowPawPrintData![player1Space]} />
                ) : null}
                {el.type === 'Yellow' &&
                activePlayer === 1 &&
                player2Space === el.space &&
                player1Path === el.path ? (
                  <PopUp content={yellowPawPrintData![player2Space]} />
                ) : null}
                <PawPrint
                  key={el.id}
                  x={el.x}
                  y={el.y}
                  debug={`ID: ${el.id} Type: ${el.type}Path: ${el.path} Space: ${el.space}`}
                  player1={
                    player1Space === el.space && player1Path === el.path
                      ? cat1
                      : ''
                  }
                  player2={
                    player2Space === el.space && player1Path === el.path
                      ? cat2
                      : ''
                  }
                />
              </>
            )
          })}
      </div>
      <Footer />
    </>
  )
}
