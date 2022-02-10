import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import VueSession from "vue-session";
createApp(App).use(VueSession);
//Vue.use(VueSession)

createApp(App).use(router).mount('#app')
