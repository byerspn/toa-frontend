<template>
    <div class="sign-up-page">
        <div class="columns">
            <div class="column is-4"></div>
            <div class="column is-4">
                <h1 class="title has-text-centered">Sign up</h1>
                <form @submit.prevent="submitForm" class="has-text-centered">
                    <label>Username</label>
                    <div class="control">
                        <input type="text" class="input" v-model="username">
                    </div>
                    <label>Email</label>
                    <div class="control">
                        <input type="text" class="input" v-model="email">
                    </div>
                    <label>Phone</label>
                    <div class="control">
                        <input type="text" class="input" v-model="phone">
                    </div>
                    <label>Password</label>
                    <div class="control">
                        <input type="text" class="input" v-model="password">
                    </div>
                    <label>Password (confirm)</label>
                    <div class="control">
                        <input type="text" class="input" v-model="password2">
                    </div>
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
                errors: []
            }
        },
        methods: {
            submitForm() {

            }
        }
    }
</script>