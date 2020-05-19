import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.config.errorHandler = (err, vm, info) => {
  console.log(`err: ${err}`, `vm:`, vm, `info: ${info}`)
  return true
}

new Vue({
  render: h => h(App),
}).$mount('#app')
