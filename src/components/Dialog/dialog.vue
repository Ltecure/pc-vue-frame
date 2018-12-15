<template>
  <div class="cm-circle-dialog" v-show="visible" ref="dialog">
    <!-- <div class="dialog-mask" @click.stop="$emit('update:visible', false)"></div> -->
    <div class="dialog-mask"></div>
    <div class="dialog-content" :style="`width: ${contentWidth}px;`">
      <div class="dialog-close"><i class="icon icon-close" @click.stop="$emit('update:visible', false)"></i></div>
      <div class="dialog-slot"><slot></slot></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    contentWidth: {
      type: Number,
      default: 320
    }
  },
  watch: {
    visible (val) {
      if (val) { // 禁止鼠标滚轮事件
        this.$refs.dialog.addEventListener('mousewheel', (e) => {
          e.preventDefault()
        }, false)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .cm-circle-dialog {
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99999;
    .dialog-mask {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background-color: rgba(0, 0, 0, .4);
    }
    .dialog-content {
      @include center;
      padding: 0 14px;
      background-color: white;
      border-radius: 8px;
      box-sizing: border-box;
      .dialog-close {
        padding-top: 4px;
        cursor: pointer;
        text-align: right;
      }
    }
  }
</style>
