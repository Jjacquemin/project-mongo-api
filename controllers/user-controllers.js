const User = require('../models/users')
const Movie = require('../models/movies')

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
    const { name, age } = req.body
    const userCreated = new User({ name, age })
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
  },
  update (req, res) {
    const { title, duration } = req.body
    let movieCreated
    let movieExist = false
    Movie.findOne( { title })
      .then( movie => {
        if (movie) {
          movieCreated = movie //new Movie({ _id: movie._id, title: movie.title, duration: movie.duration })
          movieExit = true
        } else {
          movieCreated = new Movie({ title, duration })
        }
      })
    User.findById(req.params.id)
      .then( user => {
        user.movies.push(movieCreated)
        user.save()
          .then( () => {
            if (movieExist) {
              res.send(user)
            } else {
              movieCreated.save()
              .then( () => {
                res.send(user)
              })
            }
          })
      })

  },
  oldest (req, res) {
    User.find().sort({ 'age': -1}).limit(1)
      .then( users => {
        res.send(users)
      })
  },
  youngest (req, res) {
    User.find().sort({ 'age': 1}).limit(1)
      .then( users => {
        res.send(users)
      })
  },
  hasLongestMovie (req, res) {
    User.aggregate([
      { $unwind: "$movies" },
      { $lookup: {
        from: "MOVIE_COLLECTION",
        localField: "movies",
        foreignField: "_id",
        as: "movieContent"
        }
      },
      { $unwind: "$movieContent" },
      { $sort: { "movieContent.duration":-1 } },
      { $limit: 1 },
      { $project: {
        "user name": "$name", 
        "movie title": "$movieContent.title", 
        "movie duration": "$movieContent.duration"
        }
      }
    ]).then( info => {
      res.send(info)
    })
  }
}