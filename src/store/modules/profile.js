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
    },
    updateProfiles(context, payload) {
      console.log(payload.id)
      console.log(payload.data)
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `${process.env.VUE_APP_PORT}/profile/${payload.id}`,
            payload.data
          )
          .then(response => {
            // console.log(payload.id)
            // console.log(payload.data)
            // console.log(response)
            context.state.profile = response.data.data
            resolve(response)
          })
          .catch(error => {
            console.log(error)
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
