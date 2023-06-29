interface Props {
  x: string
  y: string
  rot: string
  content: string
}

export default function BlueSquare(props: Props) {
  const size = {
    x: '250px',
    y: '250px',
  }

  return (
    <div
      className="game-square"
      style={{
        width: size.x,
        height: size.y,
        left: props.x,
        bottom: props.y,
        transform: `rotate(${props.rot})`,
        backgroundColor: 'blue',
      }}
    >
      <p>{props.content}</p>
    </div>
  )
}
