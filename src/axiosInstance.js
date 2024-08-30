import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/', // عنوان الـ API الخاص بـ Django
});

export default axiosInstance;
