const express = require('express')
const routes = require('./routes/index')
const server = express()

routes(server)

server.listen(3050, () => {
  console.log('Ecoute sur le port 3050')
})
