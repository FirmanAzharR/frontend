import axios from 'axios'
//import router from '../../router'
export default {
  modules: {},
  state: {
    chart: '',
    card: '',
    dataReady: false,
    filter: 'month'
  },
  mutations: {
    setCard(state, payload) {
      state.card = payload
    },
    setChart(state, payload) {
      state.chart = payload
      state.dataReady = true
    },
    handleFilter(state, payload) {
      state.filter = payload
    }
  },
  actions: {
    cardActions(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_PORT}/dashboard`)
          .then(result => {
            resolve(result)
            context.commit('setCard', result.data.data)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    chartActions(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `${process.env.VUE_APP_PORT}/dashboard/chart/${context.state.filter}`
          )
          .then(result => {
            resolve(result)
            context.commit('setChart', result.data.data)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  },
  getters: {
    getChart(state) {
      return state.chart
    },
    getCard(state) {
      return state.card
    },
    statusData(state) {
      return state.dataReady
    },
    getFilter(state) {
      return state.filter
    }
  }
}
