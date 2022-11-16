import axios from "axios";

const client = axios.create({
  baseURL: 'http://192.168.0.124:3000',
  timeout: 9000,
});

export default client;