import { defineStore } from 'pinia'

export const useImageStore = defineStore('image', {
  state: () => ({
    // 共享的響應式資料
    selectedImageSrc: '',
  }),
  actions: {
    // 改變狀態的方法
    setSelectedImage(src: string) {
      this.selectedImageSrc = src
    },
  },
})