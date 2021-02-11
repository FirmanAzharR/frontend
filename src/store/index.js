import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/auth'
import SignUp from './modules/signup'
import Products from './modules/product'
import Dashboard from './modules/dashboard'
import Coupon from './modules/coupon'
import History from './modules/history'
import Profile from './modules/profile'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: { Auth, SignUp, Products, Dashboard, Coupon, History, Profile },
  state: {},
  mutations: {},
  action: {},
  getters: {},
  plugins: [
    createPersistedState({
      paths: [
        'Auth.user',
        'Products.productById',
        'Products.cart',
        'Profile.profile'
      ]
    })
  ]
})
