import { defineStore } from 'pinia'
import { NETWORK } from '@/net/NetworkCfg';
import type * as SignIn from "@/interface/signin";
import { Network } from "@/net/Network";

export const authStore = defineStore({
  id: 'auth',
  state: () => ({
    success: false as boolean,
    errMessage: '' as string,
    index: '0' as string,
    activeIndex: '0' as string
  }),
  getters: {
    getSuccess: (state) => state.success,
    getErrMessage: (state) => state.errMessage,
    getIndex: (state) => state.index,
    getActiveIndex: (state) => state.activeIndex
  },
  actions: {
    setIndex(index: string) {
      this.index = index
    },
    setActiveIndex(activeIndex: string) {
      this.activeIndex = activeIndex
    },
    setSuccess(success: boolean) {
      this.success = success
    },
    setErrorMessage(message: string) {
      this.errMessage = message
    },
    dispatchSignIn(msg: SignIn.SigninRequestData) {
      const route: string = NETWORK.LOGIN.LOGIN;
      const network: Network = Network.getInstance();
      const next = (response: SignIn.GetSigninResponseData) => {
        console.log(response);
      }
      network.sendMsg(route, msg, next, 1);
    }
  }
})
