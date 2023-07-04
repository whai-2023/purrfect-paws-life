import { getOwnerById } from '../apis/index'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ChangeEvent, FormEvent, useState } from 'react'
import SpinningWheel from './SpinningWheel'
import useGameStore from '../gameStore'

export default function Footer() {
  const { players, activePlayer } = useGameStore()

  const [isShown, setIsShown] = useState(false)

  return (
    <div className="footer">
      <SpinningWheel />
      <div className="playerBox">
        <h2>{`Player: ${players[activePlayer - 1].name}`}</h2>
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
                      src="client/public/catImage/cat-tower-icon.png"
                    />
                    {isShown && (
                      <div className="footerPopup">Plastic $10</div> // HARD CODED FOR NOW
                    )}
                  </>
                )
              })
            : ''}
        </div>
        <div className="icons">
          {Array.isArray(players[activePlayer - 1].catTower)
            ? players[activePlayer - 1].owner.map((el) => {
                return (
                  <>
                    <img
                      onMouseEnter={() => setIsShown(true)}
                      onMouseLeave={() => setIsShown(false)}
                      className="ownerIcon"
                      src="client/public/catImage/owner-icon.png"
                    />
                    {isShown && (
                      <div className="footerPopup">Aiden $500</div> // HARD CODED FOR NOW
                    )}
                  </>
                )
              })
            : ''}
        </div>
      </div>
    </div>
  )
}
