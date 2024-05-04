import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Router from './router/index.js';
import './style.css'
import './assets/iconfont/iconfont.css';
import App from './App.vue'
import FlyBox from './components/FlyBox/FlyBox.vue';
const pinia = createPinia()
const app = createApp(App);
app.use(Router);
app.use(pinia);
// 全局注册
app.component('FlyBox', FlyBox)

app.mount('#app');



