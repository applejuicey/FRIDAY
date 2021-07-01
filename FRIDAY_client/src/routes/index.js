import { createRouter, createWebHistory } from 'vue-router';
import Layout1 from '../layouts/Layout1.vue';
import Layout2 from '../layouts/Layout2.vue';
import Login from '../views/Login.vue';
import Home from '../views/Home.vue';

const routes = [
  { path: '/', redirect: '/home' },
  {
    path: "/auth",
    component: Layout2,
    children: [
      {
        path: "login",
        component: Login,
      },
    ],
  },
  // { path: '/', name:'login', component: Login },
  { path: '/home', name:'home', component: Home },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export {
  router
};
