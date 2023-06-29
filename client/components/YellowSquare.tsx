interface Props {
  x: number
  y: number
  rot: number
  content: string
}

export default function YellowSquare(props: Props) {
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
        transform: `rotate(${props.rot}deg)`,
        backgroundColor: 'yellow',
      }}
    >
      <p>{props.content}</p>
    </div>
  )
}
