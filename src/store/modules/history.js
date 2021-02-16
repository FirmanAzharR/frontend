import axios from 'axios'
//import router from '../../router'
export default {
  modules: {},
  state: {
    history: [],
    historyById: '',
    transById: '',
    page: 1,
    limit: 1,
    order: '',
    totalRows: null
  },
  mutations: {
    handleNavigationConfirm(state, payload) {
      state.page = payload
    },
    setOrders(state, payload) {
      state.order = payload
    }
  },
  actions: {
    getHistorys(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_PORT}/transaction/${payload}`)
          .then(response => {
            context.state.history = response.data.data
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getOrders(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `${process.env.VUE_APP_PORT}/checkout/confirm/customer-order?page=${context.state.page}&limit=${context.state.limit}`
          )
          .then(response => {
            context.state.totalRows = response.data.data.pageInfo.totalData
            context.commit('setOrders', response.data.data.result[0])
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getTransById(context, data) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `${process.env.VUE_APP_PORT}/transaction/get/transaction/${data}`
          )
          .then(response => {
            context.state.transById = response.data.data[0]
            resolve(response.data.data[0])
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
            context.state.historyById = response.data.data
            resolve(response.data.data)
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
    },
    markDone(content, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `${process.env.VUE_APP_PORT}/checkout/confirm/order-status`,
            payload
          )
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
    getPageOrder(state) {
      return state.page
    },
    getLimit(state) {
      return state.limit
    },
    getTotal(state) {
      return state.totalRows
    },
    getOrdersData(state) {
      return state.order
    },
    getHistory(state) {
      return state.history
    },
    getByIdHistory(state) {
      return state.historyById
    },
    getByIdTrans(state) {
      return state.transById
    }
  }
}
