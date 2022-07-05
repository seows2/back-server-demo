import axios from "axios";

export const baseURL = process.env.REACT_APP_BASE_URL;

const httpClient = axios.create();
httpClient.defaults.baseURL = baseURL;
httpClient.defaults.withCredentials = true;

export default httpClient;
