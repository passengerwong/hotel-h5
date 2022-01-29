import Axios from "axios";

const isPro = import.meta.env.MODE === "production";

const instance = Axios.create({
  timeout: 3000,
  baseURL: isPro ? "http://127.0.0.1:3303/test" : "/test",
});

export default instance;
