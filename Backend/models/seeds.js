const axios = require("axios");
axios
  .get("https://saavn.me/search/songs?query=kun+faya+kun&page=1&limit=2")
  .then(function (response) {
    // if successful then log the response status and data
    console.log(response.status);
    console.log(response.data.data.results);
    axios.get("");
  })
  .catch(function (error) {
    // if not successful then log the error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
