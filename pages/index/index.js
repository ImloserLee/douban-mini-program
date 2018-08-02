//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    winHeight: '',
    currentTab: 0
  },
  switchTab: function(e) {
    this.setData({
      currentTab: e.detail.current
    });
  },
  swichNav: function(e) {
    var cur = e.target.dataset.current;
    if (this.data.currentTab == cur) { return false; }
    this.setData({
      currentTab: cur
    })
  },
  onLoad() {
    var that = this;
    //  高度自适应
    wx.getSystemInfo({
      success: function (res) {
        var clientHeight = res.windowHeight,
            clientWidth = res.windowWidth,
            rpxR = 750 / clientWidth;
            var calc = clientHeight * rpxR - 80;
            console.log(calc)
            that.setData({
              winHeight: calc
            });
      }
    });

  }
})
