const userControllers = require('../controllers/user-controllers')

module.exports = (server) => {
  server.get('/users', userControllers.getUsers)
  server.get('/user/:id', userControllers.getUser)
}
