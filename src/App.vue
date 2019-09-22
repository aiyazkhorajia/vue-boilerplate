<template>
  <div id="app">
    <app-header/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'app',
  data(){
    return{
      appName: process.env.VUE_APP_NAME
    }
  },
  components: {
    'app-header' : Header
  }
}
</script>
