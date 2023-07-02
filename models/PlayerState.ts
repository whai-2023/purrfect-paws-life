import { Owner } from './Owner'
import { CatTower } from './CatTower'

export type PlayerState = {
  id: number
  path: number
  moveTotal: number
  treats: number
  owner: Owner[] | string
  catTower: CatTower[] | string
}
