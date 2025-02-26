import PalindromeView from '@/views/PalindromeView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import GamesView from '../views/GamesView.vue'
import HomeView from '../views/HomeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/games',
      name: 'games',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: GamesView,
    },
    {
      path: '/palindrome',
      name: 'palindrome',

      component: PalindromeView,
    },
  ],
})

export default router
