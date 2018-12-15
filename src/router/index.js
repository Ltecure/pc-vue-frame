import Vue from 'vue'
import Router from 'vue-router'

// index
// import Index from '../views/index/index.vue'
const HelloComponent = () => import(/* webpackChunkName: "IndexHome" */ '../views/hello/hello.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/hello'
    },
    {
      path: '/hello',
      component: HelloComponent,
      name: 'hello'
    }
  ]
})
