import request from 'superagent'

export function getYellowSquareById(id: number) {
  return request.get(`/api/v1/yellow-squares/${id}`)
}

export function getOwnerById(id: number) {
  return request.get(`/api/v1/owners/${id}`)
}

export function getAllOwners() {
  return request.get(`/api/v1/owners`)
}

export function getChoiceById(id: number) {
  return request.get(`/api/v1/choices/${id}`)
}

export function getCatTowerById(id: number) {
  return request.get(`/api/v1/cat-towers/${id}`)
}

export function getAllCatTowers() {
  return request.get(`/api/v1/cat-towers`)
}
