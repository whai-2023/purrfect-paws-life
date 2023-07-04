import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import SplashPageForm from './SplashPageForm'
import '../styles/index.css'

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
    <div>
      <LandingCats />
      <div className="titleText">
        <h1 className="title1" style={{ color: textColour }}>
          Purrfect Paws Life
        </h1>
        <Link to="/game" style={{ textDecoration: 'none' }}>
          <h2 className="title2" style={{ color: textColour }}>
            Start Game
          </h2>
        </Link>
        <div className="splashForms">
          <SplashPageForm />
        </div>
      </div>
    </div>
  )
}
