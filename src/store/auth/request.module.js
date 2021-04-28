import axios from '../../axios/axios'
import store from '../index'

export default {
  namespaced: true,
  state() {
    return {
      requests: []
    }
  },
  mutations: {
    setRequests(state, requests) {
      state.requests = requests
    },
    addRequest(state, request) {
      state.requests.push(request)
    }
  },
  actions: {
    async create({commit, dispatch}, payload) {

      try {
        const token = store.getters['auth/token']
        const response = axios.post(`requests.json?auth=${token}`, payload)
        commit('addRequest', response.data)
        dispatch('setMessage', {
          value: 'Request had been created',
          type: 'primary'
        }, {root:true})
      } catch (e) {
        dispatch('setMessage', {
          value: e.message,
          type: 'danger'
        }, {root:true})
      }
    }
  },
  getters: {
    request(state) {
      return state.requests
    }
  }
}
