// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'base/scss/_global.scss'

// loading组件
import Loading from 'components/Loading'

// message组件
import MessageTips from 'components/MessageTips'

// dialog组件
import Dialog from 'components/Dialog/dialog.vue'

Vue.prototype.$Message = MessageTips
Vue.use(Loading)
Vue.component('CmDialog', Dialog)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
