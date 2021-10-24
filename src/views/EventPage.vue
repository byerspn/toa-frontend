<template>
    <div class="event-page">
        <h1>This is the single event page</h1>
        <h2>This is the id url param: {{ $route.params.id }}</h2>

        <div class="columns is-multiline">
            <!-- columns areas are divided into 12. i dont want text to touch edges of screen so i add 1/12 spacers and give the actual content 10/12 space. -->
            <div class="column is-1"></div>
            <div class="column is-10 has-text-centered"><strong class="is-size-2">{{ singleEvent.name }}</strong></div>
            <div class="column is-1"></div>
            <div class="column is-1"></div>
            <div class="column is-10 has-text-centered"><p class="is-size-4">Date/Time: {{ singleEvent.dateandtime }}</p></div>
            <div class="column is-1"></div>
            <div class="column is-1"></div>
            <div class="column is-10 has-text-centered"><p class="is-size-4">Location: {{ singleEvent.location }}</p></div>
            <div class="column is-1"></div>
            <div class="column is-1"></div>
            <div class="column is-10 has-text-centered"><p class="is-size-5">{{ singleEvent.description }}</p></div>
            <div class="column is-1"></div>
            <div class="column is-1"></div>
            <div class="column is-10 has-text-centered">
                    <p class="is-size-4">Entrants:</p>
                <div 
                    v-for="entrant in singleEvent.entrants" 
                    v-bind:key="entrant._id"
                >
                    <p class="is-size-5">{{ entrant.username }}</p>
                </div>
            </div>
            <div class="column is-1"></div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'EventPage',
        data() {
            return {
                singleEvent: {}
            }
        },
        components: {

        },
        mounted() {
            this.getSingleEvent()
        },
        methods: {
            getSingleEvent() {
                axios
                    .get(`/events/${ this.$route.params.id }`)
                    .then(res => {
                        this.singleEvent = res.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        }
    }
</script>