import {createStore} from "vuex"

export const store = createStore({
    state() {
        return {
            loginState: false,
            userId: 0,
            userEmail: '',
            userName: ''
        }
    },
    mutations: {
        login(state, memberInfo) {
            state.loginState = true
            state.userId = memberInfo.id
            state.userEmail = memberInfo.email
            state.userName = memberInfo.name
        },
        logout(state) {
            state.loginState = false
        }
    }
})
