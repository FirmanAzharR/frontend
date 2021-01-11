import axios from 'axios'
//import router from '../../router'
export default {
  modules: {},
  state: {
    coupon: [],
    couponName: '',
    couponById: ''
  },
  mutations: {},
  actions: {
    getCoupon(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(`http://localhost:5000/coupon`)
          .then(response => {
            resolve(response)
            context.state.coupon = response.data.data
          })
          .catch(error => {
            reject(error)
          })
      })
    },
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
    },
    getCouponsById(context, data) {
      return new Promise((resolve, reject) => {
        axios
          .get(`http://localhost:5000/coupon/${data}`)
          .then(response => {
            context.state.couponName = response.data.data[0].coupon_name
            context.state.couponById = response.data.data[0]
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    deleteCoupon(context, data) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`http://localhost:5000/coupon/${data}`)
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
    getCoupons(state) {
      return state.coupon
    },
    getCouponName(state) {
      return state.couponName
    },
    getByIdCoupon(state) {
      return state.couponById
    }
  }
}
