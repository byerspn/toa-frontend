<template>
    <div class="sign-up-page">
        <div class="columns">
            <div class="column is-4"></div>
            <div class="column is-4">
                <h1 class="title has-text-centered">Sign up</h1>
                <form @submit.prevent="submitForm" class="has-text-centered">
                    <div class="field">
                        <label>Username</label>
                        <div class="control">
                            <input type="text" class="input" v-model="username">
                        </div>
                    </div>
                    <div class="field">
                        <label>Email</label>
                        <div class="control">
                            <input type="text" class="input" v-model="email">
                        </div>
                    </div>
                    <div class="field">
                        <label>Phone</label>
                        <div class="control">
                            <input type="text" class="input" v-model="phone">
                        </div>
                    </div>
                    <div class="field">
                        <label>Password</label>
                        <div class="control">
                            <input type="text" class="input" v-model="password">
                        </div>
                    </div>
                    <div class="field">
                        <label>Password (confirm)</label>
                        <div class="control">
                            <input type="text" class="input" v-model="password2">
                        </div>
                    </div>

                    <div class="notification is-danger" v-if="errors.length">
                        <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
                    </div>

                    <div class="field">
                        <div class="control">
                            <button class="button is-link">Sign up</button>
                        </div>
                    </div>

                    <div class="notification is-success" v-if="success">
                        <p>Account successfully created. Log in <router-link to="/signin">here</router-link>.</p>
                    </div>

                    <p>Or <router-link to="/signin">click here</router-link> to sign in</p>
                </form>
            </div>
            <div class="column is-4"></div>

        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'SignUp',
        data() {
            return {
                username: '',
                email: '',
                phone: '',
                password: '',
                password2: '',
                errors: [],
                success: false
            }
        },
        methods: {
            submitForm() {
                this.errors = []

                if(this.username === '') {
                    this.errors.push('Username field cannot be left blank.')
                }

                if(this.email === '') {
                    this.errors.push('Email field cannot be left blank.')
                }

                if(this.phone === '') {
                    this.errors.push('Phone field cannot be left blank.')
                }

                if(this.password === '') {
                    this.errors.push('Password field cannot be left blank.')
                }

                if(this.password2 !== this.password) {
                    this.errors.push('Passwords do not match.')
                }

                if(!this.errors.length) {
                    const signupData = {
                        username: this.username,
                        email: this.email,
                        phone: this.phone,
                        password: this.password
                    }

                    axios
                        .post("/users/signup", signupData)
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