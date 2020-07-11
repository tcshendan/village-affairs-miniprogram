import Request from '../utils/request'

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

export default class AttentionModel extends Request {
  constructor() {
    super()
  }

  getPartyWorkList(): Promise<IPartyWorkListData> {
    return this.request({
      url: '/getPartyWorkList'
    })
  }

}