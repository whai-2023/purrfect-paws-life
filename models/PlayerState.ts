import { Owner } from './Owner'
import { CatTower } from './CatTower'

export type PlayerState = {
  id: number
  name: string
  path: number
  moveTotal: number
  treats: number
  owner: Owner[]
  catTower: CatTower[]
}
