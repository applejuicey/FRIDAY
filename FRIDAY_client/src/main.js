import { createApp } from 'vue';
import App from './App.vue';
import { router } from './routes/index';
import { store } from './stores/index';
import './index.css';
import { api } from './services/index';

const app = createApp(App);
// 全局提供前端api访问服务，在组件中使用inject获取后使用
app.provide('$api', api);
app.use(store).use(router).mount('#app');