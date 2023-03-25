import axios from "axios";
const instance = axios.create({
  baseURL: "/api/v1",
});
instance.interceptors.request.use((config) => {
  let token = sessionStorage.getItem("token");
  if (token) {
    config.headers = {
      token,
    };
  }
  return config;
});

export default instance;
