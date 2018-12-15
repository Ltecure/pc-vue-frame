
/* *** 提示消息组件 调用方式
  this.$Message({
    type: 'success', // 提示消息类型
    message: '恭喜你，成功调用', // 提示内容
    duration: 3000, // 自动关闭时间
    showCloseBtn: true, // 是否显示手动关闭按钮
    onClose: () => {} // 关闭回调函数
  })
*/
import MessageComponent from './Message.vue'
import Vue from 'vue'

let MessageConstructor = Vue.extend(MessageComponent)
let instance

const Message = (options = {}) => {
  if (typeof options === 'string') {
    options = {
      message: options
    }
  }
  instance = new MessageConstructor({
    data: options
  })
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.vm.visible = true
  return instance.vm
}

export default Message
