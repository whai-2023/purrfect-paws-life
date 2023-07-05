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
  setName1: (name1: string) => void
  setName2: (name2: string) => void
}

const initialGameState: GameState = {
  players: [
    {
      id: 1,
      name: 'Aiden',
      path: 1,
      moveTotal: 6,
      treats: 0,
      owner: [],
      catTower: [],
      choices: { school: 'yes', marriage: 'yes', kittens: 'yes' },
    },
    {
      id: 2,
      name: 'Sarah',
      path: 1,
      moveTotal: 6,
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
    setName1: (name1) => {
      set((state) => {
        state.players[0].name = name1
      })
    },
    setName2: (name2) => {
      set((state) => {
        state.players[1].name = name2
      })
    },
  }))
)

export default useGameStore
