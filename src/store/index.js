import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/auth'
import SignUp from './modules/signup'
import Products from './modules/product'
import Dashboard from './modules/dashboard'
import Coupon from './modules/coupon'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: { Auth, SignUp, Products, Dashboard, Coupon },
  state: {},
  mutations: {},
  action: {},
  getters: {},
  plugins: [
    createPersistedState({
      path: ['Auth.user']
    })
  ]
})
