/** VUEX store definition **/

import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import home from './modules/home'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    home,
    auth
  },
  strict: false
})