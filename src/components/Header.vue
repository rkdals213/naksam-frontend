<template>
    <H1>HEADER</H1>
    <div v-if="!this.$store.state.loginState">
        <button v-on:click="toggleShowLoginModal">Login</button>
        <modal v-if="showLoginModal">
            <Login @showModal="showLoginModal"></Login>
        </modal>
    </div>
    <div v-else>
        <button v-on:click="logout">Logout</button>
    </div>

</template>

<script>
import Login from "@/components/Login"
import {useCookies} from 'vue3-cookies'
import axios from "axios";

export default {
    name: "Header",
    components: {
        Login
    },
    setup() {
        const cookie = useCookies()
        return cookie
    },
    data() {
        return {
            showLoginModal: false
        }
    },
    mounted() {
        this.showCookie()
    },
    methods: {
        showCookie() {
            const keys = this.cookie.keys()
            console.log(keys)
        },
        toggleShowLoginModal() {
            this.showLoginModal = !this.showLoginModal
            console.log(this.showLoginModal)
        },
        logout() {
            axios.post('/session/logout').then(value => {
                this.$store.commit('logout')
                this.toggleShowLoginModal()
            }).catch(reason => {
                console.log(reason)
            })
        }
    }
}
</script>

<style scoped>

</style>