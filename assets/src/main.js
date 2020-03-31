import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import axios from 'axios'
import { Socket } from 'phoenix'

// Import styles
import './styles/application.scss'

// const host = 'localhost:4000'
// const baseUrl = `http://${host}/api/`
// const socketUrl = `ws://${host}/socket`
// const host = 'warm-refuge-03953.herokuapp.com'
// const baseUrl = `https://${host}/api/`
// const socketUrl = `wss://${host}/socket`

Vue.prototype.$axios = axios.create({
  baseURL: process.env.VUE_APP_SERVER_URL
})

Vue.prototype.$socket = new Socket(process.env.VUE_APP_SOCKET_URL, { params: { userToken: '123' } })

// console.log(NODE_ENV)
console.log(process.env)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
