// importe des modules express, bodyparser, et path
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();

// lie les routes user à l'app
const usersRoutes = require("./routes/users");
const articlesRoutes = require("./routes/articles");
const commentsRoutes = require("./routes/comments");

//créer l'application express
const app = express();

//gestion CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); //accéder à l'API depuis n'importe quelle origine ( '*' ) ;
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  ); //ajouter les headers mentionnés aux requêtes envoyées vers l'API (Origin , X-Requested-With , etc.) ;
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  ); //envoyer des requêtes avec les méthodes mentionnées ( GET ,POST , etc.).
  next();
}); //initialisation des headers pour empécher le CORS de bloquer l'application

app.use(bodyParser.json()); //défini la fonction json comme middleware global

app.use("/images", express.static(path.join(__dirname, "images"))); //permet d'accéder au dossier images

// endpoints
app.use("/api/auth", usersRoutes);
app.use("/api/articles", articlesRoutes);
app.use("/api/comments", commentsRoutes);

module.exports = app;
