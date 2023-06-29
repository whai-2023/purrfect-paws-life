import connection from './connection'

export async function getAllOwners(db = connection) {
  return db('owners').select('*')
}
export async function getOwnerById(id: number, db = connection) {
  return db('owners').where('id', id).first()
}

export async function getCatTowerById(id: number, db = connection) {
  return db('cat-towers').where('id', id).first()
}
export async function getAllCatTowers(db = connection) {
  return db('cat-towers').select('*')
}

export async function getYellowSquareById(id: number, db = connection) {
  return db('yellow-square').where({ id }).first()
}

export async function makeChoices(id = Number, db = connection) {
  const choices = await db('choices')
    .where('id', id)
    .select('choice1', 'choice2')
  return choices
}
