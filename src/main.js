import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { AvatarPlugin } from 'bootstrap-vue'
import { BadgePlugin } from 'bootstrap-vue'
import VueConfirmDialog from 'vue-confirm-dialog'
import 'animate.css'
Vue.use(VueConfirmDialog)
Vue.component('vue-confirm-dialog', VueConfirmDialog.default)
Vue.use(BadgePlugin)
Vue.use(AvatarPlugin)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false

Vue.directive('title', el => {
  ;(el.style.fontFamily = 'Rubik, sans-serif'),
    (el.style.fontSize = 26 + 'px'),
    (el.style.fontWeight = 'bold'),
    (el.style.color = '#7D4F2A'),
    (el.style.textAlign = 'center')
})

Vue.directive('focus', {
  inserted: function(el) {
    el.focus()
  }
})

Vue.directive('item-center', el => {
  el.style.textAlign = 'center'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
