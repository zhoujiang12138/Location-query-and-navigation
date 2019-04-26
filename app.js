//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    array: ['八案山', '八把刀', '八把刀村窖湾', '八儿塘喻家', '八坊何家', '八房咀', '八房内', '八房张家', '八家田庄', '八角坳路', '八角垅祝家', '八蛇畈吕家', '八王庙卢家', '八屋', '八屋冲', '八屋李家', '八屋坡A', '八屋坡B', '八猪哲方家', '八庄河覃家', '八字门', '芭蕉凼', '芭蕉泉廖家', '芭茅塘'],
    lat:111,
    lon:111,
    nam: '',
    ann:'',
    pla:'',
    pic1:'',
   
  }
})