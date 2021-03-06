// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailData: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this
    wx.showLoading({
      title: '加载中...',
    })
    wx.request({
      url: `https://douban.uieee.com/v2/movie/subject/${options.id}`,
      method: 'GET',
      header: {
        'Content-Type': 'application/text'
      },
      success: function (res) {
        console.log(res)
        wx.hideLoading()
        if (res.statusCode === 200) {
          _this.setData({
            detailData: res.data
          })
          wx.setNavigationBarTitle({
            title: res.data.title
          })
        }
      }
    })
  }
})