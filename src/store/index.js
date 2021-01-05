import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/auth'
import SignUp from './modules/signup'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: { Auth, SignUp },
  state: {
    name: 'firman azhar r'
  },
  mutations: {},
  action: {},
  getters: {}
})
