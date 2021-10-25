<template>
    <div class="sign-in-page">
        <div class="columns">
            <div class="column is-4"></div>
            <div class="column is-4">
                <h1 class="title has-text-centered">Sign in</h1>
                <form @submit.prevent="submitForm" class="has-text-centered">
                    <div class="field">
                        <label>Email</label>
                        <div class="control">
                            <input type="text" class="input" v-model="email">
                        </div>
                    </div>
                    <div class="field">
                        <label>Password</label>
                        <div class="control">
                            <input type="text" class="input" v-model="password">
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <button class="button is-link">Sign in</button>
                        </div>
                    </div>

                    <div class="notification is-success" v-if="success">
                        <p>Successfully logged in. <router-link to="/create-event">Create event</router-link> or <router-link to="/events">browse events</router-link>.</p>
                    </div>

                    <p>Or <router-link to="/signup">click here</router-link> to sign up</p>
                </form>
            </div>
            <div class="column is-4"></div>

        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'SignIn',
        data() {
            return {
                username: '',
                password: '',
                errors: [],
                success: false
            }
        },
        methods: {
            submitForm() {
                this.errors = []

                if(this.email === '') {
                    this.errors.push('Email field cannot be left blank.')
                }

                if(this.password === '') {
                    this.errors.push('Password field cannot be left blank.')
                }

                if(!this.errors.length) {
                    const signinData = {
                        email: this.email,
                        password: this.password
                    }

                    axios
                        .post("/users/signin", signinData)
                        .then(res => {
                            this.success = true
                        })
                        .catch(error => {
                            if (error.response) {
                                this.errors.push(`Something went wrong. Please try again.`)
                                this.errors.push(`Error given: ${JSON.stringify(error.response.data)}. Make sure only numbers appear in the phone field.`)

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