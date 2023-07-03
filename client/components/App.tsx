import ReactAudioPlayer from 'react-audio-player'

import { Outlet } from 'react-router-dom'
function App() {
  return (
    <>
      <section>
        <div className="audioPlayer">
          <ReactAudioPlayer
            // we should either import the audio file url or use the public folder
            // this won't work in prod
            src={'client/public/audio/derp.mp3'}
            autoPlay
            volume={0.4}
            controls
            loop
          />
        </div>
        <Outlet />
      </section>
    </>
  )
}

export default App
