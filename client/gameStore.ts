import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { GameState } from '../models/GameState'

type Actions = {
  setTurnStats: (turnIncrement: number, moveAmount: number) => void
  setTreats: (treats: number) => void
}

const initialGameState: GameState = {
  players: [
    {
      id: 1,
      name: 'Aiden',
      path: 0,
      moveTotal: 1,
      treats: 0,
      owner: [],
      catTower: [],
    },
    {
      id: 2,
      name: 'Sarah',
      path: 0,
      moveTotal: 1,
      treats: 0,
      owner: [],
      catTower: [],
    },
  ],
  activePlayer: 1,
  turnCount: 0,
}

const useGameStore = create(
  immer<GameState & Actions>((set) => ({
    ...initialGameState,
    setTurnStats: (turnIncrement, moveAmount) =>
      set((state) => {
        state.activePlayer === 1
          ? (state.players[1].moveTotal += moveAmount)
          : (state.players[0].moveTotal += moveAmount)
        state.turnCount += turnIncrement
        state.activePlayer = (state.turnCount % 2) + 1
      }),
    setTreats: (treats) =>
      set((state) => {
        state.activePlayer === 1
          ? (state.players[1].treats += treats)
          : (state.players[0].treats += treats)
      }),
  }))
)

export default useGameStore
