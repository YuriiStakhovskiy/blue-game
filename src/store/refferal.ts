import { defineStore } from 'pinia'

export const refferalStore = defineStore({
  id: 'refferal',
  state: () => ({
    success: false as boolean,
    errMessage: '' as string,
    refferalAppBarShow: true as boolean,
  }),
  getters: {
    getSuccess: (state) => state.success,
    getErrMessage: (state) => state.errMessage,
    getRefferalAppBarShow: (state) => state.refferalAppBarShow,
  },
  actions: {
    setRefferalAppBarShow(refferalAppBarShow: boolean) {
      this.refferalAppBarShow = refferalAppBarShow;
    },
  }
})
