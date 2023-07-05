import { Link } from 'react-router-dom'
import Scoreboard from './Scoreboard'
import Confetti from 'react-confetti'
import '../styles/winningpage.css'

export default function WinningPage() {
  return (
    <div>
      <Confetti />
      <div className="confetti">
        <h2>The Winner is Player 1!</h2>
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
