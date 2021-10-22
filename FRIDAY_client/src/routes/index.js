import { createRouter, createWebHistory } from 'vue-router';
import Auth from '../views/auth/Auth.vue';
import Login from '../views/auth/Login.vue';
import Home from '../views/Home.vue';
import Projects from '../views/Projects.vue';

// 前端路由
const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: "/auth",
    component: Auth,
    children: [
      {
        path: "login",
        component: Login,
        meta: {
          layout: 'Layout1',
          requireAuth: false,
        },
      },
      {
        path: "register",
        component: Login,
        meta: {
          layout: 'Layout1',
          requireAuth: false,
        },
      },
    ],
    meta: {
      layout: 'Layout1',
      requireAuth: false,
    },
  },
  {
    path: '/home',
    name:'home',
    component: Home,
    meta: {
      layout: 'LayoutDefault',
      requireAuth: true,
    },
  },
  {
    path: '/projects',
    name:'projects',
    component: Projects,
    meta: {
      layout: 'LayoutDefault',
      requireAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

// 路由守卫
router.beforeEach((to, from, next) => {

  if (to.meta.requireAuth) {
    // 需要验证,进一步检查vuex是否存在token
      // 存在token,调用api验证token有效性
        // 当前token有效,允许前进
        // 当前token无效,重定向至登录页
      // 不存在token,重定向至登录页
    // 无需验证,允许前进

    // if (sessionStorage.getItem("user_token")) {
    //
    //   next()
    // }else{
    //   next({
    //     path: '/login',
    //     query: {redirect: to.fullPath}
    //   })
    // }
    next();
  } else {
    // 无需验证
    next();
  }

});

export {
  router
};
