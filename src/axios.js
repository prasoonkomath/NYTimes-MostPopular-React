import axios from 'axios';
import { baseUrl } from './constansts/constants';

const apiKey = process.env.REACT_APP_API_KEY;

const instance = axios.create({
  baseURL: baseUrl,
  params: {
    'api-key': apiKey,
  },
});

export default instance;