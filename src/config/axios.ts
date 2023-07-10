import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { toast } from "react-toastify";
type AxiosResponsType = AxiosResponse<any, any>;
type AxiosRequestConfigType = InternalAxiosRequestConfig<any>;

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
});

function axiosResponseHandler(response: AxiosResponsType) {
  return response;
}

function axiosErrorHandler(error: any) {
  const noToastHeader: boolean = error["config"]["headers"]["noToast"];
  if (noToastHeader) return error;

  const { message } = error;

  return toast.error(message);
}

function axiosRequestHandler(config: AxiosRequestConfigType) {
  return config;
}

axiosInstance.interceptors.response.use(axiosResponseHandler, axiosErrorHandler);

axiosInstance.interceptors.request.use(axiosRequestHandler);
export const { get, post, delete: del, put, patch, head, request } = axiosInstance;
