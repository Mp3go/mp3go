const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

app.listen(3000, () => {
  console.log("Listening on Port");
});
