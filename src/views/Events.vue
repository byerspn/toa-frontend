<template>
    <div class="event-page has-background-grey-lighter">
        <!-- <section class="hero is-small is-link">
            <div class="hero-body has-text-centered">
                <p class="title">Most Recently Created Events</p>
            </div>
        </section> -->

        <div class="columns is-multiline">
            <div class="column is-12"></div>
            <div class="column is-12 has-text-centered">
                <p class="is-size-2">Most Recently Created Events</p>
            </div>
            <div 
                class="column is-4" 
                v-for="event in recentlyCreatedEvents" 
                v-bind:key="event._id"
            >
                <div class="box has-background-">
                    <h3 class="is-size-4">{{ event.name }}</h3>
                    <h3 class="is-size-4">{{ event.date }}</h3>
                    <router-link :to="{path: '/events/' + event._id}" class="button is-primary">Event Page</router-link>
                </div>
            </div>
            <div class="column is-12"></div>
            <div class="column is-12"></div>
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
                        // console.log(error)
                    })
            }
        }
    }
</script>