import axios from 'axios'
//import router from '../../router'
export default {
  modules: {},
  state: {},
  mutations: {},
  actions: {
    addCoupon(context, data) {
      return new Promise((resolve, reject) => {
        axios
          .post('http://localhost:5000/coupon', data)
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
