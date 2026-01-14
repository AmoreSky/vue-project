import HomeComponent from '@/HomeComponent.vue'
import SignUp from '@/SignUp.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeComponent },
    { path: '/register', component: SignUp }
  ],
})

export default router
