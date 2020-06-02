module.exports = (server) => {

  server.get('/bonjour', (req, res) => {
    res.send({ result: 'Un résultat' })
  })

  server.get('/users', (req, res) => {
    res.send({ users: 'Des users' })
  })

  server.get('/user/:id', (req, res) => {
    res.send({ user: `User avec le id ${req.params.id}` })
  })

}
