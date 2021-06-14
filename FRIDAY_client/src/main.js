import { createApp } from 'vue';
import App from './App.vue';
import { router } from './routes/index';
import { store } from './stores/index';
import './index.css';

const app = createApp(App);
app.use(store).use(router).mount('#app');