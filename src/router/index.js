import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import About from '@components/About.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: () => import('@/components/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
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
    path: '/porfolio',
    name: 'porfolio',
    component: () => import('@/components/Portfolio.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
