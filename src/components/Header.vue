<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <div class="container">
                <b-navbar-brand to="/">Vue Boilerplate</b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>

                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item v-if="!loggedIn" to="login">Login</b-nav-item>
                        <b-nav-item-dropdown v-if="loggedIn" right>
                            <template v-slot:button-content>
                                <em>My Account</em>
                            </template>
                            <b-dropdown-item to="my-profile">My Profile</b-dropdown-item>
                            <b-dropdown-item @click="logout">Sign Out</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-collapse>
            </div>
        </b-navbar>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    computed: {
        ...mapGetters('auth', ['loggedIn'])
    },
    methods: {
        ...mapActions('auth', ['logout'])
    }
}
</script>