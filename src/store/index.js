import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userInfo: {
            userName: '',
        }
    },
    mutations: {
        SET_USER_INFO: (state, userInfo) => {
            state.userInfo = userInfo;
        },
    },
    actions: {
        SET_USER_INFO: ({commit}, userInfo) => {
            commit('SET_USER_INFO', userInfo)
        },
    },
    getters: {
        GET_USER_INFO: state => {
            return state.userInfo;
        },
    }
})