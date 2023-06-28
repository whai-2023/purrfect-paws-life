interface Props {
  x: string
  y: string
  rot: string
  content: string
}

export default function RedSquare(props: Props) {
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
        left: props.x,
        bottom: props.y,
        transform: `rotate(${props.rot})`,
        backgroundColor: 'red',
      }}
    >
      <p>{props.content}</p>
    </div>
  )
}
