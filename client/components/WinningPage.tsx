import { Link } from 'react-router-dom'
import Scoreboard from './Scoreboard'
import Confetti from 'react-confetti'
import '../styles/winningpage.css'

import useGameStore from '../gameStore'

export default function WinningPage() {
  const { players } = useGameStore()
  return (
    <div>
      <Confetti />
      <div className="winnertitle">
        <h2>The Winner is {players[0].name}!</h2>
      </div>
      <div>
        <Scoreboard />
      </div>
      <Link to={'/'}>
        <div className="buttonstyle">
          <button className="button">Play Again!</button>
        </div>
      </Link>
    </div>
  )
}
