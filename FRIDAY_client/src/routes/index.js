import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';

const routes = [
  { path: '/', component: Login },
];

let router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export {
  router
};