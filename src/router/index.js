import Vue from 'vue'
import Router from 'vue-router'
import {TokenService} from '../services/storage.service'

import Home from './../views/Home.vue'
import Login from './../views/Login.vue'
import NotFound from './../views/NotFound.vue'



Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      meta: {
        public: true,  // Allow access to even if not logged in
        onlyWhenLoggedOut: true
      }
    }, {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        public: false,  // Allow access only if loggedin
      }
    }, {
      path: '*',
      component: NotFound,
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isPublic = to.matched.some(record => record.meta.public)
  const onlyWhenLoggedOut = to.matched.some(record => record.meta.onlyWhenLoggedOut)
  const loggedIn = !!TokenService.getToken();

  if (!isPublic && !loggedIn) {
    return next({
      path:'/login',
      query: {redirect: to.fullPath}  // Store the full path to redirect the user to after login
    });
  }

  // Do not allow user to visit login page or register page if they are logged in
  if (loggedIn && onlyWhenLoggedOut) {
    return next('/home')
  }

  next();
}) 

export default router;
