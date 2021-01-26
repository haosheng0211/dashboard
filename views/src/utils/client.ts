import axios from "axios";
import config from "@/utils/config";
import { ElLoadingComponent } from "element-ui/types/loading";
import { Loading, Message } from "element-ui";

const client = axios.create({
  baseURL: config.baseURL + "api",
  timeout: 10000,
  responseType: "json"
});
let loading: ElLoadingComponent;

client.interceptors.request.use(
  config => {
    loading = Loading.service({
      text: "數據加載中"
    });
    return config;
  },
  error => {
    loading.close();
    return Promise.reject(error);
  }
);

client.interceptors.response.use(
  response => {
    loading.close();
    return response.data;
  },
  error => {
    loading.close();
    Message.error(error.response?.message || "系統服務異常");
    return Promise.reject(error.response);
  }
);

export default client;
