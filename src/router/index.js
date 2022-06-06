import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    

    {
      path: '/',
      name: 'Home',
      component: () => import(/* webpackChunkName: "Home" */  '@/views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import(/* webpackChunkName: "about" */ '@/views/Contact.vue')
    
    },
    {
      path: '/skills',
      name: 'Skills',
      component: () => import(/* webpackChunkName: "about" */ '@/views/Skills.vue')
       
    },
    
    {
      path: '/skills/soft-skills',
      name: 'soft-skills',
      component: () => import(/* webpackChunkName: "about" */ '@/views/SoftSkills.vue')
       
    },
  
  { 
    path: '/:pathMatch(.*)*', 
    component: () => import(/* webpackChunkName: "error404"*/'@/helpers/error404') 
  },
  
 
]
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

router.beforeEach((to, from) => {
  // ...
  // explicitly return false to cancel the navigation
  document.title = `${ process.env.VUE_APP_TITLE } - ${ to.name}`
})
export default router


