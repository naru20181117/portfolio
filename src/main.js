import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from '@/App.vue'
import router from '@/router'
import VueYoutube from 'vue-youtube'

import firebase from "firebase/app";
import { firebaseConfig } from '@/firebaseConfig.js'
import "firebase/analytics";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/scss/style.scss'

// library.add(faUserSecret)

// Vue.component('font-awesome-icon', FontAwesomeIcon)
firebase.initializeApp(firebaseConfig);
firebase.analytics();

Vue.config.productionTip = false

Vue.use(VueYoutube)
Vue.use(BootstrapVue)
Vue.prototype.$analytics = firebase.analytics();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
