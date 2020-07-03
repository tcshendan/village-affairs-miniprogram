import { config } from '../config/index'
import { CONSTANTS } from '../constant/index'
import { getLoginStatus, showToast } from '../utils/util'

export type Method = 'GET' | 'POST' | 'DELETE' | 'PUT'

interface IHeader {
  [propName: string]: string
}
interface IResponseResult {
  code: number,
  data: any,
  message: string
}
interface IRequestSuccessCallbackResult extends WechatMiniprogram.RequestSuccessCallbackResult {
  cookies?: string[]
}

enum ERROR_MSG {
  '未知异常' = 1,
  '错误请求' = 400,
  '请登录' = 401,
  '请求错误，未找到该资源' = 404,
  '请求方法未允许' = 405,
  '服务器异常，请稍后重试' = 500
}

class Request {
  private baseUrl: string
  private header: IHeader
  constructor () {
    this.baseUrl = config.api_base_url
    this.header = {
      'content-type': 'application/json'
    }
  }

  public async request({ 
    url,
    data = {},
    method = 'GET',
    isLoginReq = false
  }: { url: string, data?: any, method?: Method, isLoginReq?: boolean }) {
    let { code, data: responseData, message }: IResponseResult = await this.fetch(url, data, method, isLoginReq)
    // 服务端错误统一处理
    if (code !== 200) {
      this.showError(code, message) // 错误提示
      throw new Error(message) // 返回错误
    }
    return responseData
  }
  
  private fetch(url: string, data: any, method: Method, isLoginReq: boolean): Promise<IResponseResult> {
    return new Promise((resolve, reject) => {
      wx.request({
        url: this.baseUrl + url,
        method,
        data,
        header: this.generateHeader,
        success: (res: IRequestSuccessCallbackResult) => {
          const { statusCode, data } = res
          if (statusCode.toString().startsWith('2')) {
            if (isLoginReq) (data as IResponseResult).data = res.cookies![0]
            resolve(data as IResponseResult)
          } else {
            reject()
            this.showError(statusCode)
          }
        },
        fail: (err) => {
          reject(err)
          this.showError()
        }
      })
    })
  }

  private generateHeader(): IHeader {
    const isLogin = getLoginStatus()
    if (isLogin) {
      return {
        ...this.header,
        'Cookie': wx.getStorageSync(CONSTANTS.LOCALKEY.SESSION)
      }
    } else {
      return this.header
    }
  }

  private showError(errorCode?: number, errorMsg?: string): void {
    errorCode = errorCode || 1
    errorMsg = errorMsg || ERROR_MSG[errorCode]
    showToast(errorMsg, 'none')
  }
}

export default Request