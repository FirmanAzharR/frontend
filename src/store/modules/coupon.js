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
          .get(`${process.env.VUE_APP_PORT}/coupon`)
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
          .post(`${process.env.VUE_APP_PORT}/coupon`, data)
          .then(result => {
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    updateCoupon(context, data) {
      return new Promise((resolve, reject) => {
        axios
          .patch(`${process.env.VUE_APP_PORT}/coupon/${data.id}`, data.data)
          .then(result => {
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getCouponsById(context, data) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_PORT}/coupon/${data}`)
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
          .delete(`${process.env.VUE_APP_PORT}/coupon/${data}`)
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
