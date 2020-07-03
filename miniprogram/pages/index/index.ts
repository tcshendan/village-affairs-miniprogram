// index.ts
import HomeModel from '../../models/home'
import Load from '../../utils/load'
// 获取应用实例
const app = getApp<IAppOption>()
const loadModule = new Load()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    list: []
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  onLoad() {
    // this.loadInfo()
    // this.loadInitList(this)
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true,
          })
        },
      })
    }
  },
  getUserInfo(e: any) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
    })
  },
  async loadInfo() {
    try {
      const array = await new HomeModel().getInfo()
      console.log(array)
    } catch (err) {
      console.log(err)
    }
  },
  loadInitList: loadModule.withLoading(async (that: PageInstance, { pageNum, pageSize }: IPageData) => {
    try {
      const { records, total } = await new HomeModel().getMyFollowList({
        pageNum,
        pageSize
      })
      that.setData({ list: records })
      loadModule.setTotal(total)
    } catch (err) {
      console.log(err)
    } finally {
      loadModule.hideLoading(that)
    }
  }),
})
