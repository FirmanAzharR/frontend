import axios from 'axios'
//import router from '../../router'
export default {
  modules: {},
  state: {
    profile: ''
  },
  mutations: {
    setProfile(state, payload) {
      state.profile = payload
    }
  },
  actions: {
    getProfiles(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_PORT}/profile/${payload}`)
          .then(response => {
            resolve(response)
            context.commit('setProfile', response.data.data[0])
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    updateProfiles(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `${process.env.VUE_APP_PORT}/profile/${payload.id}`,
            payload.data
          )
          .then(response => {
            context.commit('setProfile', response.data.data[0])
            resolve(response)
          })
          .catch(error => {
            reject(error.response.data.msg)
          })
      })
    },
    updatePassword(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `${process.env.VUE_APP_PORT}/profile/password/${payload.id}`,
            payload.data
          )
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    updateForgotPassword(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `${process.env.VUE_APP_PORT}/profile/forgot/password/update`,
            payload
          )
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error.response)
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
