import axios from "axios";

const client = axios.create({
  baseURL: "https://food-delivery-app-api.netlify.app",
});

client.interceptors.request.use(function (config) {
  config.headers["Content-Type"] = "application/json";
  config.headers.Authorization =
    localStorage.getItem("foodDeliveryAppToken") || undefined;

  return config;
});

export default client;
