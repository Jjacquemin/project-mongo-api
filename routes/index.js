const userControllers = require('../controllers/user-controllers')
const movieControllers = require('../controllers/movie-controllers')

module.exports = (server) => {
  server.get('/users', userControllers.readAll)
  server.get('/user/:id', userControllers.read)
  server.get('/oldest/user', userControllers.oldest)
  server.get('/youngest/user', userControllers.youngest)
  server.get('/hasLongestMovie/user', userControllers.hasLongestMovie)
  server.put('/user/:id', userControllers.update)
  server.post('/user', userControllers.create)
  server.delete('/user', userControllers.delete)

  server.get('/movies', movieControllers.readAll)
  server.get('/movie/:id', movieControllers.read)
  server.post('/movie', movieControllers.create)
  server.delete('/movie', movieControllers.delete)
}
