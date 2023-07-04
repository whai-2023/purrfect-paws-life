import PawPrint from './PawPrint'
import Footer from './Footer'
import PopUp from './PopUp'
import PopUpChoice from './PopUpChoice'
import PopUpChooseOwner from './PopUpChooseOwner'
import PopUpChooseCatTower from './PopUpChooseCatTower'

import useGameStore from '../gameStore'

import { useQuery } from '@tanstack/react-query'
import { useState, useEffect } from 'react'

import { getAllCatTowers, getAllOwners, getAllPawPrints } from '../apis'

import getShuffledYellowPawPrintData from '../lib/shufflePawPrintData'
import getRandomInt from '../lib/getRandomInt'

import { choiceData } from '../lib/choiceData'

import { Choices } from '../../models/Choices'

import cat1 from '../public/catImage/player1alt.png'
import cat2 from '../public/catImage/player2alt.png'

export default function GameBoard() {
  // Zustand states accessed from GameStore / GameState
  const { activePlayer, players, setTreats } = useGameStore()

  // Local states for managing player position
  const [player1Space, setPlayer1Space] = useState(1)
  const [player2Space, setPlayer2Space] = useState(1)

  const [player1Path, setPlayer1Path] = useState(1)
  const [player2Path, setPlayer2Path] = useState(1)

  // React-Query states accessed from db via api
  const { data: yellowPawPrintData } = useQuery(['yellowPawPrintData'], () =>
    getShuffledYellowPawPrintData()
  )
  const { data: pawPrints } = useQuery(['pawPrints'], () => getAllPawPrints())
  const { data: ownerData } = useQuery(['ownerData'], () => getAllOwners())
  const { data: catTowerData } = useQuery(['catTowerData'], () =>
    getAllCatTowers()
  )

  // UseEffect for updating GameState
  useEffect(() => {
    function addYellowTreats() {
      if (yellowPawPrintData) {
        activePlayer === 1
          ? setTreats(yellowPawPrintData![player1Space].value)
          : setTreats(yellowPawPrintData![player2Space].value)
      }
    }
    addYellowTreats()

    setPlayer1Path(players[0].path)
    setPlayer2Path(players[1].path)
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
          pawPrints.map((el, i) => {
            return (
              <>
                {/* renders pop ups for yellow 'actions' */}
                {el.type === 'Yellow' &&
                activePlayer === 1 &&
                player1Space === el.space &&
                player1Path === el.path ? (
                  <PopUp key={i} content={yellowPawPrintData![el.space]} />
                ) : null}

                {el.type === 'Yellow' &&
                activePlayer === 2 &&
                player2Space === el.space &&
                player2Path === el.path ? (
                  <PopUp key={i} content={yellowPawPrintData![el.space]} />
                ) : null}

                {/* renders pop ups for red 'choices' */}
                {el.type.includes('Choice') &&
                activePlayer === 1 &&
                player1Space === el.space &&
                player1Path === el.path ? (
                  <PopUpChoice
                    key={i}
                    choiceType={el.type}
                    content={`${players[activePlayer - 1].name}${
                      choiceData[el.type.split(' ')[1] as keyof Choices].content
                    }`}
                    button1={`${
                      choiceData[el.type.split(' ')[1] as keyof Choices].button1
                    }`}
                    button2={`${
                      choiceData[el.type.split(' ')[1] as keyof Choices].button2
                    }`}
                  />
                ) : null}

                {el.type.includes('Choice') &&
                activePlayer === 2 &&
                player2Space === el.space &&
                player2Path === el.path ? (
                  <PopUpChoice
                    key={i}
                    choiceType={el.type}
                    content={`${players[activePlayer - 1].name}${
                      choiceData[el.type.split(' ')[1] as keyof Choices].content
                    }`}
                    button1={`${
                      choiceData[el.type.split(' ')[1] as keyof Choices].button1
                    }`}
                    button2={`${
                      choiceData[el.type.split(' ')[1] as keyof Choices].button2
                    }`}
                  />
                ) : null}

                {/* renders pop ups for choosing cat-tower */}
                {el.type.includes('Choose cat tower') &&
                activePlayer === 1 &&
                player1Space === el.space &&
                player1Path === el.path ? (
                  <PopUpChooseCatTower
                    key={i}
                    catTowers={[
                      catTowerData![getRandomInt(0, 4)],
                      catTowerData![getRandomInt(5, 9)],
                    ]}
                  />
                ) : null}

                {el.type.includes('Choose cat towner') &&
                activePlayer === 2 &&
                player2Space === el.space &&
                player2Path === el.path ? (
                  <PopUpChooseCatTower
                    key={i}
                    catTowers={[
                      catTowerData![getRandomInt(0, 4)],
                      catTowerData![getRandomInt(5, 9)],
                    ]}
                  />
                ) : null}

                {/* renders pop ups for choosing owner */}
                {el.type.includes('Choose owner') &&
                activePlayer === 1 &&
                player1Space === el.space &&
                player1Path === el.path ? (
                  <PopUpChooseOwner
                    key={i}
                    owners={[
                      ownerData![getRandomInt(0, 1)],
                      ownerData![getRandomInt(2, 5)],
                    ]}
                  />
                ) : null}

                {el.type.includes('Choose owner') &&
                activePlayer === 2 &&
                player2Space === el.space &&
                player2Path === el.path ? (
                  <PopUpChooseOwner
                    key={i}
                    owners={[
                      ownerData![getRandomInt(0, 1)],
                      ownerData![getRandomInt(2, 5)],
                    ]}
                  />
                ) : null}

                {/* renders all pawprints */}
                <PawPrint
                  key={i}
                  x={el.x}
                  y={el.y}
                  debug={`ID: ${el.id} Type: ${el.type}Path: ${
                    el.path
                  } Space: ${el.space} Content${
                    el.type === 'Yellow'
                      ? yellowPawPrintData![el.space].input
                      : null
                  }`}
                  // conditionally renders player on pawprint
                  player1={
                    player1Space === el.space && player1Path === el.path
                      ? cat1
                      : ''
                  }
                  player2={
                    player2Space === el.space && player2Path === el.path
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
