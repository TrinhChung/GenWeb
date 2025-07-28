import axios from "axios";

// Không cần import dotenv, không gọi dotenv.config() trong frontend

const customFetch = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Đúng cú pháp cho React
  headers: {
    Accept: "application/json",
  },
});

export default customFetch;
