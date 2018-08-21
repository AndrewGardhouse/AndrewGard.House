import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(VueAnalytics, {
  id: ' UA-58720312-1',
  router
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
