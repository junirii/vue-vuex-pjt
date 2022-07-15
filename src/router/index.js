import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import StoreAccess from '../views/StoreAccess';
import StoreAccess2 from '../views/StoreAccess2';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/StoreAccess',
    name: 'StoreAccess',
    component: StoreAccess
  },
  {
    path: '/StoreAccess2',
    name: 'StoreAccess2',
    component: StoreAccess2
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
