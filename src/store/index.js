import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/auth'
import Products from './modules/product'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: { Auth, Products },
  state: {},
  mutations: {},
  action: {},
  getters: {},
  plugins: [
    createPersistedState({
      paths: ['Auth.user', 'Products.productById']
    })
  ]
})
