import axios from 'axios';

const server = axios.create({
  baseURL: 'http://192.168.0.111:3000'
});

export default server;