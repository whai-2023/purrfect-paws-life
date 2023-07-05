import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { GameState } from '../models/GameState'
import { PlayerState } from '../models/PlayerState'
import { CatTower } from '../models/CatTower'
import { Owner } from '../models/Owner'

type Actions = {
  setTurnStats: (turnIncrement: number, moveAmount: number) => void
  setTreats: (treats: number) => void
  setPath: (path: number) => void
  setChoice: (type: keyof PlayerState['choices'], choice: string) => void
  setCatTower: (catTower: CatTower) => void
  setOwner: (owner: Owner) => void
}

const initialGameState: GameState = {
  players: [
    {
      id: 1,
      name: 'Aiden',
      path: 1,
      moveTotal: 8,
      treats: 0,
      owner: [{ id: 1, name: 'Sarah', allowance: 143092, tax: -1 }],
      catTower: [{ id: 1, material: 'carboard', value: 2 }],
      choices: { school: 'yes', marriage: 'yes', kittens: 'yes' },
    },
    {
      id: 2,
      name: 'Sarah',
      path: 1,
      moveTotal: 8,
      treats: 0,
      owner: [{ id: 3, name: 'Mathias', allowance: 10, tax: -5 }],
      catTower: [{ id: 5, material: 'plastic', value: 10 }],
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
    setCatTower: (catTower) => {
      set((state) => {
        state.activePlayer === 1
          ? state.players[0].catTower.push(catTower)
          : state.players[1].catTower.push(catTower)
      })
    },
    setOwner: (owner) => {
      set((state) => {
        state.activePlayer === 1
          ? state.players[0].owner.push(owner)
          : state.players[1].owner.push(owner)
      })
    },
  }))
)

export default useGameStore
