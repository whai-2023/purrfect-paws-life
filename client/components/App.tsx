import ReactAudioPlayer from 'react-audio-player'
import { Outlet, useLocation } from 'react-router-dom'

function App() {
  const location = useLocation()

  let audioSrc = ''

  if (location.pathname === '/scoreboard') {
    audioSrc = '/audio/silly_chicken.mp3'
  } else if (location.pathname === '/game') {
    audioSrc = '/audio/silly_chicken.mp3'
  } else {
    audioSrc = '/audio/silly_chicken.mp3'
  }

  return (
    <main>
      <div className="audioPlayer">
        <ReactAudioPlayer src={audioSrc} autoPlay volume={0.3} loop controls />
      </div>
      <Outlet />
    </main>
  )
}

export default App
