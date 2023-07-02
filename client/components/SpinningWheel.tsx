import { useEffect } from 'react'
import '../styles/index.css'
import WheelComponent from 'react-wheel-of-prizes'
import useGameStore from '../gameStore'

const SpinningWheel = () => {
  const { turnCount, activePlayer, setTurnStats } = useGameStore()

  const segments = ['1', '2', '3', '4', '5', '6']
  const segColors = [
    '#EE4040',
    '#F0CF50',
    '#815CD1',
    '#3DA5E0',
    '#34A24F',
    '#F9AA1F',
    '#EC3F3F',
    '#FF9000',
  ]

  const onFinished = (winner: string) => {
    setTurnStats(1, Number(winner))
  }

  useEffect(() => {
    console.log(turnCount, activePlayer)
  }, [turnCount])

  return (
    <div className="wheel">
      <WheelComponent
        segments={segments}
        segColors={segColors}
        winningSegment="won 10"
        onFinished={onFinished}
        primaryColor="black"
        contrastColor="white"
        buttonText="SPIN"
        isOnlyOnce={false}
        size={290}
        upDuration={257}
        downDuration={300}
        fontFamily="Arial"
      />
    </div>
  )
}

export default SpinningWheel
