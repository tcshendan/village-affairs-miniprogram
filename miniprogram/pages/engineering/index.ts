// index.ts
import { ROUTES } from '../../constant/index'

Page({
  data: {
    list: []
  },
  onLoad() {
    
  },
  onDetail() {
    wx.navigateTo({
      url: ROUTES.ENGINEERING_DETAIL_PAGE
    })
  }
})