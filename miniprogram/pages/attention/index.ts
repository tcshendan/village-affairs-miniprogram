// index.ts
import AttentionModel, { IPartyWorkItemData, IPartyWorkListData } from '../../models/attention'

interface TabEvent {
  detail?: {
    index: number
  },
  currentTarget?: {
    dataset: {
      index: number
    }
  }
}

interface Tab {
  title: string
}

let map = new Map()
map.set(0, { titles: ['全部', '党员发展', '党员管理', '党员活动', '其他'], barLeft: '0%', barRight: '66.6667%' })
map.set(1, { titles: ['全部', '村级务(误)工', '村聘人员', '低保户及低收入农户', '农民建房', '失地农民保险', '垃圾分类', '诚信指数', '其他'], barLeft: '33.3333%', barRight: '33.3333%' })
map.set(2, { titles: ['全部', '财务公开', '资产资源', '建设工程', '其他'], barLeft: '66.6667%', barRight: '0%' })

Page({
  data: {
    topTabs: [
      {
        id: 0,
        name: '党务公开'
      },
      {
        id: 1,
        name: '村务公开'
      },
      {
        id: 2,
        name: '财务公开'
      }
    ],
    activeTopTab: 0,

    tabs: [] as Tab[],
    activeTab: 0,

    barLeft: '0%',
    barRight: '66.6667%',

    totalData: {} as IPartyWorkListData,
    list: [] as IPartyWorkItemData[]
  },
  onLoad() {
    const { titles } = map.get(this.data.activeTopTab)
    this.setData({ 
      tabs: this.generateTabs(titles)
    })
    this.loadPartyWorkList()
  },
  onTopTabClick(e: TabEvent) {
    const index = e.currentTarget!.dataset.index
    const { barLeft, barRight, titles } = map.get(index)
    this.setData({
      activeTopTab: index,
      barLeft,
      barRight,
      tabs: this.generateTabs(titles)
    })
  },
  onTabClick(e: TabEvent) {
    const index = e.detail!.index
    this.setData({
      activeTab: index,
      list: this.data.totalData[index] ? this.data.totalData[index] : []
    })
  },
  generateTabs(titles: string[]): Tab[] {
    return titles.map(item => ({ title: item }))
  },
  async loadPartyWorkList() {
    try {
      const totalData = await new AttentionModel().getPartyWorkList()
      this.setData({
        totalData,
        list: totalData[this.data.activeTab]
      })
    } catch (err) {
      console.log(err)
    }
  },
})