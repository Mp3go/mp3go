const mongoose = require("mongoose");
password = encodeURIComponent(process.env.password);
const connections = async () => {
  await mongoose
    .connect(
      `mongodb+srv://rachitsharma:${password}@cluster0.6sf4nyy.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => {
      console.log("Connected to Database");
    })
    .catch((err) => {
      console.log("Error in Database");
    });
};
module.exports = connections;
