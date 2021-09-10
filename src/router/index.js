import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DonationProjects from '../views/projects/DonationProjects.vue'
import Project from '../views/projects/ProjectDetail.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ProjectDonate from '../views/projects/ProjectDonate.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/project-donate/:id',
    name: 'ProjectDonate',
    component: ProjectDonate
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/donation-projects',
    name: 'DonationProjects',
    component: DonationProjects,
  },
  {
      path: '/project/:id(\\d+)',
      name: 'Project',
      component: Project,
  },
  {
    path: '/NFT/:id',
    name: 'NFT-list',
    component: () => import('../views/NFT.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/AboutUs',
    name: 'AboutUs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/KnowUs/AboutUs.vue')
  },
  {
    path: '/AnnualReport',
    name: 'AnnualReport',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/KnowUs/AnnualReport.vue')
  },
  {
    path: '/DonationUsage',
    name: 'DonationUsage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/KnowUs/DonationUsage.vue')
  },




  { path: '/:pathMatch(.*)*', 
    name: 'NotFound', 
    component: () => import('../views/NotFound.vue') },
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
