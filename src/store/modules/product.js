import axios from 'axios'

export default {
  state: {
    products: [],
    productById: '',
    productSearch: '',
    category: '',
    totalRows: null,
    limit: 3,
    page: 1
  },
  mutations: {
    // tambahkan
    setProduct(state, payload) {
      // payload = response.data
      state.products = payload.data
      state.totalRows = payload.pagination.totalData
    },
    handleChangePage(state, payload) {
      state.page = payload
    },
    productSearchs(state, payload) {
      state.productSearch = payload
    },
    setProductById(state, payload) {
      state.productById = payload
    }
  },
  actions: {
    getProducts(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `${process.env.VUE_APP_PORT}/barang/get-barang?page=${context.state.page}&limit=${context.state.limit}&search=${context.state.productSearch}`
          )
          .then(response => {
            resolve(response)
            context.state.products = response.data.data
            context.state.totalRows = response.data.pagination.totalData
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getProductById(context, id) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_PORT}/barang/get-barang/${id}`)
          .then(response => {
            context.commit('setProductById', response.data.data[0])
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    postProducts(context, data) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_PORT}/barang/add-barang`, data)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    patchProducts(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `${process.env.VUE_APP_PORT}/barang/update-barang/${payload.id_product}`,
            payload.data
          )
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            //console.log(error)
            reject(error.response)
            //console.log(reject)
          })
      })
    },
    deleteProducts(context, id) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`${process.env.VUE_APP_PORT}/barang/delete-barang/${id}`)
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
    getPageProduct(state) {
      return state.page
    },
    getLimitProduct(state) {
      return state.limit
    },
    getDataProduct(state) {
      return state.products
    },
    getTotalRowsProduct(state) {
      return state.totalRows
    },
    getProductById(state) {
      return state.productById
    }
  }
}
