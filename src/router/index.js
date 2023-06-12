import { createRouter, createWebHistory } from 'vue-router'
import ListExcuse from '@/views/listExcuse.vue'
import random from '@/views/random.vue'
import NotFount from '@/views/error404.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/ListExcuse',
            name: 'ListExcuse',
            component: ListExcuse
        },

        {
            path: '/random',
            name: 'random',
            component: random
        },
        
        {
            path: '/:catchAll(.*)',
            name: 'NotFount',
            component: NotFount
        }
    ]
})
  
  export default router