import express from 'express'
import { getYellowSquareById } from '../db/db'

const router = express.Router()

//GET /api/v1/yellow-squares
router.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const yellowSquare = await getYellowSquareById(id)
    res.status(200).json(yellowSquare)
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ error: 'There was an error trying to get yellow square data' })
  }
})

export default router
