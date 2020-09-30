<template>
  <div class="container">
    <b-card
      img-src="https://vuejs.org/images/logo.png"
      img-alt="Card image"
      img-left
      class="mb-3 mt-3"
    >
      <b-card-text>
        <h3>Vue Minimal Boilerplate</h3>
        <p>
          I did some research in order to find the perfect folder structure,
          component architecture, and naming convention, I went through the
          Vue.js documentation, a few articles and many GitHub open source
          projects.
        </p>
        <ul>
          <li><strong>vuex</strong> with modules</li>
          <li><strong>router</strong> with meta</li>
          <li>services with token based access</li>
          <li>environment variable</li>
          <li>filters.</li>
          <li><strong>pages and component</strong> structure</li>
        </ul>
        <p>
          This structure might be helpful in your large project/application,
          However Vue doesn't really restrict how you structure your code.
        </p>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "login",
  metaInfo: {
    title: "Home",
    titleTemplate: "%s | Vue.js Boilerplate",
  },
  data() {
    return {};
  },
};
</script>

<style>
.light-color,
.light-color:hover {
  color: #fff;
}
</style>