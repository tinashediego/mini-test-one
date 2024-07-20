import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://fsboafrica.com/api/', 
});

export default axiosInstance;
