// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 视频详细数据
    videoInfo:{},
    // 推荐视频数据,
    recommendList:[],
    // 获取评论数据
    commentData:[]
  },

  //根据视频的id获取视频数据
  getVideoDetail(id){
    id=id||0
    wx.request({
      // id记得修改
      url: 'https://www.fastmock.site/mock/c8b94bc7b5f6687ccfe99d2c4132803f/bili/videoDetail?id='+id,
      success:(res)=>{
        this.setData({
          videoInfo:res.data.data.videoInfo
        })
      }
    })
  },

  // 获取推荐列表
  getRecommendVideo(id){
    id=id||0
    wx.request({
      url: 'https://www.fastmock.site/mock/c8b94bc7b5f6687ccfe99d2c4132803f/bili/othersList?id='+id,
      success:(res)=>{
        this.setData({
          recommendList:res.data.data.othersList
        })
      }
    })
  },

  // 获取评论数据
  getCommentData(id){
    id=id||0
    wx.request({
      url: 'https://www.fastmock.site/mock/c8b94bc7b5f6687ccfe99d2c4132803f/bili/commentsList?id='+id,
      success:(res)=>{
        this.setData({
          commentData:res.data.data.commentData
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 根据id获取视频数据
    this.getVideoDetail(options.id)
    // 根据id获取推荐视频数据
    this.getRecommendVideo(options.id)
    // 获取评论数据
    this.getCommentData(options.id)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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