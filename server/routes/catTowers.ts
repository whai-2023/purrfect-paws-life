import express from 'express'
import { getAllCatTowers, getCatTowerById } from '../db/db'

const router = express.Router()

//GET /api/v1/cat-towers
router.get('/', async (req, res) => {
  try {
    const catTowers = await getAllCatTowers()
    res.status(200).json(catTowers)
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ error: 'There was an error trying to get all cat tower data' })
  }
})

//GET /api/v1/cat-towers
router.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const catTower = await getCatTowerById(id)
    res.status(200).json(catTower)
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ error: 'There was an error trying to get the cat tower data' })
  }
})

export default router
