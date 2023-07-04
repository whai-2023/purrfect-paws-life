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

  const [player1Position, setPlayer1Position] = useState(1)
  const [player2Position, setPlayer2Position] = useState(1)

  const { data: yellowSquares } = useQuery(['yellowSquare'], () =>
    getAllYellowSquares()
  )

  const { data: yellowPawPrintData } = useQuery(['yellowPawPrintData'], () =>
    getShuffledYellowPawPrintData()
  )

  const { data: pawPrints } = useQuery(['pawPrints'], () => getAllPawPrints())

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
          width: '3710px',
          height: '1800px',
        }}
      >
        {pawPrints &&
          pawPrints.map((pawPrint) => {
            return (
              <PawPrint
                key={pawPrint.id}
                x={pawPrint.x}
                y={pawPrint.y}
                content={`ID: ${pawPrint.id} Type: ${pawPrint.type}Path: ${pawPrint.path} Space: ${pawPrint.space}`}
                player1={player1Position === pawPrint.id ? cat1 : ''}
                player2={player2Position === pawPrint.id ? cat2 : ''}
              />
            )
          })}
      </div>
      <Footer />
    </>
  )
}
