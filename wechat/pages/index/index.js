//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {
      nickName: '咸鱼'
    },
    info: '',
    input: ''
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  setInput: function(input) {
    var page = this
    page.input = input.detail.value
    wx.request({
      url: 'http://www.tuling123.com/openapi/api',
      data: {
        "key": "5d224310ed9d4f738f092ce4e05543ff",
        "info": page.input
      },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        console.log(res)
        console.log(res.data.text)
        page.setData({
          info: res.data.text,
          input: ''
        })
      },
      fail: function() {
        page.setData({
          info: ''
        })
      },
      complete: function() {
        // complete
      }
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
