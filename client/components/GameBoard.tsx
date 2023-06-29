import YellowSquare from './YellowSquare'
import RedSquare from './RedSquare'
import PurpleSquare from './PurpleSquare'
import GreenSquare from './GreenSquare'
import BlueSquare from './BlueSquare'
import { useQuery } from '@tanstack/react-query'
import { getAllYellowSquares, getYellowSquareById } from '../apis'
import { redData, purpleData, greenData, blueData } from '../lib/lib'

export default function GameBoard() {
  const { data: yellowSquares } = useQuery(['yellowSquare'], () =>
    getAllYellowSquares()
  )

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
            content={`${el.id} ${el.content}`}
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
            content={`${el.id} ${el.content}`}
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
            content={`${el.id} ${el.content}`}
          />
        )
      })}
      {yellowSquares &&
        yellowSquares.map((el) => {
          return (
            <YellowSquare
              key={el.id}
              x={el.x}
              y={el.y}
              rot={el.rot}
              content={`${el.id} ${el.input}`}
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
            content={`${el.id} ${el.content}`}
          />
        )
      })}
    </div>
  )
}
