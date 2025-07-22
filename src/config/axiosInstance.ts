// src/api/axiosInstance.ts
import axios from "axios";

// not setting up env now
const axiosInstance = axios.create({
  baseURL: "https://687f23d9efe65e5200887f01.mockapi.io",
  timeout: 10000,
});

export default axiosInstance;
