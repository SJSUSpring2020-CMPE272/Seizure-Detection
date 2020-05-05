import axios from 'axios';

export default axios.create({
  baseURL: 'https://myDomain.com/api/',
  timeout: 10000,
});