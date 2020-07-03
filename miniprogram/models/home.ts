import Request from '../utils/request'

interface IRequestData extends IPageData {
  keywords?: string
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

}