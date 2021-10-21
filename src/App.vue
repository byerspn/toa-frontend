<template>
  <div id="wrapper">
    <nav class="navbar is-warning">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <strong>TOA</strong>
        </router-link>

        <a class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" id="navbar-menu">
        <div class="navbar-end">

          <router-link to="/createevent" class="navbar-item">Create Event</router-link>
          <router-link to="/exploreevents" class="navbar-item">Explore</router-link>
          

          <div class="navbar-item">
            <div class="buttons">
              <router-link to="/log-in" class="button is-light">Log in</router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <section class="section">
      <router-view/>
    </section>

    <footer class="footer">
      <p class="has-text-centered">insert some links here</p>
    </footer>
  </div>
</template>

<style lang="scss">
@import '../node_modules/bulma';
</style>