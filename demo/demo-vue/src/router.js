import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue';
import SpecPage from './components/SpecPage.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/spec',
    name: 'SpecPage',
    component: SpecPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
