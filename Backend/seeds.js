const axios = require("axios");
require("dotenv").config();
const db = require("./config/dbconfig");
const Music = require("./models/music");
db();
axios
  .get("https://saavn.me/modules?language=english")
  .then(async (response) => {
    const output = response.data.data.albums;
    var a = 0;
    for (let i of output) {
      searchquery = i.name.replaceAll(" ", "+");
      await axios
        .get(
          `https://saavn.me/search/songs?query=${searchquery}&page=1&limit=2`
        )
        .then(async (response) => {
          const output = response.data.data.results[0];
          var lyric = "No Lyric Available";
          var price = [400, 500, 550, 600, 900, 800];
          if (output.hasLyrics === "true") {
            await axios
              .get(`https://saavn.me/lyrics?id=${output.id}`)
              .then((response) => {
                lyric = response.data.data.lyrics;
              })
              .catch((err) => {
                console.log(err);
              });
          }
          const data = new Music({
            name: output.name,
            duration: (parseInt(output.duration) / 60).toFixed(1),
            year: parseInt(output.year),
            artist: output.primaryArtists.split(", "),
            language:
              output.language.charAt(0).toUpperCase() +
              output.language.slice(1),
            img: output.image[2].link,
            price: price[Math.floor(Math.random() * price.length)],
            lyric: lyric,
          });
          await data.save().then((response) => {
            console.log("Saved in Database");
          });
        })
        .catch((err) => {
          console.log(err);
        });
      a += 1;
      if (a == 10) {
        break;
      }
    }
  })
  .catch(function (error) {
    // if not successful then log the error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
