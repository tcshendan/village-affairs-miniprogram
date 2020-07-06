// index.ts
import { ROUTES } from '../../constant/index'
// 获取应用实例
// const app = getApp<IAppOption>()

Page({
  data: {
    list: []
  },
  onLoad() {
    
  },
  onDetail() {
    wx.navigateTo({
      url: ROUTES.DETAIL_PAGE
    })
  }
})