// index.css implies to me this is the _main_ css file
// which we should import in index.tsx
// if it contains styles relevant to only this component
// then we should rename it
import '../styles/index.css'
import WheelComponent from 'react-wheel-of-prizes'
import useGameStore from '../gameStore'

const SpinningWheel = () => {
  const { setTurnStats } = useGameStore()

  const segments = ['1', '2', '3', '4']
  // oh dear, I see that they use segColors
  // but segmentColors is a nicer name
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
        // since we're just passing the variable through
        // we can do onFinished={onFinished}
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

// nice util -- this is the type of function that could be eventually used in other places
// (especially in a board game)
// consider moving it to its own/a shared file
function getRandomInt(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export default SpinningWheel
