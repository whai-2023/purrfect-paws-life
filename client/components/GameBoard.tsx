import OrangeSquare from './OrangeSquare'
import RedSquare from './RedSquare'
import PurpleSquare from './PurpleSquare'
import GreenSquare from './GreenSquare'
import BlueSquare from './BlueSquare'
import {
  orangeData,
  redData,
  purpleData,
  greenData,
  blueData,
} from '../lib/lib'

export default function GameBoard() {
  const size = {
    x: '4000px',
    y: '800px',
  }

  return (
    <div
      className="game-board"
      style={{ width: size.x, height: size.y, backgroundColor: 'lightblue' }}
    >
      {purpleData.map((el) => {
        return (
          <PurpleSquare
            key={el.id}
            x={el.x}
            y={el.y}
            rot={el.rot}
            content={el.content}
          />
        )
      })}
      {blueData.map((el) => {
        return (
          <BlueSquare
            key={el.id}
            x={el.x}
            y={el.y}
            rot={el.rot}
            content={el.content}
          />
        )
      })}
      {redData.map((el) => {
        return (
          <RedSquare
            key={el.id}
            x={el.x}
            y={el.y}
            rot={el.rot}
            content={el.content}
          />
        )
      })}
      {orangeData.map((el) => {
        return (
          <OrangeSquare
            key={el.id}
            x={el.x}
            y={el.y}
            rot={el.rot}
            content={el.content}
          />
        )
      })}
      {greenData.map((el) => {
        return (
          <GreenSquare
            key={el.id}
            x={el.x}
            y={el.y}
            rot={el.rot}
            content={el.content}
          />
        )
      })}
    </div>
  )
}