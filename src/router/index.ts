import { createRouter, createWebHistory } from 'vue-router'
import ProducerView from '../components/ProducerView.vue'
import ProductView from '../components/ProductView.vue'
import LandingView from '../components/LandingView.vue'
import AboutView from '../components/AboutView.vue'
import ContactView from '@/components/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/producers/:producerslug', component: ProducerView },
    { path: '/producers/:producerslug/products/:productslug', component: ProductView },
    { path: '/', component: LandingView },
    { path: '/about', component: AboutView },
    { path: '/contact', component: ContactView },
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

router.beforeEach(async (to, from) => {
  if (to.path === '/producers/lagoon-brewery/products/koshiranrei-junmai-daiginjo') {
    return '/producers/lagoon-brewery/products/koshitanrei-junmai-daiginjo'
  }
  return true
})

export default router
