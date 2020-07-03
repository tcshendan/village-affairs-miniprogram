/// <reference path="./types/index.d.ts" />

interface IAppOption {
  globalData: {
    userInfo?: WechatMiniprogram.UserInfo,
  }
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}

interface IResponseListData<T> {
  records: Array<T>,
  total: number
}

interface IPageData {
  pageNum: number,
  pageSize: number
}

type DataOption = Record<string, any>
type CustomOption = Record<string, any>
type PageInstance = WechatMiniprogram.Page.Instance<DataOption, CustomOption>