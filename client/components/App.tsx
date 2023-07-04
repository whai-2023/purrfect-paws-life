// import ReactAudioPlayer from 'react-audio-player'

import { Outlet } from 'react-router-dom'
import WinningPage from './WinningPage'
function App() {
  return (
    <main>
      <WinningPage />
      {/* <div className="audioPlayer">
          <ReactAudioPlayer
            src={'client/public/audio/derp.mp3'}
            autoPlay
            volume={0.4}
            controls
            loop
          />
        </div> */}
      {/* <Outlet /> */}
    </main>
  )
}

export default App
