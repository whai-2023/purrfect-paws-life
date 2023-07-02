import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { GameState } from '../models/GameState'

type Actions = {
  setTurnStats: (turnIncrement: number, moveAmount: number) => void
}

const initialGameState: GameState = {
  players: [
    {
      id: 1,
      path: 0,
      moveTotal: 1,
      treats: 0,
      owner: 'No owner yet!',
      catTower: 'No Cat Towers yet!',
    },
    {
      id: 2,
      path: 0,
      moveTotal: 1,
      treats: 0,
      owner: 'No owner yet!',
      catTower: 'No Cat Towers yet!',
    },
  ],
  activePlayer: 1,
  turnCount: 0,
}

const useGameStore = create(
  immer<GameState & Actions>((set) => ({
    ...initialGameState,
    count: 0,
    setTurnStats: (turnIncrement, moveAmount) =>
      set((state) => {
        state.turnCount += turnIncrement
        state.activePlayer = (state.turnCount % 2) + 1
        state.activePlayer === 1
          ? (state.players[0].moveTotal += moveAmount)
          : (state.players[1].moveTotal += moveAmount)
      }),
  }))
)

export default useGameStore
