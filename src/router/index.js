import { createRouter, createWebHistory } from 'vue-router'; 
import TesteBlog1 from '../components/testeBlog1.vue'; 
import Home from '../components/home.vue'; 
import Login from '../components/login.vue'; 

const routes = [

    {
      path: '/blog',
      name: 'teste',
      component: TesteBlog1
    },
    {
      path: '/',
      name: 'conteudo',
      component: Home // Você pode mudar para Login se preferir
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  
  ];

  const router = createRouter
  ({
    history: createWebHistory(),
    routes,
  })

export default router;
