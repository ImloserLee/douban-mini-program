// component/movelist/movilist.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    movieType: {
      type: String,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    movieList: []
  },
  ready() {
    this.getData()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getData() {
      let _this = this;
      wx.request({
        url: `https://douban.uieee.com/v2/movie/${this.properties.movieType}`,
        method: 'GET',
        header: {
          'Content-Type': 'application/text'
        },
        success: function(res) {
          if (res.statusCode === 200) {
            _this.setData({
              movieList: res.data.subjects
            })
          }
        }
      })
    },
    changePages() {
      wx.navigateTo({
        url: '../detail/detail',
      })
    }
  }
})
