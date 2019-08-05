<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return{
      appName: process.env.VUE_APP_NAME
    }
  },
  components: {
  }
}
</script>

<style>
</style>
