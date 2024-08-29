import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

export enum LayoutName {
  Default = 'DefaultLayout',
}
export enum ViewName {
  Home = 'HomeView',
}

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: ViewName.Home,
      path: '/',
      component: HomeView,
    },
  ],
});
