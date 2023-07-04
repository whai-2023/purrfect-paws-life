import express from 'express'
import path from 'path'

import yellowSquares from './routes/yellowSquares'
import pawPrints from './routes/pawPrints'
import yellowPawPrints from './routes/yellowPawPrints'
import owners from './routes/owners'
import catTowers from './routes/catTowers'
import choices from './routes/choices'

const server = express()
server.use(express.json())

server.use('/api/v1/cat-towers', catTowers)
server.use('/api/v1/choices', choices)
server.use('/api/v1/owners', owners)
server.use('/api/v1/yellow-squares', yellowSquares)
server.use('/api/v1/paw-prints', pawPrints)
server.use('/api/v1/yellow-paw-prints', yellowPawPrints)
server.use('/api/*', (req, res) => {
  res.sendStatus(404)
})

if (process.env.NODE_ENV === 'production') {
  server.use('/assets', express.static(path.resolve(__dirname, '../assets')))
  server.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../index.html'))
  })
}

export default server
