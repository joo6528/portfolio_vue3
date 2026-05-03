import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/subView/:year/:id',
      name: 'subView',
      component: () => import('@/views/SubView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // 뒤로가기 시 이전 위치 유지
    if (savedPosition) {
      return savedPosition
    }
    // 그 외에는 항상 맨 위로
    return { top: 0 }
  }
})

export default router