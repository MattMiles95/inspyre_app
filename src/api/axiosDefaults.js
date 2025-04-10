// API
import axios from "axios";

axios.defaults.baseURL =
  "https://inspyre-api-6e178387b3cb.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
