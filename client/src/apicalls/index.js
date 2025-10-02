import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://cine-sphere-three.vercel.app",
  // baseURL: "http://localhost:8082",
  
  withCredentials: true, // must be outside headers
  headers: {
    "Content-Type": "application/json",
  },
});

// Add interceptor to attach token dynamically
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
