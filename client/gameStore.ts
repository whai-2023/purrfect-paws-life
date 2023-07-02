import { create } from 'zustand'

import { GameState } from '../models/GameState'

type GameStoreState = GameState & {
  setTurnCount: (turnCount: number) => void
}

const initialGameState: GameState = {
  players: [
    {
      id: 1,
      path: 0,
      moveTotal: 0,
      treats: 0,
      owner: 'No owner yet!',
      catTower: 'No Cat Towers yet!',
    },
    {
      id: 2,
      path: 0,
      moveTotal: 0,
      treats: 0,
      owner: 'No owner yet!',
      catTower: 'No Cat Towers yet!',
    },
  ],
  turnCount: 0,
}

const useGameStore = create<GameStoreState>((set) => ({
  ...initialGameState,
  setTurnCount: (turnCount) =>
    set((state) => ({
      ...state,
      turnCount,
    })),
}))

console.log(useGameStore)

export default useGameStore
