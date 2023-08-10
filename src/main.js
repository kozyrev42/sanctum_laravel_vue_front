import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery/dist/jquery.min.js'
import api from '@/api';

const app = createApp(App);                             // Создание экземпляра приложения Vue

app.use(router);
app.config.globalProperties.$api = api;                 // регистрация api в глобальных свойствах
app.mount('#app');