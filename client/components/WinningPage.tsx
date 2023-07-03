import { useEffect, useState } from 'react'

export default function WinningPage() {
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    setShowMessage(true)
  }, [])

  return (
    <div>
      {showMessage && (
        <div>
          <h1>Congratulations! Player 1 has won the game!</h1>
        </div>
      )}
    </div>
  )
}
