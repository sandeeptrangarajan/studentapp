import axios from "axios";

// Fake/invalid URL on purpose — triggers the catch block.
// Later just replace this with your real backend URL.
const BASE_URL = "https://invalid-api.example.com/api";

export const api = axios.create({ baseURL: BASE_URL });