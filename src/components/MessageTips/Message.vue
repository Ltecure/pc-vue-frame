<template>
  <transition name="vip-message-fade">
    <div :class="[
            'vip-message-tips',
            `vip-message--${type}`
            ]" v-show="visible"
          @mouseenter="clearTimer"
          @mouseleave="startTimer">
      <i :class="[
            'vip-message-status',
            `icon-status--${type}`
            ]">
      </i>
      <p>{{ message }}</p>
      <i class="vip-message-closeBtn" v-if="showCloseBtn" @click="close"></i>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Message',
  data () {
    return {
      duration: 3000, // 毫秒 自动关闭
      message: '用心点，要自己填的~O(∩_∩)O~',
      timer: null,
      type: 'error',
      visible: false,
      closed: false,
      onClose: null, // 关闭时的回调函数
      showCloseBtn: true // 是否显示关闭按钮
    }
  },
  mounted () {
    this.startTimer()
  },
  methods: {
    startTimer () {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close()
          }
        }, this.duration)
      }
    },
    clearTimer () {
      clearTimeout(this.timer)
    },
    close () {
      this.closed = true
      this.clearTimer()
      if (typeof this.onClose === 'function') {
        this.onClose(this)
      }
    },
    destroyElement () {
      this.$el.removeEventListener('transitionend', this.destroyElement)
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    }
  },
  watch: {
    closed (newVal) {
      if (newVal) {
        this.visible = false
        this.$el.addEventListener('transitionend', this.destroyElement)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .vip-message-tips {
    min-width: 380px;
    box-sizing: border-box;
    border-radius: 4px;
    // border: 1px solid #ebeef5;
    position: fixed;
    left: 50%;
    top: 20px;
    transform: translateX(-50%);
    transition: opacity .3s,transform .4s;
    overflow: hidden;
    padding: 15px 15px 15px 20px;
    display: flex;
    align-items: center;
    z-index: 999;
    font-size: 14px;
  }
  .vip-message--success {
    box-shadow: 0 1px 6px rgba(0,0,0,.2);
    background-color: white;
    border: none;
    color: #ec4280;
  }
  .vip-message--warning {
    background-color: #fdf6ec;
    border: 1px solid #faecd8;
    color: #e6a23c;
  }
  .vip-message--error {
    background-color: #fef0f0;
    border: 1px solid #fde2e2;
    color: #f56c6c;
  }
  .vip-message-status {
    margin-right: 10px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    text-align: center;
    position: relative;
    &:before {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: 12px;
    }
  }
  .icon-status--success {
    background-color: #ec4280;
    &:before {
      content: '\2713';
      color: white;
    }
  }
  .icon-status--warning {
    background-color: #e6a23c;
    &:before {
      content: '!';
      color: white;
    }
  }
  .icon-status--error {
    background-color: #f56c6c;
    &:before {
      content: '\2715';
      color: white;
    }
  }
  .vip-message-closeBtn {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    cursor: pointer;
    color: #c0c4cc;
    font-size: 16px;
    &:before {
      content: '\2715';
    }
  }
  .vip-message-fade-enter,.vip-message-fade-leave-active{
    opacity: 0;
    -webkit-transform: translate(-50%,-100%);
    transform: translate(-50%,-100%)
  }
</style>
