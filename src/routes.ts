import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    name: 'main',
    path: '/',
    component: () => import('@/views/Landing.vue'),
  },
//   {
//     name: 'landing',
//     path: '/landing',
//     component: () => import('@/views/Landing.vue'),
//   },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// check whether user's logged in
router.beforeEach((to, from) => {
  //TODO(dan): switch this to checking if user's logged in elsewhere
  // if (to.name !== 'onboard') return '/onboard'
  return true
})

export default router