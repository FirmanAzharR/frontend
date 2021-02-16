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
import History from '../views/History.vue'
import Profile from '../views/Profile.vue'
import ConfirmOrder from '../views/ConfirmOrder.vue'
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
    component: EditProduct,
    meta: { requiresAuth: true }
  },
  {
    path: '/detailproduct/:id',
    name: 'DetailProduct',
    component: DetailProduct,
    meta: { requiresAuth: true }
  },
  {
    path: '/addproduct',
    name: 'AddProduct',
    component: AddProduct,
    meta: { requiresAuth: true }
  },
  {
    path: '/addcoupon',
    name: 'AddCoupon',
    component: AddCoupon,
    meta: { requiresAuth: true }
  },
  {
    path: '/editcoupon/:id',
    name: 'EditCoupon',
    component: EditCoupon,
    meta: { requiresAuth: true }
  },
  {
    path: '/yourcart',
    name: 'YourCart',
    component: YourCart,
    meta: { requiresAuth: true }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  {
    path: '/history',
    name: 'History',
    component: History,
    meta: { requiresAuth: true }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { requiresAuth: true }
  },
  {
    path: '/confirm-order',
    name: 'Confirm',
    component: ConfirmOrder,
    meta: { requiresAuth: true }
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
