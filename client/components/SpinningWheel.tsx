import '../styles/index.css'
import WheelComponent from 'react-wheel-of-prizes'
import useGameStore from '../gameStore'

const SpinningWheel = () => {
  const { setTurnStats } = useGameStore()

  const segments = ['1', '2', '3', '4']
  const segColors = ['#3EC1D3', '#FF165D', '#3EC1D3', '#FF165D']

  const onFinished = (winner: string) => {
    setTurnStats(1, Number(winner))
  }

  return (
    <div className="wheel">
      <WheelComponent
        segments={segments}
        segColors={segColors}
        winningSegment="won 10"
        onFinished={(winner: string) => onFinished(winner)}
        primaryColor="black"
        contrastColor="white"
        buttonText="SPIN"
        isOnlyOnce={false}
        size={150}
        upDuration={getRandomInt(200, 400)}
        downDuration={getRandomInt(400, 600)}
        fontFamily="Arial"
      />
    </div>
  )
}

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export default SpinningWheel
