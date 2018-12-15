// vuex 格式
const HELLO = 'HELLO'

export default {
  state: {
    hello: false
  },
  mutations: {
    [HELLO]: (state, helloStatu = false) => {
      state.hello = helloStatu
    }
  },
  actions: {
    setHello ({commit, state}, statu = false) {
      return new Promise((resolve, reject) => {
        commit(HELLO, statu)
      })
    }
  }
}
