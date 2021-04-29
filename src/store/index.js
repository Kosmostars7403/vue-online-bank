import { createStore } from 'vuex'
import auth from './modules/auth.module'
import request from './modules/request.module'

export default createStore({
  state() {
    return {
      errorMessage: null,
      sidebar: false
    }
  },
  mutations: {
    setErrorMessage(state, message) {
      state.errorMessage = message
    },
    clearErrorMessage(state) {
      state.errorMessage = null
    },
    openSideBar(state) {
      state.sidebar = true
    },
    closeSideBar(state) {
      state.sidebar = false
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
