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
        const {data} = await axios.post(`requests.json?auth=${token}`, payload)
        commit('addRequest', {...payload, id: data.name})
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
    },
    async fetchRequests({commit, dispatch}) {
      try {
        const token = store.getters['auth/token']
        const {data} = await axios.get(`requests.json?auth=${token}`)
        const requests = Object.keys(data).map(key => ({...data[key], id: key}))
        commit('setRequests', requests)
      } catch (e) {
        dispatch('setMessage', {
          value: e.message,
          type: 'danger'
        }, {root:true})
      }
    },
    async fetchRequestById({commit, dispatch}, id) {
      try {
        const token = store.getters['auth/token']
        const {data} = await axios.get(`requests/${id}.json/?auth=${token}`)
        return data
      } catch (e) {
        dispatch('setMessage', {
          value: e.message,
          type: 'danger'
        }, {root:true})
      }
    },
    async removeRequestById({dispatch}, id) {
      try {
        const token = store.getters['auth/token']
        await axios.delete(`requests/${id}.json/?auth=${token}`)
        dispatch('setMessage', {
          value: 'Deleted.',
          type: 'primary'
        }, {root:true})
      } catch (e) {
        dispatch('setMessage', {
          value: e.message,
          type: 'danger'
        }, {root:true})
      }
    },
    async updateRequestById({commit, dispatch}, request) {
      try {
        const token = store.getters['auth/token']
        await axios.put(`requests/${request.id}.json/?auth=${token}`, request)
        dispatch('setMessage', {
          value: 'Updated',
          type: 'primary'
        }, {root:true})
      } catch (e) {
        dispatch('setMessage', {
          value: e.message,
          type: 'danger'
        }, {root:true})
      }
    },
  },
  getters: {
    requests(state) {
      return state.requests
    }
  }
}
