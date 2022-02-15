import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue3Storage from "vue3-storage"


if(!localStorage.getItem('token')){
    localStorage.setItem('token', "");
}
       
const app = createApp(App);
app.use(router)
    .use(Vue3Storage)
    .mount("#app");