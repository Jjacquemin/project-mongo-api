const userControllers = require('../controllers/user-controllers')

module.exports = (server) => {
  server.get('/users', userControllers.readAll)
  server.get('/user/:id', userControllers.read)
  server.post('/user', userControllers.create)
}
