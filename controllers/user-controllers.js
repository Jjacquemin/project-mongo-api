const User = require('../models/users')

module.exports = {
  readAll (req, res) {
    res.send({ users: 'Des users' })
  },
  read (req, res) {
    res.send({ user: `User avec le id ${req.params.id}` })
  },
  create (req, res) {
    const body = req.body
    const userCreated = new User({ name: body.name, age: body.age })
    userCreated.save()
      .then(() => {
        res.send({ result: `Création du User ${userCreated}` })
      })
  }
}