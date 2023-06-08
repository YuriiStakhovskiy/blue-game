import { defineStore } from 'pinia'

export const appBarStore = defineStore({
  id: 'appBar',
  state: () => ({
    success: false as boolean,
    errMessage: '' as string,
    rightBarToggle: true as boolean,
    navBarToggle: true as boolean,
    depositDialogToggle: false as boolean
  }),
  getters: {
    getSuccess: (state) => state.success,
    getErrMessage: (state) => state.errMessage,
    getRightBarToggle: (state) => state.rightBarToggle,
    getNavBarToggle: (state) => state.navBarToggle,
    getDepositDialogToggle: (state) => state.depositDialogToggle
  },
  actions: {
    setSuccess(success: boolean) {
      this.success = success
    },
    setErrorMessage(message: string) {
      this.errMessage = message
    },
    setRightBarToggle(rightBarToggle: boolean) {
      this.rightBarToggle = rightBarToggle;
    },
    setNavBarToggle(navBarToggle: boolean) {
      this.navBarToggle = navBarToggle;
    },
    setDepositDialogToggle(depositDialogToggle: boolean) {
      console.log(depositDialogToggle);
      this.depositDialogToggle = depositDialogToggle;
    }
  }
})
