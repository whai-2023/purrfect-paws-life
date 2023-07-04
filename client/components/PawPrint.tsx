import YellowPawPrint from '../../models/YellowPawPrint'
import PopUp from './PopUp'

interface Props {
  x: number
  y: number
  debug: string
  player1: string
  player2: string
}

export default function PawPrint(props: Props) {
  const size = {
    x: '100px',
    y: '100px',
  }

  return (
    <div
      className="game-square"
      style={{
        width: size.x,
        height: size.y,
        left: `${props.x}px`,
        bottom: `${props.y}px`,
      }}
    >
      <p>{props.debug}</p>
      {props.player1 ? 'Sarah' : ''}
      <img className="characterModel" src={props.player1} alt="" />
      {props.player2 ? 'Aiden' : ''}
      <img className="characterModel" src={props.player2} alt="" />
    </div>
  )
}
