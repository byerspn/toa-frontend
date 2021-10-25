<template>
    <div class="create-event-page">
        <div class="columns">
            <div class="column is-2"></div>
            <div class="column is-8">
                <h1 class="title has-text-centered">Create Event</h1>
                <form @submit.prevent="submitForm" class="has-text-centered">
                    <div class="field">
                        <label>Event Name</label>
                        <div class="control">
                            <input type="text" class="input" v-model="name">
                        </div>
                    </div>
                    <div class="field">
                        <label>Event Location</label>
                        <div class="control">
                            <input type="text" class="input" v-model="location">
                        </div>
                    </div>
                    <div class="field">
                        <label>Event Date and Time</label>
                        <div class="control">
                            <input type="text" class="input" v-model="dateandtime">
                        </div>
                    </div>
                    <div class="field">
                        <label>Description</label>
                        <div class="control">
                            <input type="text" class="input" v-model="description">
                        </div>
                    </div>

                    <div class="notification is-danger" v-if="errors.length">
                        <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
                    </div>

                    <div class="field">
                        <div class="control">
                            <button class="button is-link">Create</button>
                        </div>
                    </div>

                    <!-- <div class="notification is-success" v-if="success">
                        <p>Event successfully created. View event page <router-link to="/signin">here</router-link>.</p>
                    </div> -->

                    <p>Or <router-link to="/events">click here</router-link> to browse other events</p>
                </form>
            </div>
            <div class="column is-2"></div>

        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'SignUp',
        data() {
            return {
                name: '',
                location: '',
                dateandtime: '',
                description: '',
                entrants: [],
                // owner: this.$store.state.token,
                errors: [],
                success: false
            }
        },
        methods: {
            submitForm() {
                this.errors = []

                if(this.name === '') {
                    this.errors.push('Name field cannot be left blank.')
                }

                if(this.location === '') {
                    this.errors.push('Location field cannot be left blank.')
                }

                if(this.dateandtime === '') {
                    this.errors.push('Date and time field cannot be left blank.')
                }

                if(this.description === '') {
                    this.errors.push('description field cannot be left blank.')
                }

                if(!this.errors.length) {
                    const eventData = {
                        name: this.name,
                        location: this.location,
                        dateandtime: this.dateandtime,
                        description: this.description,
                        entrants: this.entrants,
                        owner: this.owner
                    }

                    axios
                        .post("/events", eventData)
                        .then(res => {
                            this.success = true
                        })
                        .catch(error => {
                            if (error.response) {
                                this.errors.push(`Something went wrong. Please try again.`)
                                this.errors.push(`Error given: ${JSON.stringify(error.response.data)}.`)

                                // console.log(JSON.stringify(error.response.data))
                            } else if (error.message) {
                                this.errors.push('Something went wrong. Please try again.')

                                // console.log(JSON.stringify(error))
                            }
                        }) 
                }
            }
        }
    }
</script>