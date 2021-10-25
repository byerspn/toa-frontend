<template>
    <div class="sign-up-page">
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
        name: 'SignUp',
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

            }
        }
    }
</script>