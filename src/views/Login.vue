<template>
  <b-container>
    <b-row align-h="center">
      <b-col cols="6">
        <b-card class="mt-3" header="Sign in">
          <b-form @submit="onSubmit">
            <b-form-group label="Email address:" label-for="email">
              <b-form-input
                id="email"
                v-model="form.email"
                type="email"
                required
                placeholder="Enter email"
              ></b-form-input>
            </b-form-group>
            <b-form-group label="Password:" label-for="password">
              <b-form-input
                id="password"
                v-model="form.password"
                type="password"
                required
                placeholder="Enter password"
              ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary" class="mr-2"
              >Login</b-button
            >
            <b-button variant="primary" disabled v-if="authenticating">
              <b-spinner small type="grow"></b-spinner>
              verifying your details...
            </b-button>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "login",
  metaInfo: {
    title: "Login",
    titleTemplate: "%s | Vue.js Boilerplate",
    description:
      "Login page for vue.js boilerplate using best directory structure and uses of store.",
  },
  data() {
    return {
      form: {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      },
    };
  },
  computed: {
    ...mapGetters("auth", [
      "authenticating",
      "authenticationError",
      "authenticationErrorCode",
      "authenticationSuccess",
    ]),
  },
  methods: {
    ...mapActions("auth", ["login"]),
    onSubmit(evt) {
      evt.preventDefault();
      // Perform a simple validation that email and password have been typed in
      if (this.form.email != "" && this.form.password != "") {
        this.login({ email: this.form.email, password: this.form.password });
        this.form.password = "";
      }
    },
  },
};
</script>