import { getOwnerById } from '../apis/apiClient/footer'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ChangeEvent, FormEvent, useState } from 'react'
import SpinningWheel from './SpinningWheel'

export default function Footer() {
  const newLocal = 'playerBox'
  return (
    <div className="footer">
      <SpinningWheel />
      <div className="playerBox">
        <h2>Player: Aiden</h2>
        <h2>Treats: -3200</h2>
        <div className="icons">
          <img
            className="houseIcon"
            src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
          />
          <img
            className="houseIcon"
            src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
          />
        </div>
      </div>
    </div>
  )
}
