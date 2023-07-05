import { useState } from 'react'
import creamCat from '/catProfileimage/cat.png'
import whiteCat from '/catProfileimage/whitecat.png'

import useGameStore from '../gameStore'

import { Players } from '../../models/Players'

import '../styles/index.css'

const initialFormData = {
  player1: { name: 'Player 1' },
  player2: { name: 'Player 2' },
}

export default function SplashPageForm() {
  const { setName1, setName2 } = useGameStore()

  const [players, setPlayers] = useState<Players>(initialFormData)

  const handleNameChange = (playerKey: string, name: string) => {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [playerKey]: {
          ...prevPlayers[playerKey],
          name: name,
        },
      }
    })
    console.log('name')
  }

  const handleSubmitPlayer1 = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setName1(players.player1.name)
  }

  const handleSubmitPlayer2 = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setName2(players.player2.name)
  }

  return (
    <div id="profile">
      <div className="flex">
        <div className="item">
          <img className="image" src={creamCat} alt="Cat" />
          <form onSubmit={handleSubmitPlayer1}>
            <input
              className="input"
              type="text"
              value={players.player1.name}
              onChange={(e) => handleNameChange('player1', e.target.value)}
              placeholder="Enter player name"
            />
            <br />
            <button className="addPlayerButton" type="submit">
              Add
            </button>
          </form>
        </div>
        <div className="info"></div>
      </div>
      <div className="flex">
        <div className="item">
          <img className="image" src={whiteCat} alt="Cat" />
          <form onSubmit={handleSubmitPlayer2}>
            <input
              className="input"
              type="text"
              value={players.player2.name}
              onChange={(e) => handleNameChange('player2', e.target.value)}
              placeholder="Enter player name"
            />
            <br />
            <button className="addPlayerButton" type="submit">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
