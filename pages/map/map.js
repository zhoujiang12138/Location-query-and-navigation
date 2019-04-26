var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    txt1:"去这里",
    txt2:"详细介绍",
    txt3:"返回首页",
    markers: [
      
      /*id: 0,
      latitude: parseFloat(app.globalData.lat),
      longitude: parseFloat(app.globalData.lat),
      iconPath: "../image/location.png",
      width: 15,
      height: 15,
      callout: {
        content: app.globalData.nam,
        bgColor: "#D3D3D3",
        color: "#000000",
        padding: 10,
        display: "ALWAYS",
        borderRadius: 5
      }*/
    ],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   // console.log(app.globalData.nam)
   // console.log(app.globalData.lat)
   // console.log(app.globalData.lon)
    this.setData({
      markers: this.createMarker()
    })
//console.log(this.data.markers)
   /* this.setData({
      latitude: app.globalData.lat,
      longitude: app.globalData.lon,
      content: app.globalData.nam
    })
    let latitude = app.globalData.lat;
    let longitude = app.globalData.lon;
    let name = app.globalData.nam;
    let marker = {
      iconPath: "../image/location.png",
      id:  0,
      name: name,
      latitude: latitude,
      longitude: longitude,
      width: 15,
      height: 15,
      callout: {
        content: name,
        bgColor: "#D3D3D3",
        color: "#000000",
        padding: 10,
        display: "ALWAYS",
        borderRadius: 5
      }
    };
    this.data.markers.push(marker);*/
  },
  introduction: function (e) {
    wx.navigateTo({
      url: '../intro/intro'
    })
  },
  returnindex:function(e){
    wx.reLaunch({
      url: '../index/index'
    })
  },
  createMarker() {
    let markers=[];
    let latitude = app.globalData.lat;
    let longitude = app.globalData.lon;
    let marker = {
      iconPath: "../image/location.png",
      id:  0,
      name: app.globalData.nam,
      latitude: latitude,
      longitude: longitude,
      width: 20,
      height: 20,
      callout: {
        content: app.globalData.nam,
        bgColor: "#D3D3D3",
        color: "#000000",
        padding: 10,
        display: "ALWAYS",
        borderRadius: 5
      }
    };
   markers.push(marker);
    return markers;
  },
  gotohere: function (e) {
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
      }
    })
    wx.openLocation({
      latitude: app.globalData.lat*1,
      longitude: app.globalData.lon*1,
      scale: 18,
      name: app.globalData.nam,
    })
  },  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.mapCtx = wx.createMapContext('myMap')
  },
  

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})