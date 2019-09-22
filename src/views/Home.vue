<template>
    <div class="container">
        <h1 class="mt-4 mb-3">Home</h1>
        <b-row>
            <b-col cols="6">
                <b-img src="http://placehold.it/750x450" fluid rounded alt="" class="mb-4"></b-img>
            </b-col>
            <b-col cols="6">
                <h2>{{ page }}</h2>
                <p>{{ description }}</p>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    name: "login",
    metaInfo: {
        title: 'Home',
        titleTemplate: '%s | Vue.js Boilerplate'
    },
    data() {
        return {
            page: 'Vue.js Boilerplate',
            description: 'I did some research in order to find the perfect folder structure, component architecture, and naming convention, I went through the Vue.js documentation, a few articles and many GitHub open source projects.This structure might be helpful in your large project/application, However Vue doesn\'t really restrict how you structure your code'
        }
    }
};
</script>

<style>
.light-color, .light-color:hover{
    color: #fff;
}
</style>