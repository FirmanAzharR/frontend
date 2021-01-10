import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Product from '../views/Product.vue'
import DetailProduct from '../views/DetailProduct.vue'
import AddProduct from '../views/AddProduct.vue'
import EditProduct from '../views/EditProduct.vue'
import AddCoupon from '../views/AddCoupon.vue'
import EditCoupon from '../views/EditCoupon.vue'
import YourCart from '../views/YourCart.vue'
import Dashboard from '../views/Dashboard.vue'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Login',
    name: 'Login',
    component: Login,
    meta: { requiresVisitor: true }
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product',
    name: 'Product',
    component: Product,
    meta: { requiresAuth: true }
  },
  {
    path: '/editproduct/:id',
    name: 'EditProduct',
    component: EditProduct
  },
  {
    path: '/detailproduct/:id',
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
  },
  {
    path: '/yourcart',
    name: 'YourCart',
    component: YourCart
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLogin) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.isLogin) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
