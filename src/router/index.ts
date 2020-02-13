import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
  },
  {
    path: '/forgot-password',
    name: 'Forgot Password',
    component: () => import(/* webpackChunkName: "forgot-password" */ '../views/ForgotPassword.vue'),
  },
  {
    path: '/reset-password',
    name: 'Reset Password',
    component: () => import(/* webpackChunkName: "reset-password" */ '../views/ResetPassword.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
