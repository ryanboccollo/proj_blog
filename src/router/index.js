import { createRouter, createWebHistory } from 'vue-router'
import from ''
import  from ''
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: ,
      name: ,
      component: 
    },
    {
      path: '/conteudo',
      name: 'conteudo',
      component: conteudo
    }
  ]
})

export default router
