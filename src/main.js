import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/scss/style.scss'

// import {
//   library
// } from '@fortawesome/fontawesome-svg-core'
// import {
//   faCoffee
// } from '@fortawesome/free-solid-svg-icons'
// import {
//   FontAwesomeIcon
// } from '@fortawesome/vue-fontawesome'

// library.add(faCoffee)

// Vue.component('font-awesome-icon', FontAwesomeIcon)

// library.add(fas, fab, far)

Vue.config.productionTip = false

Vue.use(BootstrapVue)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
