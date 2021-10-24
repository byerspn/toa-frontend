<template>
    <div class="event-page">
        <section class="hero is-small is-link">
            <div class="hero-body has-text-centered">
                <p class="title">Most Recently Created Events</p>
            </div>
        </section>

        <div class="columns is-multiline">
            <div 
                class="column is-3" 
                v-for="event in recentlyCreatedEvents" 
                v-bind:key="event._id"
            >
                <div class="box">
                    <h3 class="is-size-4">{{ event.name }}</h3>
                    <h3 class="is-size-4">{{ event.date }}</h3>
                    event page
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'Events',
        data() {
            return {
                recentlyCreatedEvents: []
            }
        },
        components: {

        },
        mounted() {
            this.getRecentlyCreatedEvents()
        },
        methods: {
            getRecentlyCreatedEvents() {
                axios
                    .get('/events')
                    .then(res => {
                        this.recentlyCreatedEvents = res.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        }
    }
</script>