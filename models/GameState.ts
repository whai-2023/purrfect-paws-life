import { PlayerState } from './PlayerState'

export type GameState = {
  players: PlayerState[]
  turnCount: number
}
