/* eslint-disable no-param-reassign */
import Axios from "axios";

const http = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

http.interceptors.request.use((config) => {
  config.headers.Authorization = "Bearer [Token]";

  return config;
});

export default http;
