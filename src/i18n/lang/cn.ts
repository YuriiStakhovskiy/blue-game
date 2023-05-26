import type { langType } from './lang-base'

export const lang: langType = {
  header: {
    logo: 'LOGO',
    signup: '注册',
    signin: '登录',
    signout: '退出'
  },
  signin: {
    bubbleText1: '登录',
    bubbleText2: '您的账号',
    emailText: '邮箱地址',
    passwordText: '密码',
    forgoText: '忘记密码?',
    signinBtnText: '登录',
    breakText: '或',
    regText1: '您还没有账号?',
    regText2: '注册一个吧!'
  },
  signup: {
    emailText: '邮箱地址',
    passwordText: '密码',
    promoText: '推荐/邀请码(选项)',
    agreeText1: '本人同意',
    agreeText2: '用户协议和确认',
    agreeText3: '您还没有账号吗?',
    signinText1: '您已有账号吗?',
    signinText2: '注册',
    mainConfirmText: '请填写此段',
    confirmListText1: '长度为8~30个字符',
    confirmListText2: '包含一个大写字母和一个小写字母',
    confirmListText3: '包含一个数字'
  }
}
