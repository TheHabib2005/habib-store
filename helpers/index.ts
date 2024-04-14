import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000", // Set your API base URL
  headers: {
    "Content-Type": "application/json", // Set the content type header
  },
});
