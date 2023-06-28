import { useState, useEffect } from 'react'
import catImage from '../public/catImage/Cat-icon.png'

export default function LandingCats(): JSX.Element {
  const [showSplash, setShowSplash] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setShowSplash(true)
    }, 500)

    return () => {
      clearInterval(timer)
    }
  }, [])

  if (!showSplash) {
    return <div style={{ backgroundColor: 'white' }} />
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        animation: 'flashing 10s infinite',
        backgroundImage: `url(${catImage})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '10%',
      }}
    />
  )
}
