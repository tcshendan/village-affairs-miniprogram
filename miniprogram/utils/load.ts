type FnCallBack = (...args: any[]) => any

class Load {
  private pageSize: number
  private pageNum: number
  private total: number
  constructor() {
    this.pageSize = 15
    this.pageNum = 1
    this.total = 0
  }

  private resetPageNum() {
    this.pageNum = 1
  }

  private updatePageNum() {
    this.pageNum += 1
  }

  // 设置当前页码
  public setPageNum(pageNum: number) {
    this.pageNum = pageNum
  }

  // 设置总数
  public setTotal(total: number) {
    this.total = total
  }

  // 获取总数
  public getTotal(): number {
    return this.total
  }

  // 初次加载
  public withLoading = (cb: FnCallBack) => {
    return (...args: any[]) => {
      const that = args[0] as PageInstance
      that.setData({
        isLoadingCenter: true
      })

      this.resetPageNum()
      return cb(...args, {
        pageSize: this.pageSize,
        pageNum: this.pageNum,
      })
    }
  }

  // 加载更多
  public widthLoadingMore = (cb: FnCallBack) => {
    return (...args: any[]) => {
      const that = args[0] as PageInstance
      that.setData({
        isLoading: true
      })

      this.updatePageNum()
      return cb(...args, {
        pageSize: this.pageSize,
        pageNum: this.pageNum,
      })
    }
  }

  public hideLoading = (that: PageInstance) => {
    that.setData({
      isLoadingCenter: false
    })
  }

  public hideLoadingMore = (that: PageInstance) => {
    that.setData({
      isLoading: false
    })
  }

}

export default Load