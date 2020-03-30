Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 首页导航数据
    navList: [1],
    navIndex: 0,
    // 轮播图数据
    swiperList: [],
    // video 数据
    videoList:[]
  },

  // 获取首页导航数据
  getNavList() {
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/navList',
      success: (res) => {
        if (res.statusCode === 200) {
          this.setData({
            navList: res.data.data.navList
          })
        }
      }
    })
  },

  // 点击首页导航项事件
  activeNav(e) {
    this.setData({
      navIndex: e.target.dataset.index
    })
  },

  // 获取轮播图数据
  getSwiperList() {
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/swiperList',
      success: (res) => {
        this.setData({
          swiperList: res.data.data.swiperList
        })
      }
    })
  },
  // 获取video数据
  getVideoList(){
    wx.request({
      url: 'https://www.fastmock.site/mock/c8b94bc7b5f6687ccfe99d2c4132803f/bi/videosList',
      success:(res)=>{
        this.setData({
          videoList:res.data.data.videosList
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNavList()
    // 获取轮播图数据
    this.getSwiperList()
    // 获取video数据
    this.getVideoList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

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