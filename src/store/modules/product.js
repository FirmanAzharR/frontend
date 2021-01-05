import axios from 'axios'
//import router from '../../router'
export default {
  modules: {},
  state: {
    products: {}
  },
  mutations: {
    setUser(state, dataProducts) {
      state.products = dataProducts
    }
  },
  actions: {
    getProduct(context, data) {
      return new Promise((resolve, reject) => {
        axios
          .post('http://localhost:5000/user/register', data)
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
