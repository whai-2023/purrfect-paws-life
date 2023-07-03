import { getOwnerById } from '../apis/index'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ChangeEvent, FormEvent, useState } from 'react'
import SpinningWheel from './SpinningWheel'
import useGameStore from '../gameStore'

export default function Footer() {
  const { players, activePlayer } = useGameStore()

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
                  <img
                    className="houseIcon"
                    src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
                  />
                )
              })
            : ''}
        </div>
        <div className="icons">
          {Array.isArray(players[activePlayer - 1].catTower)
            ? players[activePlayer - 1].owner.map((el) => {
                return (
                  <img
                    className="ownerIcon"
                    src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
                  />
                )
              })
            : ''}
        </div>
      </div>
    </div>
  )
}
