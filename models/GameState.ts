import { PlayerState } from './PlayerState'

export interface GameState {
  players: PlayerState[]
  activePlayer: number
  turnCount: number
}
