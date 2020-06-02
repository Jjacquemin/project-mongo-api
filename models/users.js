// librairie pour discuter avec mongodb en js
const mongoose = require('mongoose')
const Movie = require('./movies')

//Référencement de la classe Schema de mongoose.
const Schema = mongoose.Schema

//Instantiation d'un schema UserSchema constitué d'un nom obligatoire de type String 
const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Le nom est requis']
  },
  age: Number,
  movies: [{
    type: Schema.Types.ObjectId,
    ref: 'movie'
  }]
})

//Ajout colonne virtuelle pour nombre de films dans l'attribut movies, 
//on n'utilise pas de fonction fléchée à cause du this
UserSchema.virtual('countMovies').get(function() {
  return this.movies.length
})

//Ajout d'un middleware pre-remove car on veut supprimer tous les films référencés dans le tableau d'Id avant de supprimer le user
//Pas de fonction fléchée à cause du this
UserSchema.pre('remove', function(next) {
  // Supprime les Movie dont l'ID est dans le tableau this.movies ( les movies de l'utilisateur )
  Movie.deleteMany({ _id: { $in: this.movies } })
    .then(() => {
      next()
    })  
})

//Création d'un model de User basé sur le Schema précédemment défini.
const User = mongoose.model('user', UserSchema)

//Export du model User pour pouvoir y accéder de l'exterieur.
module.exports = User
