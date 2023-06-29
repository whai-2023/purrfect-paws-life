import connection from './connection'

export async function getAllOwners(db = connection) {
  return db('owners').select('*')
}

export async function getOwnerById(id: number, db = connection) {
  return db('owners').where({ id }).first()
}

export async function getCatTowerById(id: number, db = connection) {
  return db('cat-towers').where({ id }).first()
}
export async function getAllCatTowers(db = connection) {
  return db('cat-towers').select('*')
}

export async function getYellowSquareById(id: number, db = connection) {
  return db('yellow-squares').where({ id }).first()
}

export async function getChoiceById(id: number, db = connection) {
  const choices = await db('choices').where({ id }).select('choice1', 'choice2')
  return choices
}
