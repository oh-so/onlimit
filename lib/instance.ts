import axios from 'axios';

//TEST URL
const BASE_URL = "https://pokeapi.co/api/v2/pokemon/"

const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  }
});

export default apiClient;