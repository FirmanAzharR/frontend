import axios from 'axios'
//import router from '../../router'
export default {
  modules: {},
  state: {
    profile: ''
  },
  mutations: {},
  actions: {
    getProfiles(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_PORT}/profile/${payload}`)
          .then(response => {
            resolve(response)
            context.state.profile = response.data.data[0]
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  },
  getters: {
    getProfile(state) {
      return state.profile
    }
  }
}
