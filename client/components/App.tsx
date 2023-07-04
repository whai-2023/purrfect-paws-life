import ReactAudioPlayer from 'react-audio-player'

import { Outlet } from 'react-router-dom'
function App() {
  return (
    <main>
      <div className="audioPlayer">
        <ReactAudioPlayer
          src={'client/public/audio/silly_chicken.mp3'}
          autoPlay
          volume={0.3}
          loop
          //TO DO: Remove controls and try to make the audioPlayer play automatically
          controls
        />
      </div>
      <Outlet />
    </main>
  )
}

export default App
