import { defineStore } from 'pinia'

export const loginBonusStore = defineStore({
  id: 'loginBonus',
  state: () => ({
    success: false as boolean,
    errMessage: '' as string,
    loginBonusDialogVisible: false as boolean,
  }),
  getters: {
    getSuccess: (state) => state.success,
    getErrMessage: (state) => state.errMessage,
    getLoginBonusDialogVisible: (state) => state.loginBonusDialogVisible
  },
  actions: {
    setLoginBonusDialogVisible(loginBonusDialogVisible: boolean) {
      this.loginBonusDialogVisible = loginBonusDialogVisible;
    },
  }
})
