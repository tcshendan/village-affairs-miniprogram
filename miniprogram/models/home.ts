import Request from '../utils/request'

interface IRequestData extends IPageData {
  keywords?: string
}

export interface IPartyWorkItemData {
  liststyle: number,
  title?: string,
  name?: string,
  titleText?: string
  type: string,
  date: string
}

export interface IPartyWorkListData {
  [propName: string]: IPartyWorkItemData[]
}

export default class HomeModel extends Request {
  constructor() {
    super()
  }

  getInfo(): Promise<string[]> {
    return this.request({
      url: '/record/home/product/follow'
    })
  }

  getMyFollowList({ pageNum, pageSize, keywords = '' }: IRequestData): Promise<IResponseListData<{
    product: string,
    sales: number,
    salesAvgPrice: number,
    yield: number
  }>> {
    return this.request({
      url: '/record/page/follow',
      data: {
        pageNum,
        pageSize,
        keywords
      }
    })
  }

  getPartyWorkList(): Promise<IPartyWorkListData> {
    return this.request({
      url: '/getPartyWorkList'
    })
  }

}