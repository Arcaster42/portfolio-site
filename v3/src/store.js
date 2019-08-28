import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        view: 'Landing'
    },
    mutations: {
        setView (state, view) {
            state.view = view
        }
    }
})

export default store