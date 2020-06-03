const Movie = require('../models/movies')

module.exports = {
  readAll (req, res) {
    Movie.find({})
      .then( movies => {
        res.send(movies)
      })
  },
  read (req, res) {
    Movie.findById(req.params.id)
      .then( movie => {
        res.send(movie)
      })
  },
  create (req, res) {
    const {title, duration} = req.body
    const movieCreated = new Movie({ title, duration })
    movieCreated.save()
      .then(() => {
        res.send({ create: movieCreated })
      })
  },
  delete (req, res) {
    const body = req.body
    Movie.findByIdAndDelete(body.id)
    .then( movie => {
      res.send({delete: movie})
    })
  }
}