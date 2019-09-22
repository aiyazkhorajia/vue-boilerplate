import Vue from 'vue'
import Router from 'vue-router'
import TokenService from '../services/storage.service'

import Home from './../views/Home.vue'
import Login from './../views/Login.vue'
import MyProfile from './../views/MyProfile.vue'
import PageNotFound from './../views/PageNotFound.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        public: true,
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        public: true,  // Allow access to guest user.
        onlyWhenLoggedOut: true
      }
    }, 
    {
      path: '/my-profile',
      name: 'my-profile',
      component: MyProfile,
      meta: {
        public: false,  // Allow access to only loggedin user.
      }
    },
    {
      path: '*',
      component: PageNotFound,
      meta: {
        public: true,
      }
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
