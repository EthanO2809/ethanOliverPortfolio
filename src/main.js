import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import global from './assets/global.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

createApp(App).use(store).use(router).use(global).mount('#app')
