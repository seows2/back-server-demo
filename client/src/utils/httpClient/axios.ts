import { AxiosRequestConfig } from "axios";
import httpClient from ".";

const fetchWrap = async ({
  method,
  url,
  params,
  body,
}: {
  method: "get" | "post" | "patch" | "delete";
  url: string;
  params?: {};
  body?: {};
}) => {
  try {
    const config: AxiosRequestConfig = {
      params,
    };
    const { data } =
      (method === "get" && (await httpClient.get(url, config))) ||
      (method === "post" && (await httpClient.post(url, body, config))) ||
      (method === "patch" && (await httpClient.patch(url, body, config))) ||
      (method === "delete" && (await httpClient.delete(url, config))) ||
      {};
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const GET = (url: string, params?: {}) => {
  fetchWrap({ method: "get", url, params });
};

export const POST = (url: string, body?: {}) => {
  fetchWrap({ method: "post", url, body });
};
export const PATCH = (url: string, body?: {}, params?: {}) => {
  fetchWrap({ method: "patch", url, body, params });
};
export const DELETE = (url: string) => {
  fetchWrap({ method: "delete", url });
};
