// index.ts
import { ROUTES } from '../../constant/index'

Page({
  data: {
    ROUTES
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
  },
  onTurnItemPage(e: { currentTarget: any }) {
    const url = e.currentTarget.dataset.url
    wx.navigateTo({
      url
    })
  }
})