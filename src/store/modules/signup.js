import axios from 'axios'
//import router from '../../router'
export default {
  modules: {},
  state: {},
  mutations: {},
  actions: {
    signup(context, data) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_PORT}/user/register`, data)
          .then(result => {
            resolve(result)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    }
  }
}
