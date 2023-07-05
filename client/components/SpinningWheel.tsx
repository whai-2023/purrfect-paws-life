import '../styles/index.css'
import WheelComponent from 'react-wheel-of-prizes'
import useGameStore from '../gameStore'
import getRandomInt from '../lib/getRandomInt'

import useSound from 'use-sound'
import { useEffect } from 'react'

const SpinningWheel = () => {
  const { players, activePlayer, setTurnStats } = useGameStore()

  const segments = ['1', '2', '3', '4']
  const segColors = ['#3EC1D3', '#FF165D', '#3EC1D3', '#FF165D']

  const onFinished = (winner: string) => {
    const roll = Number(winner)
    const position = players[activePlayer - 1].moveTotal

    const stopSpaces1 = [8, 13, 17, 23, 29]
    const stopSpaces2 = [5, 11, 19]

    let newRoll = 0

    if (position >= 5 && position < 8 && position + roll > 8) {
      newRoll = 8 - position
      // } else if (position >= 10 && position < 13 && position + roll > 13) {
      //   newRoll = 13 - position
      // } else if (position >= 14 && position < 17 && position + roll > 17) {
      //   newRoll = 17 - position
      // } else if (position >= 20 && position < 23 && position + roll > 23) {
      //   newRoll = 23 - position
      // } else if (position >= 26 && position < 29 && position + roll > 29) {
      //   newRoll = 29 - position
      // }
    } else {
      newRoll = roll
    }
    console.log(activePlayer, position)
    setTurnStats(1, newRoll)
  }

  const [play] = useSound('audio/sound-effects/wheel-spin.wav', {
    volume: 0.5,
  })

  const handleClick = () => {
    play()
  }

  useEffect(() => {
    const unsubscribe = useGameStore.subscribe(() => {})

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <div className="wheel" onClick={handleClick}>
      <WheelComponent
        onClick
        segments={segments}
        segColors={segColors}
        winningSegment="won 10"
        onFinished={onFinished}
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
