import express from 'express'
import { getAllPawPrints } from '../db/db'

const router = express.Router()

//GET /api/v1/paw-prints
router.get('/', async (req, res) => {
  try {
    const pawPrints = await getAllPawPrints()
    res.status(200).json(pawPrints)
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ error: 'There was an error trying to get paw prints data' })
  }
})

export default router
