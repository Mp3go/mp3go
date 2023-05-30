const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const authRoutes = require('./routes/auth')
const albumRoutes = require('./routes/albums');
const userRoutes = require('./controllers/user')
const axios = require("axios");
const Music = require("./models/music");
const Filter = require("./models/filter");
require("dotenv").config();
const db = require("./config/dbconfig");

const app = express();

app.use('/albums', albumRoutes);
app.use(authRoutes);
app.use('/user', userRoutes);

app.listen(3000, () => {
  console.log("Listening on Port");
});
