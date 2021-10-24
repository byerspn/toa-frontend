<template>
  <div class="home">
    <section class="hero is-medium is-link">
      <div class="hero-body has-text-centered">
        <p class="title">Tournament Organizer Assistant</p>
        <p class="subtitle">Create an event, or browse events created by others.</p>
        <div class="buttons is-centered">
          <router-link to="/create-event" class="button is-warning">Create an Event</router-link>
          <router-link to="/events" class="button is-link">Browse Events</router-link>
        </div>
      </div>
    </section>

    <div class=""></div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  }
}
</script>
