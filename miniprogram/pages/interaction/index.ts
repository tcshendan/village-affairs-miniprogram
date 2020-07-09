// index.ts
import { showToast } from '../../utils/util'

interface changeEvent {
  currentTarget: {
    dataset: {
      field: string
    },
  },
  detail: {
    value: string
  }
}

Page({
  data: {
    formData: {

    },
    rules: [
      {
        name: 'name',
        rules: { required: true, message: '请输入姓名' },
      },
      {
        name: 'phone',
        rules: { required: true, message: '请输入手机号码' },
      },
      {
        name: 'situation',
        rules: { required: true, message: '请输入要反应的情况' },
      }
    ],
    files: [
      {
        url: 'http://bpic.588ku.com//back_origin_min_pic/20/06/25/60b55efbaddf0d331c0d0d1d4f4801ef.jpg!/fw/750/quality/99/unsharp/true/compress/true',
      }
    ]
  },
  onLoad() {

  },
  onFormInputChange(e: changeEvent) {
    const field = e.currentTarget.dataset.field
    this.setData({
      [`formData.${field}`]: e.detail.value
    })
  },
  onSubmitForm() {
    this.selectComponent('#form').validate((valid: boolean, errors): boolean | undefined => {
      // console.log('valid', valid, errors)
      if (!valid) {
        const firstError = Object.keys(errors)
        if (firstError.length) {
          showToast(errors[firstError[0]].message, 'none')
          return false
        }
      }
      console.log('formData', this.data.formData)
      // 调用接口
      return
    })
  },
  chooseImage(_e: any) {
    wx.chooseImage({
      count: 1, // 最多可以选择的图片张数, 默认 9　
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: (res) => {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        const chooeseFiles = tempFilePaths.map(tempFilePath => ({ url: tempFilePath }))
        this.setData({
          files: this.data.files.concat(chooeseFiles)
        })
        wx.uploadFile({
          url: 'https://example.weixin.qq.com/upload', // 图片上上传的地址，请求方式默认为POST且不可更改
          filePath: tempFilePaths[0], // 要上传的文件的路径，注：一次只能上传一个文件，若要上传多张图片，请使用递归
          name: 'file', // // 文件对应的键名，后端可以通过这个key获取到文件的二进制内容
          formData: {
            'user_id': '123',
            'name': 'Jack',
            'age': 18
          },
          success: (res) => {
            const data = res.data
            console.log(data)
            // 调用接口
          }
        })
      }
    })
  },
  previewImage(e: { currentTarget: { dataset: { src: string } }}) {
    const current = e.currentTarget.dataset.src
    const urls: string[] = this.data.files.map(file => file.url)
    wx.previewImage({
      current, // 当前显示图片的http链接
      urls // 需要预览的图片http链接列表
    })
  },
  removeImage(e: { currentTarget: { dataset: { index: number } }}) {
    const index = e.currentTarget.dataset.index
    const files = this.data.files
    this.setData({
      files: files.filter((_file, i) => i !== index)
    })
  }
})