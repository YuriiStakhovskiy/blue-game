import { defineStore } from 'pinia'
import { NETWORK } from '@/net/NetworkCfg';
import type * as SignIn from "@/interface/signin";
import type * as SignUp from "@/interface/signup";
import type * as User from "@/interface/user";
import { Network } from "@/net/Network";
import { NetworkData } from '@/net/NetworkData';
import { useI18n } from 'vue-i18n';

export const authStore = defineStore({
  id: 'auth',
  state: () => ({
    success: false as boolean,
    errMessage: '' as string,
    authModalType: '' as string,
    token: NetworkData.getInstance().getToken() as string | undefined,
    userInfo: {} as User.GetUserInfo
  }),
  getters: {
    getSuccess: (state) => state.success,
    getErrMessage: (state) => state.errMessage,
    getAuthModalType: (state) => state.authModalType,
    getToken: (state) => state.token,
    getUserInfo: (state) => state.userInfo
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
    setToken(token: string) {
      const networkData: NetworkData = NetworkData.getInstance();
      networkData.setToken(token);
      this.token = token;
    },
    removeToken() {
      this.token = undefined;
      const networkData: NetworkData = NetworkData.getInstance();
      networkData.resetData();
    },
    setUserInfo(userInfo: User.GetUserInfo) {
      this.userInfo = userInfo;
    },
    async dispatchSignIn(msg: SignIn.SigninRequestData) {
      this.success = false;
      const route: string = NETWORK.LOGIN.LOGIN;
      const network: Network = Network.getInstance();
      // real token
      const next = (response: SignIn.GetSigninResponseData) => {
        console.log(response);
        if (response.code == 200) {
          this.setToken(response.token);
          this.setSuccess(true);
        } else {
          const { t } = useI18n();
          switch (response.code) {
            case 0:
              // code === 0 means failed
              this.setErrorMessage(t('err_result.err_text_1'));
              break;
            case 100000:
              // code === 100000 means Passed data exception
              this.setErrorMessage(t('err_result.err_text_2'));
              break;
            case 100001:
              // code === 100001 means The password does not meet the requirements
              this.setErrorMessage(t('err_result.err_text_3'));
              break;
            case 100002:
              // code === 100002 User account is locked
              this.setErrorMessage(t('err_result.err_text_4'));
              break;
            case 101001:
              // code === 200 means Login data exception
              this.setErrorMessage(t('err_result.err_text_5'));
              break;
            case 101002:
              // code === 200 means The login account or password is wrong
              this.setErrorMessage(t('err_result.err_text_6'));
              break;
            case 101003:
              // code === 101003 means Login account does not exist
              this.setErrorMessage(t('err_result.err_text_7'));
              break;
            case 102001:
              // code === 102001 means Failed to register data
              this.setErrorMessage(t('err_result.err_text_8'));
              break;
            case 102002:
              // code === 102002 means Registration data exception
              this.setErrorMessage(t('err_result.err_text_9'));
              break;
            case 102003:
              // code === 102003 means Registering an existing account is abnormal
              this.setErrorMessage(t('err_result.err_text_10'));
              break;
            case 103001:
              // code === 103001 means Abnormal nickname format (abnormal length or illegal identifier)
              this.setErrorMessage(t('err_result.err_text_11'));
              break;
            case 103002:
              // code === 103002 means Nickname is the same as email
              this.setErrorMessage(t('err_result.err_text_12'));
              break;
            case 103003:
              // code === 103003 means Email format exception (abnormal length or illegal identifier)
              this.setErrorMessage(t('err_result.err_text_13'));
              break;
            case 103004:
              // code === 103004 means Phone format exception (abnormal length or illegal identifier)
              this.setErrorMessage(t('err_result.err_text_14'));
              break;
            case 103005:
              // code === 103005 means The same password needs to be changed
              this.setErrorMessage(t('err_result.err_text_15'));
              break;
            case 103006:
              // code === 103006 means The current password is wrong
              this.setErrorMessage(t('err_result.err_text_16'));
              break;
            case 103007:
              // code === 103007 means The emails that need to be modified are the same
              this.setErrorMessage(t('err_result.err_text_17'));
              break;
            case 103008:
              // code === 103008 means The message that needs to be modified is already taken
              this.setErrorMessage(t('err_result.err_text_18'));
              break;
            case 103009:
              // code === 103009 means The avatar index that needs to be modified is wrong
              this.setErrorMessage(t('err_result.err_text_19'));
              break;
            case 103010:
              // code === 103010 means wrong birthday format
              this.setErrorMessage(t('err_result.err_text_20'));
              break;
          }
        }
      }
      await network.sendMsg(route, msg, next, 1);
    },
    async dispatchSignUp(msg: SignUp.SignupRequestData) {
      this.success = false;
      const route: string = NETWORK.LOGIN.REGISTER;
      const network: Network = Network.getInstance();
      // real token
      const next = (response: SignUp.GetSignupResponseData) => {
        console.log(response);
        if (response.code == 200) {
          this.setToken(response.token);
          this.setSuccess(true);
        } else {
          const { t } = useI18n();
          switch (response.code) {
            case 0:
              // code === 0 means failed
              this.setErrorMessage(t('err_result.err_text_1'));
              break;
            case 100000:
              // code === 100000 means Passed data exception
              this.setErrorMessage(t('err_result.err_text_2'));
              break;
            case 100001:
              // code === 100001 means The password does not meet the requirements
              this.setErrorMessage(t('err_result.err_text_3'));
              break;
            case 100002:
              // code === 100002 User account is locked
              this.setErrorMessage(t('err_result.err_text_4'));
              break;
            case 101001:
              // code === 200 means Login data exception
              this.setErrorMessage(t('err_result.err_text_5'));
              break;
            case 101002:
              // code === 200 means The login account or password is wrong
              this.setErrorMessage(t('err_result.err_text_6'));
              break;
            case 101003:
              // code === 101003 means Login account does not exist
              this.setErrorMessage(t('err_result.err_text_7'));
              break;
            case 102001:
              // code === 102001 means Failed to register data
              this.setErrorMessage(t('err_result.err_text_8'));
              break;
            case 102002:
              // code === 102002 means Registration data exception
              this.setErrorMessage(t('err_result.err_text_9'));
              break;
            case 102003:
              // code === 102003 means Registering an existing account is abnormal
              this.setErrorMessage(t('err_result.err_text_10'));
              break;
            case 103001:
              // code === 103001 means Abnormal nickname format (abnormal length or illegal identifier)
              this.setErrorMessage(t('err_result.err_text_11'));
              break;
            case 103002:
              // code === 103002 means Nickname is the same as email
              this.setErrorMessage(t('err_result.err_text_12'));
              break;
            case 103003:
              // code === 103003 means Email format exception (abnormal length or illegal identifier)
              this.setErrorMessage(t('err_result.err_text_13'));
              break;
            case 103004:
              // code === 103004 means Phone format exception (abnormal length or illegal identifier)
              this.setErrorMessage(t('err_result.err_text_14'));
              break;
            case 103005:
              // code === 103005 means The same password needs to be changed
              this.setErrorMessage(t('err_result.err_text_15'));
              break;
            case 103006:
              // code === 103006 means The current password is wrong
              this.setErrorMessage(t('err_result.err_text_16'));
              break;
            case 103007:
              // code === 103007 means The emails that need to be modified are the same
              this.setErrorMessage(t('err_result.err_text_17'));
              break;
            case 103008:
              // code === 103008 means The message that needs to be modified is already taken
              this.setErrorMessage(t('err_result.err_text_18'));
              break;
            case 103009:
              // code === 103009 means The avatar index that needs to be modified is wrong
              this.setErrorMessage(t('err_result.err_text_19'));
              break;
            case 103010:
              // code === 103010 means wrong birthday format
              this.setErrorMessage(t('err_result.err_text_20'));
              break;
          }
        }
      }
      await network.sendMsg(route, msg, next, 1);
    },
    async dispatchUserProfile() {
      this.success = false;
      const route: string = NETWORK.HOME_PAGE.USER_INFO;
      const network: Network = Network.getInstance();
      // real token
      const next = (response: User.GetUserInfoResponseData) => {
        console.log(response);
        if (response.code == 200) {
          this.setUserInfo(response.data);
          this.setSuccess(true);
        } else {
          const { t } = useI18n();
          switch (response.code) {
            case 0:
              // code === 0 means failed
              this.setErrorMessage(t('err_result.err_text_1'));
              break;
            case 100000:
              // code === 100000 means Passed data exception
              this.setErrorMessage(t('err_result.err_text_2'));
              break;
            case 100001:
              // code === 100001 means The password does not meet the requirements
              this.setErrorMessage(t('err_result.err_text_3'));
              break;
            case 100002:
              // code === 100002 User account is locked
              this.setErrorMessage(t('err_result.err_text_4'));
              break;
            case 101001:
              // code === 200 means Login data exception
              this.setErrorMessage(t('err_result.err_text_5'));
              break;
            case 101002:
              // code === 200 means The login account or password is wrong
              this.setErrorMessage(t('err_result.err_text_6'));
              break;
            case 101003:
              // code === 101003 means Login account does not exist
              this.setErrorMessage(t('err_result.err_text_7'));
              break;
            case 102001:
              // code === 102001 means Failed to register data
              this.setErrorMessage(t('err_result.err_text_8'));
              break;
            case 102002:
              // code === 102002 means Registration data exception
              this.setErrorMessage(t('err_result.err_text_9'));
              break;
            case 102003:
              // code === 102003 means Registering an existing account is abnormal
              this.setErrorMessage(t('err_result.err_text_10'));
              break;
            case 103001:
              // code === 103001 means Abnormal nickname format (abnormal length or illegal identifier)
              this.setErrorMessage(t('err_result.err_text_11'));
              break;
            case 103002:
              // code === 103002 means Nickname is the same as email
              this.setErrorMessage(t('err_result.err_text_12'));
              break;
            case 103003:
              // code === 103003 means Email format exception (abnormal length or illegal identifier)
              this.setErrorMessage(t('err_result.err_text_13'));
              break;
            case 103004:
              // code === 103004 means Phone format exception (abnormal length or illegal identifier)
              this.setErrorMessage(t('err_result.err_text_14'));
              break;
            case 103005:
              // code === 103005 means The same password needs to be changed
              this.setErrorMessage(t('err_result.err_text_15'));
              break;
            case 103006:
              // code === 103006 means The current password is wrong
              this.setErrorMessage(t('err_result.err_text_16'));
              break;
            case 103007:
              // code === 103007 means The emails that need to be modified are the same
              this.setErrorMessage(t('err_result.err_text_17'));
              break;
            case 103008:
              // code === 103008 means The message that needs to be modified is already taken
              this.setErrorMessage(t('err_result.err_text_18'));
              break;
            case 103009:
              // code === 103009 means The avatar index that needs to be modified is wrong
              this.setErrorMessage(t('err_result.err_text_19'));
              break;
            case 103010:
              // code === 103010 means wrong birthday format
              this.setErrorMessage(t('err_result.err_text_20'));
              break;
          }
        }
      }
      await network.sendMsg(route, {}, next, 1, 4);
    },
    dispatchSignout() {
      this.removeToken();
    }
  }
})
