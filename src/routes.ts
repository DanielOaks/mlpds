import { createRouter, createWebHistory } from 'vue-router/auto'

// export const routes = [
//   {
//     name: 'main',
//     path: '/',
//     component: () => import('@/views/Landing.vue'),
//   },
//   {
//     name: 'create-account',
//     path: '/create-account',
//     component: () => import('@/views/CreateAccount.vue'),
//   },
// ]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (to.hash) {
        return {
          el: to.hash,
        }
      }
      return { top: 0 }
    }
  },
})

// check whether user's logged in
router.beforeEach((to, from) => {
  //TODO(dan): switch this to checking if user's logged in elsewhere
  // if (to.name !== 'onboard') return '/onboard'
  return true
})

export default router