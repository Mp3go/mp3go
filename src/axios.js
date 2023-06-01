import axios from "axios";

const API = axios.create({
  baseURL: "localhost:3001",
});

export default API;
