<template>
    <div>
        <h2>Login</h2>
        <form @submit.stop.prevent="handleSubmit">
            <input type="submit" value="Submit"/>
            {{authenticationSuccess}}
        </form>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "login",
  data() {
    return {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    };
  },
  computed: {
        ...mapGetters('auth', [
            'authenticating',
            'authenticationError',
            'authenticationErrorCode',
            'authenticationSuccess'
        ])
  },
  methods: {
      ...mapActions('auth', [
          'login'
      ]),
      handleSubmit() {
           
          // Perform a simple validation that email and password have been typed in
          if (this.email != '' && this.password != '') {
            this.login({email: this.email, password: this.password})
            this.password = ""
          }
      }
  }
};
</script>