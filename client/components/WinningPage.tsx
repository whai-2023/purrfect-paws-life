import { Link } from 'react-router-dom'
import Scoreboard from './Scoreboard'
import Confetti from 'react-confetti'
import '../styles/winningpage.css'
import ReactAudioPlayer from 'react-audio-player'

export default function WinningPage() {
  return (
    <div>
      {/* <div className="audioPlayer">
        <ReactAudioPlayer
          src={'/audio/winning-page-music'}
          autoPlay
          volume={0.3}
          loop
          //TO DO: Remove controls and try to make the audioPlayer play automatically
          controls
        /> */}
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
    // </div>
  )
}
