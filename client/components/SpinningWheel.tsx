import '../styles/index.css'
import WheelComponent from 'react-wheel-of-prizes'
import useGameStore from '../gameStore'
import getRandomInt from '../lib/getRandomInt'

import useSound from 'use-sound'

const SpinningWheel = () => {
  const { setTurnStats } = useGameStore()

  const segments = ['1', '2', '3', '4']
  const segColors = ['#3EC1D3', '#FF165D', '#3EC1D3', '#FF165D']

  const onFinished = (winner: string) => {
    setTurnStats(1, Number(winner))
  }

  const [play] = useSound('client/public/audio/sound-effects/wheel-spin.wav', {
    volume: 0.5,
  })

  const handleClick = () => {
    return play()
  }

  return (
    <div className="wheel" onClick={handleClick}>
      <WheelComponent
        onClick
        segments={segments}
        segColors={segColors}
        winningSegment="won 10"
        onFinished={(winner: string) => onFinished(winner)}
        primaryColor="black"
        contrastColor="white"
        buttonText="SPIN"
        isOnlyOnce={false}
        size={150}
        upDuration={getRandomInt(400, 600)}
        downDuration={getRandomInt(600, 800)}
        fontFamily="Arial"
      />
    </div>
  )
}

export default SpinningWheel
