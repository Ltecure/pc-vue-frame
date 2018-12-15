import LoadingComponent from './Loading.vue'

let $vm

const plugin = {
  install(vue) {
    if (!$vm) {
      const Loading = vue.extend(LoadingComponent)

      $vm = new Loading({
        el: document.createElement('div')
      })

      document.body.appendChild($vm.$el)
    }

    const Load = {
      show() {
        if (!$vm.showLoading) {
          $vm.showLoading = true
        }
      },
      hide() {
        $vm.showLoading = false
      }
    }

    if (!vue.$loading) {
      vue.$loading = Load
    }

    vue.mixin({
      created: function() {
        this.$loading = vue.$loading
      }
    })
  }
}

export default plugin
