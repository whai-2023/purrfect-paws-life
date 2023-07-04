import express from 'express'
import { getAllYellowPawPrints } from '../db/db'

const router = express.Router()

//GET /api/v1/yellow-paw-prints
router.get('/', async (req, res) => {
  try {
    const yellowPawPrints = await getAllYellowPawPrints()
    res.status(200).json(yellowPawPrints)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: 'There was an error trying to get yellow paw prints data',
    })
  }
})

export default router
