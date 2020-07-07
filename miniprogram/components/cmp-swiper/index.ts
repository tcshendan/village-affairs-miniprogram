// components/cmp-swiper/index.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    swiperImages: {
      type: Array
    },
    autoplay: {
      type: Boolean,
      value: true
    },
    interval: {
      type: Number,
      value: 5000
    },
    duration: {
      type: Number,
      value: 500
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})