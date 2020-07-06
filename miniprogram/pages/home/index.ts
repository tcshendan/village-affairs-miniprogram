// index.ts
import { ROUTES } from '../../constant/index'
// 获取应用实例
// const app = getApp<IAppOption>()

Page({
  data: {

  },
  onLoad() {
    
  },
  onGoToAnnouncement() {
    wx.navigateTo({
      url: ROUTES.ANNOUNCEMENT_PAGE
    })
  },
  onGoToReport() {
    wx.navigateTo({
      url: ROUTES.REPORT_PAGE
    })
  }
})