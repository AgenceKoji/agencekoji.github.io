import { createRouter, createWebHistory } from 'vue-router'
import ProducerView from '../components/ProducerView.vue'
import ProductView from '../components/ProductView.vue'
import LandingView from '../components/LandingView.vue'
import AboutView from '../components/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/producers/:producerslug', component: ProducerView },
    { path: '/producers/:producerslug/products/:productslug', component: ProductView },
    { path: '/', component: LandingView },
    { path: '/about', component: AboutView },
  ],
})

export default router
