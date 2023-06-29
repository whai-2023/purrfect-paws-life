import express from 'express'
import { getOwnerById, getAllOwners } from '../db/db'

const router = express.Router()

//GET /api/v1/owners
router.get('/', async (req, res) => {
  try {
    const owners = await getAllOwners()
    res.status(200).json(owners)
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ error: 'There was an error trying to get all owners data' })
  }
})

//GET /api/v1/owners
router.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const owner = await getOwnerById(id)
    res.status(200).json(owner)
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ error: 'There was an error trying to get owner data' })
  }
})

export default router
