import express from 'express'
import { getChoiceById } from '../db/db'

const router = express.Router()

//GET /api/v1/cat-towers
router.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const choice = await getChoiceById(id)
    res.status(200).json(choice)
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ error: 'There was an error trying to get the choice data' })
  }
})

export default router
