import { defineStore } from 'pinia'
import { NETWORK } from '@/net/NetworkCfg';
import type * as SignIn from "@/interface/signin";
import type * as SignUp from "@/interface/signup";
import { Network } from "@/net/Network";
import { NetworkData } from '@/net/NetworkData';

export const authStore = defineStore({
  id: 'auth',
  state: () => ({
    success: false as boolean,
    errMessage: '' as string,
    authModalType: '' as string,
  }),
  getters: {
    getSuccess: (state) => state.success,
    getErrMessage: (state) => state.errMessage,
    getAuthModalType: (state) => state.authModalType,
  },
  actions: {
    setAuthModalType(authModalType: string) {
      this.authModalType = authModalType
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
        if (response.code == 200) {
          const networkData: NetworkData = NetworkData.getInstance();
          networkData.setToken(response.data.token);
        } else {
          this.setErrorMessage(response.message);
        }
      }
      network.sendMsg(route, msg, next, 1);
    },
    dispatchSignUp(msg: SignUp.SignupRequestData) {
      const route: string = NETWORK.LOGIN.REGISTER;
      const network: Network = Network.getInstance();
      const next = (response: SignUp.GetSignupResponseData) => {
        console.log(response);
        if (response.code == 200) {
          const networkData: NetworkData = NetworkData.getInstance();
          networkData.setToken(response.data.token);
        } else {
          this.setErrorMessage(response.message);
        }
      }
      network.sendMsg(route, msg, next, 1);
    }
  }
})
