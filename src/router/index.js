import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: () => import('@/components/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/components/About.vue')
  },
  {
    path: '/skill',
    name: 'skill',
    component: () => import('@/components/Skill.vue')
  },
  {
    path: '/career',
    name: 'career',
    component: () => import('@/components/Career.vue')
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('@/components/Portfolio.vue')
  },
  {
    path: '/social',
    name: 'social',
    component: () => import('@/components/Social.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
