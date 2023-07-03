import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import LandingCats from './LandingCats'

const getRandomColor = () =>
  `#${Math.floor(Math.random() * 0x1000000)
    .toString(16)
    .padStart(6, '0')}`

export default function Landing() {
  useEffect(() => {
    const timer = setInterval(() => {
      setTextColor(getRandomColor())
    }, 1500)
    return () => clearInterval(timer)
  }, [])

  // we should use an initialiser function for useState
  // useState(() => getRandomColor()) or useState(getRandomColor)
  // this is because getRandomColor is a function and will be called every time the component renders
  // even though the value won't get used past the first render
  const [textColour, setTextColor] = useState(getRandomColor())

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        paddingLeft: 235,
        fontSize: 100,
      }}
    >
      <LandingCats />
      <div>
        <Link to="/game" style={{ textDecoration: 'none' }}>
          <h1 style={{ color: textColour, backgroundColor: 'white' }}>
            Purrfect Paws Life
          </h1>
        </Link>
      </div>
    </div>
  )
}
