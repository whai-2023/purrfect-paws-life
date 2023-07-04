import express from 'express'
import { getAllYellowSquares } from '../db/db'

const router = express.Router()

//GET /api/v1/yellow-squares
router.get('/', async (req, res) => {
  try {
    const yellowSquares = await getAllYellowSquares()
    res.status(200).json(yellowSquares)
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ error: 'There was an error trying to get yellow square data' })
  }
})

export default router
