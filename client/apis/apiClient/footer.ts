import request from 'superagent'
import { Owner } from '../../../models/Owner'
const gameUrl = 'api/v1/game'

export async function getOwnerById(): Promise<Owner> {
  const response = await request.get(gameUrl)
  return response.body
}
