import { PlayerState } from './PlayerState'

export type GameState = {
  players: PlayerState[]
  activePlayer: number
  turnCount: number
}
