import axios from "axios";

const API = axios.create({
  baseURL: "https://mp3go-558d.onrender.com/",
});

export default API;
