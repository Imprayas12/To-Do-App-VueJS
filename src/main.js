import './assets/main.css'
import { createApp } from 'vue'
import App from './TodoApp.vue'
import router from './Routes'
createApp(App).use(router).mount('#app')
