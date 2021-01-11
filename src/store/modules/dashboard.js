import axios from 'axios'
//import router from '../../router'
export default {
  modules: {},
  state: {
    dash: ''
  },
  mutations: {},
  actions: {
    dashboard(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_PORT}/dashboard`)
          .then(result => {
            resolve(result)
            //console.log(result)
            context.state.dash = result.data.data
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  },
  getters: {
    getDashboard(state) {
      return state.dash
    }
  }
}
