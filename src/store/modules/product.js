import axios from 'axios'

export default {
  state: {
    products: [],
    productById: '',
    productDetails: [],
    productSearch: '',
    sort: 'category_id ASC',
    category: '',
    totalRows: null,
    limit: 12,
    page: 1,
    cart: []
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
    },
    handleSort(state, payload) {
      state.sort = payload
    },
    productSearchs(state, payload) {
      state.productSearch = payload
    },
    cart(state, payload) {
      state.cart = [...state.cart, payload]
      localStorage.setItem('cart', JSON.stringify(state.cart))
    }
  },
  actions: {
    getProducts(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `http://localhost:5000/product?page=${context.state.page}&limit=${context.state.limit}&category=${context.state.category}&search=${context.state.productSearch}&sort=${context.state.sort}`
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
          .get(`http://localhost:5000/product/${id}`)
          .then(response => {
            context.state.productById = response.data.data[0]
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getProductDetail(context, id) {
      return new Promise((resolve, reject) => {
        axios
          .get(`http://localhost:5000/product/productDetail/${id}`)
          .then(response => {
            context.state.productDetails = response.data.data
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
    patchProducts(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `http://localhost:5000/product/${payload.id_product}`,
            payload.data
          )
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            //console.log(error)
            reject(error)
            //console.log(reject)
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
    },
    getProductDetail(state) {
      return state.productDetails
    },
    getCart(state) {
      let getCart = localStorage.getItem('cart')
      getCart = JSON.parse(getCart)
      if (getCart) {
        return (state.cart = getCart)
      } else {
        return (state.cart = [])
      }
    }
  }
}
