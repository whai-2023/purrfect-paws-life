import { useState } from 'react'
import SpinningWheel from './SpinningWheel'
import useGameStore from '../gameStore'

export default function Footer() {
  const { players, activePlayer } = useGameStore()

  const [isShown, setIsShown] = useState(false)

  return (
    <div className="footer">
      <SpinningWheel />
      <div className="playerBox">
        <h2>{`Player ${activePlayer}: ${players[activePlayer - 1].name}`}</h2>
        <h2>{`Treats: ${players[activePlayer - 1].treats}`}</h2>
        <div className="icons">
          {Array.isArray(players[activePlayer - 1].catTower)
            ? players[activePlayer - 1].catTower.map((el) => {
                return (
                  <>
                    <img
                      onMouseEnter={() => setIsShown(true)}
                      onMouseLeave={() => setIsShown(false)}
                      className="catTowerIcon"
                      src="catImage/cat-tower-icon.png"
                    />
                    {isShown && (
                      <div className="footerPopup">{`${el.material} $${el.value}`}</div> // HARD CODED FOR NOW
                    )}
                  </>
                )
              })
            : ''}
        </div>
        <div className="icons">
          {Array.isArray(players[activePlayer - 1].owner)
            ? players[activePlayer - 1].owner.map((el, i) => {
                return (
                  <div key={i + activePlayer}>
                    <img
                      onMouseEnter={() => setIsShown(true)}
                      onMouseLeave={() => setIsShown(false)}
                      className="ownerIcon"
                      src="catImage/owner-icon.png"
                    />
                    {isShown && (
                      <div className="footerPopup">{`${el.name} $${el.allowance}`}</div> // HARD CODED FOR NOW
                    )}
                  </div>
                )
              })
            : ''}
        </div>
      </div>
    </div>
  )
}
