import { Owner } from './Owner'
import { CatTower } from './CatTower'
import { Choices } from './Choices'

export interface PlayerState {
  id: number
  name: string
  path: number
  moveTotal: number
  treats: number
  owner: Owner[]
  catTower: CatTower[]
  choices: Choices
}
