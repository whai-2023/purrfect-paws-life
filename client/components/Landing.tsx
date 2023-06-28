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
        <Link to="/whatever" style={{ textDecoration: 'none' }}>
          <h1 style={{ color: textColour, backgroundColor: 'white' }}>
            Purrfect Paws Life
          </h1>
        </Link>
      </div>
    </div>
  )
}
