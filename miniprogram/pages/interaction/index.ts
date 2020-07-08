// index.ts

Page({
  data: {
    
  },
  onLoad() {
    
  },
  uplaodFile(files: any) {
    console.log('upload files', files)
    // 文件上传的函数，返回一个promise
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('some error')
      }, 1000)
    })
  }
})