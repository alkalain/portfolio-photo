import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutMeView from '../views/AboutMeView.vue'
import MyStuffView from '../views/MyStuffView.vue'
import PhotosView from '../views/PhotosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/aboutme',
      name: 'aboutme',
      component: AboutMeView,
    },
    {
      path: '/mystuff',
      name: 'mystuff',
      component: MyStuffView
    },
    {
      path: '/photos',
      name: 'photos',
      component: PhotosView
    },
  ],
  linkActiveClass:'bg-blue-700 text-[#FD93C5] border-amber-50'
})

export default router
