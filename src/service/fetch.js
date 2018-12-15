import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: '/', // api的base_url
  params: {
    '_': new Date().getTime()
  }
  // timeout: 30000 // 请求超时时间
})
// 忽略为空的参数
// function ignoreData(config) {
//   if (config.data) {
//     // const objData = JSON.parse(config.data)
//     Object.keys(config.data).forEach((key) => {
//       if (config.data[key] === '') {
//         delete config.data[key]
//       }
//     })
//   }
// }

// 过滤错误信息
function replaceErrorMsg(message) {
  const reg = /\(\d+,\d+\);[^(\(\d+,\d+\);)]+\(\d+,\d+\);/g
  return message.replace(reg, '')
}

// request拦截器
service.interceptors.request.use(config => {
  // Do something before request is sent
  // if (store.getters.token) {
  //   config.headers['X-Token'] = store.getters.token; // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
  // }
  // ignoreData(config)
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    /**
    * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
    * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
    */
    const res = response.data
    // 解析PS错误的信息
    if (res.errorMessage) {
      res.errorMessage = replaceErrorMsg(res.errorMessage)
    }
    if (response.status === 401) { // 401 未登录授权
    } else if (response.status !== 200) {
      return Promise.reject(res)
    } else {
      // 解析PS错误的信息
      // if (response.data.message) {
      //   response.data.message = replaceErrorMsg(response.data.message)
      // }
      return res
    }
  },
  error => {
    if (error.response) {
      const response = error.response
      if (response.status === 401) {
        // const href = window.location.href
        // // location.href = encodeURIComponent(location.origin + response.headers.get('authenticationlocation') + `?returnUrl=${href}`)
        // const returnUrl = encodeURIComponent(href)
        // location.replace(location.origin + response.headers['authenticationlocation'] + `?returnUrl=${returnUrl}`)
      }
    }
    console.log('err' + error)// for debug
    return Promise.reject(error)
  }
)

export default service
