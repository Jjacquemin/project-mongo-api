// librairie pour discuter avec mongodb en js
const mongoose = require('mongoose')

//Référencement de la classe Schema de mongoose.
const Schema = mongoose.Schema

//Instantiation d'un schema MovieSchema constitué d'un titre obligatoire de type String 
const MovieSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Le titre est requis']
  },
  duration: {
    type: Number
  }
})

//Création d'un model de Movie basé sur le Schema précédemment défini.
const Movie = mongoose.model('movie', MovieSchema)

//Export du model Movie pour pouvoir y accéder de l'exterieur.
module.exports = Movie
