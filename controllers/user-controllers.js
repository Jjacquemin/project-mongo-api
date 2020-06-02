const User = require('../models/users')

module.exports = {
  readAll (req, res) {
    User.find({})
      .then( users => {
        res.send(users)
      })
  },
  read (req, res) {
    User.findById(req.params.id)
      .then( user => {
        res.send(user)
      })
  },
  create (req, res) {
    const body = req.body
    const userCreated = new User({ name: body.name, age: body.age })
    userCreated.save()
      .then(() => {
        res.send({ create: userCreated })
      })
  },
  delete (req, res) {
    const body = req.body
    User.findByIdAndDelete(body.id)
    .then( user => {
      res.send({delete: user})
    })
}
}