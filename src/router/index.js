import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../views/home.vue';

Vue.use(VueRouter);

export const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/about.vue'),
  },
  {
    path: '/employees',
    name: 'employees',
    component: () => import(/* webpackChunkName: "employees" */ '../views/employees.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});
export default router;
