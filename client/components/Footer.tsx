import { getOwnerById } from '../apis/index'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ChangeEvent, FormEvent, useState } from 'react'
import SpinningWheel from './SpinningWheel'
import useGameStore from '../gameStore'
import { Popup } from 'semantic-ui-react'

export default function Footer() {
  const { players, activePlayer } = useGameStore()

  // const [isHovering, setIsHovering] = useState(false)

  // const handleMouseOverCatTower = () => {
  //   setIsHovering(true)

  // }

  // const handleMouseOutCatTower = () => {
  //   setIsHovering(false)
  // }

  // const handleMouseOverOwner = () => {
  //   setIsHovering(true)
  // }

  // const handleMouseOutOwner = () => {
  //   setIsHovering(false)
  // }

  const PopupCatTowers = () => (
    <Popup
      content="Plastic $10, Bronze $15"
      trigger={
        <img
          className="catTowerIcon"
          src="client/public/catImage/cat-tower-icon.png"
        />
      }
    />
  )

  const PopupOwners = () => (
    <Popup
      content="Owner: Aiden $500"
      trigger={
        <img
          className="ownerIcon"
          src="client/public/catImage/owner-icon.png"
        />
      }
    />
  )

  return (
    <div className="footer">
      <SpinningWheel />
      <div className="playerBox">
        <h2>{`Player: ${players[activePlayer - 1].name}`}</h2>
        <h2>{`Treats: ${players[activePlayer - 1].treats}`}</h2>
        <div
          className="icons"
          // onMouseOver={handleMouseOverCatTower}
          // onMouseOut={handleMouseOutCatTower}
        >
          {Array.isArray(players[activePlayer - 1].catTower)
            ? players[activePlayer - 1].catTower.map((el) => {
                return (
                  <img
                    className="catTowerIcon"
                    src="client/public/catImage/cat-tower-icon.png"
                  />
                )
              })
            : ''}
        </div>
        <div
          className="icons"
          // onMouseOver={handleMouseOverOwner}
          // onMouseOut={handleMouseOutOwner}
        >
          {Array.isArray(players[activePlayer - 1].catTower)
            ? players[activePlayer - 1].owner.map((el) => {
                return (
                  <img
                    className="ownerIcon"
                    src="client/public/catImage/owner-icon.png"
                  />
                )
              })
            : ''}
        </div>
      </div>
    </div>
  )
}
