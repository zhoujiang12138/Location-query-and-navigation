//index.js
//获取应用实例
let placedata = require('../../resource/gis')
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
  // markers: [],
    place:[],
    src: '../image/housetown.png',
    ite:[],
    nu:0
  },
  Input: function (e) {
    this.setData({
      inputvalue:e.detail.value  
    })
    var that = this
    var arr = []
    var a = []
    for (var i = 0; i < placedata.length; i++) {
      arr = placedata[i].name; var n = 0;
      for (var j = 0; j < arr.length; j++) {
        for (var k = 0; k < this.data.inputvalue.length; k++) {
          if ((arr[j].indexOf(this.data.inputvalue[k]) >= 0) && (this.data.inputvalue[k] != '')) {
            n++;
          }
        }
      }
      if (n == this.data.inputvalue.length) {
        a.push(placedata[i]);
      }
    }
    //this.data.place = a
    this.setData({
      place:a
    })
  },
  itemtap:function(event)
  { var n=0
  var s=this.data.place
   for (var i = 0; i <s.length;i++)
   {
   if ((event.detail.y - 50 < 64 * i+64) && (event.detail.y - 50>64*i))
     {
       app.globalData.lat = s[i].latitude
       app.globalData.lon = s[i].longitude
       app.globalData.nam = s[i].name
       app.globalData.ann = s[i].his,
         app.globalData.pla = s[i].loc,
         app.globalData.pic1 = s[i].pic
       console.log(s[i].name)
     } 
   }
  },
  getplaces() {
    let markers = [];
    for (let item of placedata) {
      let marker = this.createMarker(item);
      markers.push(marker)
    }
    return markers;
  },
  createpoint(point){
    let markers=[];
    let latitude = point.latitude;
    let longitude = point.longitude;
    let marker = {
      iconPath: "../image/location.png",
      id: point.id,
      name: point.name,
      latitude: latitude,
      longitude: longitude,
      width: 20,
      height: 20,
       callout: {
        content: point.name,
        bgColor: "#D3D3D3",
        color: "#000000",
        padding: 10,
        display: "ALWAYS",
        borderRadius: 5
      }
    };
    
    return marker;
  },
  //检索按钮//
  setsearch:function(e){
   var  that=this
    var arr = []
    var a = []
    for (var i = 0; i < placedata.length; i++) 
    {
      arr = placedata[i].name; var n = 0;
      for (var j = 0; j < arr.length; j++) 
      {
        for (var k = 0; k < this.data.inputvalue.length; k++) 
        {
          if ((arr[j].indexOf(this.data.inputvalue[k]) >= 0) && (this.data.inputvalue[k] != '')) 
          {
            n++;
          }
        }
      }
      if (n == this.data.inputvalue.length) 
      {
        a.push(arr);
      }
    }
        
        if(a.length==0)
        {
          wx.showToast({
            title: '地名检索不存在',
            icon: 'none',
            duration: 2000
          })
        }
        if(a.length==1)
        {
        wx.showActionSheet({
          itemList: [a[0]],
          success: function (res) 
          {
            console.log(a[res.tapIndex])
            that.setData({
              inputvalue: a[res.tapIndex]
            })           
          },
          fail: function (res) {
            console.log(res.errMsg)
          }
        })
        }
        if (a.length == 2) 
        {
          wx.showActionSheet({
            itemList: [a[0],a[1]],
            success: function (res) {
              console.log(a[res.tapIndex])
              that.setData({
                inputvalue: a[res.tapIndex]
              })
            },
            fail: function (res) {
              console.log(res.errMsg)
            }
          })
        }
        if (a.length == 3) {
          wx.showActionSheet({
            itemList: [a[0], a[1],a[2]],
            success: function (res) {
              console.log(a[res.tapIndex])
              that.setData({
                inputvalue: a[res.tapIndex]
              })
            },
            fail: function (res) {
              console.log(res.errMsg)
            }
          })
        }
        if (a.length == 4) {
          wx.showActionSheet({
            itemList: [a[0], a[1], a[2],a[3]],
            success: function (res) {
              console.log(a[res.tapIndex])
              that.setData({
                inputvalue: a[res.tapIndex]
              })
            },
            fail: function (res) {
              console.log(res.errMsg)
            }
          })
        }
        if (a.length == 5) {
          wx.showActionSheet({
            itemList: [a[0], a[1], a[2], a[3],a[4]],
            success: function (res) {
              console.log(a[res.tapIndex])
              that.setData({
                inputvalue: a[res.tapIndex]
              })
            },
            fail: function (res) {
              console.log(res.errMsg)
            }
          })
        }
        if (a.length >= 6) {
          wx.showActionSheet({
            itemList: [a[0], a[1], a[2], a[3], a[4],a[5]],
            success: function (res) {
              console.log(a[res.tapIndex])
              that.setData({
                inputvalue: a[res.tapIndex]
              })
            },
            fail: function (res) {
              console.log(res.errMsg)
            }
          })
        }
      
     /* else {
        wx.showToast({
          title: '地名不存在',
          icon: 'loading',
          duration: 3000
        })
      }*/
    
    
   
},
  //查询按钮//
  mysearch:function(e){
    var n=0
    for (let item of placedata) 
    {
      if (item.name == this.data.inputvalue) {
        app.globalData.lat = item.latitude
        app.globalData.lon = item.longitude
        app.globalData.nam = item.name
        app.globalData.ann = item.his,
          app.globalData.pla = item.loc,
          app.globalData.pic1 = item.pic,
          n++,
          wx.reLaunch({
            url: '../map/map'
          })
      }
    }
    if(n==0){
      wx.showToast({
        title: '地名不存在，请先检索',
        icon:'none',
        duration:2000
      })
    }
  },
setfind:function(e){
  this.setData({
    place: placedata
  })
  
},
myfind:function(e){

},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      place: placedata
    })
      },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    for (let item of placedata) {
      //this.data.markers.push(this.createpoint(item))
    } 
   // this.setData({
     // markers: this.data.markers
    //})  
  },
 /* click: function (e) {
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
      }
    })
    wx.openLocation({
      latitude: 30.539754,
      longitude: 114.363599,
      scale: 18,
      name: '武汉大学樱花城堡',
      address: '湖北省武汉市武昌区八一路299号'
    })
  },  */
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