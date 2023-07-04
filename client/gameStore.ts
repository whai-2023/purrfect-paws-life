import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { GameState } from '../models/GameState'
import { PlayerState } from '../models/PlayerState'

type Actions = {
  setTurnStats: (turnIncrement: number, moveAmount: number) => void
  setTreats: (treats: number) => void
  setPath: (path: number) => void
  setChoice: (type: keyof PlayerState['choices'], choice: string) => void
}

const initialGameState: GameState = {
  players: [
    {
      id: 1,
      name: 'Aiden',
      path: 1,
      moveTotal: 1,
      treats: 0,
      owner: [],
      catTower: [],
      choices: { school: 'yes', marriage: 'yes', kittens: 'yes' },
    },
    {
      id: 2,
      name: 'Sarah',
      path: 1,
      moveTotal: 1,
      treats: 0,
      owner: [],
      catTower: [],
      choices: { school: 'yes', marriage: 'yes', kittens: 'yes' },
    },
  ],
  activePlayer: 1,
  turnCount: 0,
}

const useGameStore = create(
  immer<GameState & Actions>((set) => ({
    ...initialGameState,
    setTurnStats: (turnIncrement, moveAmount) => {
      set((state) => {
        state.activePlayer === 1
          ? (state.players[0].moveTotal += moveAmount)
          : (state.players[1].moveTotal += moveAmount)
        state.turnCount += turnIncrement
        state.activePlayer = (state.turnCount % 2) + 1
      })
    },
    setTreats: (treats) => {
      set((state) => {
        state.activePlayer === 1
          ? (state.players[0].treats += treats)
          : (state.players[1].treats += treats)
      })
    },
    setPath: (path) => {
      set((state) => {
        state.activePlayer === 1
          ? (state.players[0].path = path)
          : (state.players[1].path = path)
      })
    },
    setChoice: (type, choice) => {
      set((state) => {
        state.activePlayer === 1
          ? (state.players[0].choices[type] = choice)
          : (state.players[1].choices[type] = choice)
      })
    },
  }))
)

export default useGameStore
