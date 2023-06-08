import { createRouter, createWebHistory } from 'vue-router'
import listExcuse from '@/components/listExcuse.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
    {
        path: '/',
        name: 'Liste Excuse',
        component: listExcuse
    }
    ]
})
  
  export default router