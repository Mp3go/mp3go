const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const axios = require("axios");
const Music = require("./models/music");
const Filter = require("./models/filter");
require("dotenv").config();
const db = require("./config/dbconfig");

const app = express();

app.listen(3000, () => {
  console.log("Listening on Port");
});
