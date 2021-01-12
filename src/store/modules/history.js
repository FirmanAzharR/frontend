import axios from 'axios'
//import router from '../../router'
export default {
  modules: {},
  state: {
    history: [],
    historyById: []
  },
  mutations: {},
  actions: {
    getHistorys(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_PORT}/transaction/${payload}`)
          .then(response => {
            resolve(response)
            context.state.history = response.data.data
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getHistoryById(context, data) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_PORT}/transaction/detail/${data}`)
          .then(response => {
            console.log(response)
            context.state.historyById = response.data.data
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    deleteHistory(context, data) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`${process.env.VUE_APP_PORT}/transaction/${data}`)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  },
  getters: {
    getHistory(state) {
      return state.history
    },
    getByIdHistory(state) {
      return state.historyById
    }
  }
}
