<template>
  <div id="wrapper">
    <nav class="navbar is-info">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <strong>TOA</strong>
        </router-link>
        <a class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu" @click="showMobileMenu = !showMobileMenu" v-bind:class="{'is-active': showMobileMenu }">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" id="navbar-menu" v-bind:class="{'is-active': showMobileMenu }">
        <div class="navbar-end">
          <router-link to="/events" class="navbar-item">Browse Events</router-link>
          <router-link to="/create-event" class="navbar-item" v-if="$store.state.isAuthenticated">Create Event</router-link>
          <router-link to="/signin" class="navbar-item" v-if="!$store.state.isAuthenticated">Sign in</router-link>
          <a @click="logout()" class="navbar-item" v-if="$store.state.isAuthenticated">Sign out</a>
        </div>
      </div>
    </nav>

    <section>
      <router-view/>
    </section>

    <footer class="footer">
      <p class="has-text-centered">
        footer. add links n stuff
      </p>
    </footer>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        showMobileMenu: false,
      }
    },
    beforeCreate() {
      this.$store.commit('initializeStore')

      const token = this.$store.state.token

      if (token) {
        axios.defaults.headers.common['Authorization'] = "Token " + token
      } else {
        axios.defaults.headers.common['Authorization'] = ""
      }
    },
    methods: {
      logout() {
        axios.defaults.headers.common["Authorization"] = ""
        localStorage.removeItem("token")
        localStorage.removeItem("username")
        localStorage.removeItem("userid")

        this.$store.commit("removeToken")

        this.$router.push("/")
      }
    }
  }
</script>

<style lang="scss">
@import '../node_modules/bulma';
</style>
