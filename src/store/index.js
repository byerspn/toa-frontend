import { createStore } from 'vuex'

export default createStore({
  state: {
    isAuthenticated: false,
    token: '',
    userId: ''
  },
  mutations: {
    initializeStore(state) {
      if(localStorage.getItem('token')) {
        state.token = localStorage.getItem('token')
        state.userId = localStorage.getItem('userId')
        state.isAuthenticated = true
      } else {
        state.token = ''
        state.userId = ''
        state.isAuthenticated = false
      }
    },
    setToken(state, token, userId) {
      state.token = token
      state.userId = userId
      state.isAuthenticated = true
      localStorage.setItem('token', token)
    },
    removeToken(state) {
      state.token = ''
      state.userId = ''
      state.isAuthenticated = false
      localStorage.removeItem('token')
    }
  },
  actions: {
  },
  modules: {
  }
})
