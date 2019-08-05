import Vue from 'vue'
import App from './App.vue'
import { sync } from 'vuex-router-sync'
import router from './router'
import store from './store'
import ApiService from './services/api.service'
import {TokenService} from './services/storage.service'
import filters from './filters';

Vue.config.productionTip = false

// Set the base URL of the API
ApiService.init(process.env.VUE_APP_ROOT_API)

// If token exists set header
if (TokenService.getToken()) {
  ApiService.setHeader()
}

//Uses filters
Vue.use(filters);

//Sync vue-router's current $route as part of vuex store's state.
sync(store, router)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
