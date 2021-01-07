import axios from 'axios'

export default {
  state: {
    products: [],
    productSearch: '',
    sort: 'category_id ASC',
    category: '',
    totalRows: null,
    limit: 12,
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
    handleChangeCategory(state, payload) {
      state.category = payload
    }
  },
  actions: {
    getProducts(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `http://localhost:5000/product?page=${context.state.page}&limit=${context.state.limit}&category=${context.state.category}&search=&sort=${context.state.sort}`
          )
          .then(response => {
            console.log(response)
            resolve(response)
            context.state.products = response.data.data
            context.state.totalRows = response.data.pagination.totalData
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    },
    postProducts(context, data) {
      return new Promise((resolve, reject) => {
        axios
          .post('http://localhost:5000/product', data)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    },
    deleteProducts(context, data) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`http://localhost:5000/product/${data}`)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            //console.log(error)
            //console.log(reject)
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
    }
  }
}
