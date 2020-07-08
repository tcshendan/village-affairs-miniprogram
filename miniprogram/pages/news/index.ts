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
      url: ROUTES.NEWS_DETAIL_PAGE
    })
  }
})