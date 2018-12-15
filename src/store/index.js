import Vue from 'vue'
import Vuex from 'vuex'

import modules from './modules'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules,
  strict: false
  // strict: process.env.NODE_ENV !== 'production'
})
