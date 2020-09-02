import axios from 'axios';

const Api = axios.create({
  baseUrl: 'https://localhost:4000/',
});

export default Api;
