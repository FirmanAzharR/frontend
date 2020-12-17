import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import DetailProduct from '../views/DetailProduct.vue'
import AddProduct from '../views/AddProduct.vue'
import AddCoupon from '../views/AddCoupon.vue'
import EditCoupon from '../views/EditCoupon.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/detailproduct',
    name: 'DetailProduct',
    component: DetailProduct
  },
  {
    path: '/addproduct',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/addcoupon',
    name: 'AddCoupon',
    component: AddCoupon
  },
  {
    path: '/editcoupon',
    name: 'EditCoupon',
    component: EditCoupon
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
