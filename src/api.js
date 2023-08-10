import axios from 'axios';

// Создаем экземпляр axios
const api = axios.create({
    // включаем базовый URL, чтобы его везде не прописывать
    baseURL: process.env.VUE_APP_BASE_URL,
});

export default api;