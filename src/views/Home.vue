<template>
    <div>
        <h2>{{ page | uppercase }}</h2>
        
    </div>
</template>

<script>
//import { mapGetters, mapActions } from "vuex";
export default {
  name: "login",
  data() {
    return {
        page: 'home'
    }
  },
  computed: {
      //...mapGetters(['title'])
  },
  methods: {
      //...mapActions(['']),
  }
};
</script>