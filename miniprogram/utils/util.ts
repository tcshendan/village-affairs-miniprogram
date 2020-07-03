import { config } from '../config/index'
import { CONSTANTS } from '../constant/index'

export type IconType = 'success' | 'loading' | 'none'

const formatTime = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return (
    [year, month, day].map(formatNumber).join('/') +
    ' ' +
    [hour, minute, second].map(formatNumber).join(':')
  )
}

const formatNumber = (n: number) => {
  const s = n.toString()
  return s[1] ? s : '0' + s
}

const showToast = (title: string, icon?: IconType, duration: number = config.toast_duration): void => {
  wx.showToast({
    title,
    icon,
    image: icon ? '' : '/images/icon/toast@error.png',
    duration
  })
}

const getLoginStatus = (): boolean => {
  return wx.getStorageSync(CONSTANTS.LOCALKEY.LOGIN)
}

const getUserInfo = (): any => {
  return wx.getStorageSync(CONSTANTS.LOCALKEY.USER)
}

export {
  formatTime,
  showToast,
  getLoginStatus,
  getUserInfo,
}
