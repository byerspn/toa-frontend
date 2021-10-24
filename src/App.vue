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
          <router-link to="/create-event" class="navbar-item">Create Event</router-link>
          <router-link to="/log-in" class="navbar-item">Log in</router-link>
          <router-link to="/log-out" class="navbar-item">Log out</router-link>
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
  export default {
    data() {
      return {
        showMobileMenu: false,
      }
    }
  }
</script>

<style lang="scss">
@import '../node_modules/bulma';
</style>
