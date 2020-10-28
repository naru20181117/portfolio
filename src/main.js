import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import router from './router'
import VueYoutube from 'vue-youtube'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/scss/style.scss'
// import {
//   library
// } from '@fortawesome/fontawesome-svg-core'
// import {
//   faUserSecret
// } from '@fortawesome/free-solid-svg-icons'
// import {
//   FontAwesomeIcon
// } from '@fortawesome/vue-fontawesome'


// library.add(faUserSecret)

// Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueYoutube)
Vue.use(BootstrapVue)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
