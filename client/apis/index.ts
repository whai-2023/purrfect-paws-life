import request from 'superagent'
import YellowSquare from '../../models/YellowSquare'
import PawPrint from '../../models/PawPrint'
import YellowPawPrint from '../../models/YellowPawPrint'
import { Owner } from '../../models/Owner'
import { CatTower } from '../../models/CatTower'

export function getAllYellowSquares(): Promise<YellowSquare[]> {
  return request.get(`/api/v1/yellow-squares`).then((res) => res.body)
}

export function getAllPawPrints(): Promise<PawPrint[]> {
  return request.get(`/api/v1/paw-prints`).then((res) => res.body)
}

export function getAllYellowPawPrints(): Promise<YellowPawPrint[]> {
  return request.get(`/api/v1/yellow-paw-prints`).then((res) => res.body)
}

export function getOwnerById(id: number) {
  return request.get(`/api/v1/owners/${id}`)
}

export function getAllOwners(): Promise<Owner[]> {
  return request.get(`/api/v1/owners`).then((res) => res.body)
}

export function getChoiceById(id: number) {
  return request.get(`/api/v1/choices/${id}`)
}

export function getCatTowerById(id: number) {
  return request.get(`/api/v1/cat-towers/${id}`)
}

export function getAllCatTowers(): Promise<CatTower[]> {
  return request.get(`/api/v1/cat-towers`).then((res) => res.body)
}
