import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Product from '../views/Product.vue'
import AddProduct from '../views/AddProduct.vue'
import EditProduct from '../views/EditProduct.vue'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresVisitor: true }
  },
  {
    path: '/',
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
    path: '/addproduct',
    name: 'AddProduct',
    component: AddProduct,
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
