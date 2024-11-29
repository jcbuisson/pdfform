
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
   {
      path: '/',
      component: () => import('/src/views/Form.vue'),
   },
   // {
   //    path: '/form',
   //    component: () => import('/src/views/Form.vue'),
   // },

   {
      path: "/:catchAll(.*)",
      redirect: '/',
   },

]

const router = createRouter({
   history: createWebHistory(),
   routes
})

export default router
