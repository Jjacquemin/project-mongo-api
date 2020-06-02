module.exports = {
  getUsers (req, res) {
    res.send({ users: 'Des users' })
  },
  getUser (req, res) {
    res.send({ user: `User avec le id ${req.params.id}` })
  }
}