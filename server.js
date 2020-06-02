// librairie pour discuter avec mongodb en js
const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes/index')
const server = express()

server.use(bodyParser.json())
routes(server)

server.listen(3050, () => {
  console.log('Ecoute sur le port 3050')
  // Définition de la connexion à la base MongoDB
  mongoose.connect('mongodb://localhost/user_api_database',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  // Connexion à la base MongoDB
  mongoose.connection
    .once('open',() => console.log("Connexion à MongoDB établie")) // connexion avec succès
    .on('error',error => console.warn('Erreurs : ',error)) // connexion en erreur
})
