<template>
    <div class="event-page">
        <!-- <h1>This is the single event page</h1> -->
        <!-- <h2>This is the id url param: {{ $route.params.id }}</h2> -->

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
                <button @click="register()" class="is-size-4" v-if="$store.state.isAuthenticated">Register for Event</button>
                <router-link to="/signin"><button class="is-size-4" v-if="!$store.state.isAuthenticated">Sign in to register for event</button></router-link>
                <p class="is-size-4">Entrants:</p>
                <div 
                    v-for="entrant in singleEvent.entrants" 
                    v-bind:key="entrant._id"
                >
                    <p class="is-size-5">{{ entrant.username }}</p>
                </div>
            </div>
            <div class="column is-1"></div>
            <div class="column is-1"></div>
            <div class="column is-10">
                <a v-bind:href="bracketlink" target="_blank">bracket style</a>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'EventPage',
        data() {
            return {
                singleEvent: {},
                success: false,
                entrants: 0,
                bracketlink: ''
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
                        const tempEntrantVar = this.singleEvent.entrants
                        this.entrants = tempEntrantVar.length
                        this.bracketlink = `https://www.printyourbrackets.com/fillable-brackets/${this.entrants}-team-single-fillable.pdf`
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            register() {
                const originalEntrants = this.singleEvent.entrants
                const updatedEntrants = originalEntrants.map(originalEntrant => {
                    return originalEntrant._id
                })
                updatedEntrants.push(this.$store.state.userId)
                console.log('userid pushed to updated entrants')
                console.log(updatedEntrants)

                const eventRegistered = {
                    name: this.singleEvent.name,
                    location: this.singleEvent.location,
                    dateandtime: this.singleEvent.dateandtime,
                    description: this.singleEvent.description,
                    entrants: updatedEntrants,
                    owner: this.singleEvent.owner
                }
                axios
                    .put(`/events/${ this.$route.params.id }/register`, eventRegistered)
                    .then(res => {
                        this.success = true
                        this.getSingleEvent()
                        console.log('updated with reg')
                    })
                    .catch(error => {
                        // console.log('catch of eventRegistered()')
                        console.log(error)
                    })
            }
        }
    }
</script>