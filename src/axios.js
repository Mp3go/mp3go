import axios from "axios";

const API = axios.create({
  baseURL: "https://mp3go-q9xm.onrender.com",
  // baseURL: "http://localhost:3001",
});

export default API;
