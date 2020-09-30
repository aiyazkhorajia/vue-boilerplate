<template>
  <div class="container">
    <b-card class="mt-3" header="My Profile">
      <h3>Welcome to your profile page</h3>
      <pre>loggedIn: {{ loggedIn }}</pre>
    </b-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "myprofile",
    data() {
      return {        
      }
    },
    computed: {
      ...mapGetters('auth', ['loggedIn'])
    }
}
</script>