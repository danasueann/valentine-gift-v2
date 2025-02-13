
import { createRouter, createWebHistory } from 'vue-router';
import FirstPage from './components/FirstPage.vue';
import YES from './components/YES.vue';
import NoThree from './components/NoThree.vue';
import NoTwo from './components/NoTwo.vue';
import NoOne from './components/NoOne.vue';
const routes = [
  { path: '/', component: FirstPage },
  { path: '/no', component: NoOne },
  { path: '/stillNo', component: NoTwo },
  { path: '/pleeease', component: NoThree },

  { path: '/YES', component: YES }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
