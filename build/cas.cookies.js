const request = require('request')

const { url, username, password } = require('../package').casUserInfo

function getCasCookies () {
  return new Promise((resolve, reject) => {
    request({
      url,
      method: 'post',
      form: {
        username,
        password
      },
      strictSSL: false
    }, (err, response, body) => {
      if (err) {
        console.log(err)
        reject(err)
      } else {
        const cookies = /tickets\/(.*)\"\smethod.*/g.exec(body)[1]
        console.log(`cas ${username} ${cookies}`)

        resolve(cookies)
      }
    })
  })

}

module.exports = getCasCookies
