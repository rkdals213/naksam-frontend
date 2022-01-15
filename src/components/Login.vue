<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    this is login component<br>
                    <input v-model="email" placeholder="Email"><br>
                    <input v-model="password" placeholder="Password"><br>
                    <button v-on:click="login">Login</button>
                    <br>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import axios from "axios";

export default {
    name: "Login",
    data() {
        return {
            email: '',
            password: ''
        }
    },
    emits: ['close'],
    methods: {
        login() {
            axios.post('/session/login', {
                'email': this.email,
                'password': this.password
            }).then(value => {
                this.$emit("toggleShowLoginModal")
                this.$store.commit('login', value.data)
            }).catch(reason => {
                console.log(reason)
            })
        }
    }
}
</script>

<style scoped>

</style>