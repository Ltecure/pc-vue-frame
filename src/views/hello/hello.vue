<template>
  <div class="app-container">
    <i class="icon icon-vue"></i>
    <div class="double-button">
      <button @click="deleteDialog = true">open dialog</button>
      <button @click="openMsg('success')">open success</button>
      <button @click="openMsg('error')">open error</button>
      <button @click="openMsg('warning')">open warning</button>
    </div>
    <div class="hello">Hello Vue</div>
    <cm-dialog :visible.sync="deleteDialog">
      <div class="delete-tips">
        <p class="delete-label">提示</p>
        <p class="delete-content">需要给你打个招呼嘛？</p>
        <h3 v-show="hello">Hello^_^欢迎加入Vue大家庭!!!</h3>
        <p class="send-know">
          <button class="button" @click="setHello(false)">取消</button>
          <button class="button" @click="setHello(true)">确定</button>
        </p>
      </div>
    </cm-dialog>
  </div>
</template>

<script>
import './hello.scss'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'hello',
  data () {
    return {
      deleteDialog: false
    }
  },
  computed: {
    ...mapGetters(['hello'])
  },
  methods: {
    ...mapActions(['setHello']),
    openMsg (type) {
      this.$Message({
        type: type,
        message: '调用成功'
      })
    }
  }
}
</script>
