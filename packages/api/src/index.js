const express = require('express')

const server = express()
  .get('/api', (req, res) => {
    res.json({ data: { message: 'Dunelm Hello World' } })
  })
  .listen(process.env.PORT, () => {
    console.log('api listening', server.address())
  })
