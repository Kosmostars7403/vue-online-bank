import { createStore } from 'vuex'
import auth from './auth/auth.module'
import request from './auth/request.module'

export default createStore({
  state() {
    return {
      errorMessage: null
    }
  },
  mutations: {
    setErrorMessage(state, message) {
      state.errorMessage = message
    },
    clearErrorMessage(state) {
      state.errorMessage = null
    }
  },
  actions: {
    setMessage({commit}, message) {
      commit('setErrorMessage', message)
      setTimeout(() => commit('clearErrorMessage'), 5000)
    }
  },
  modules: {
    auth,
    request
  }
})