
<script lang="ts" setup>
import { ref, toRefs, watch, onMounted } from 'vue'
import { mapActions, storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'
import { authStore } from '@/stores/auth'
const { t } = useI18n()
const { setIndex } = authStore()
const passwordType = ref('password')
const passwordShow = ref(false)
const modalEffect = ref(false)
const animationEffect = ref(false)

const emit = defineEmits<{
  (e: 'showForgotPassword', forgotShow: boolean): void
}>()

const close = () => {
  animationEffect.value = false
  setTimeout(() => {
    setIndex('0')
  }, 250)
}
const showSignUp = () => {
  animationEffect.value = false
  setTimeout(() => {
    setIndex('1')
  }, 250)
}
const showForgotPassword = () => {
  animationEffect.value = false
  setTimeout(() => {
    setIndex('0')
    emit('showForgotPassword', true)
  }, 250)
}
const showPassword = () => {
  passwordShow.value = !passwordShow.value
  if (passwordShow.value) {
    passwordType.value = 'text'
  } else {
    passwordType.value = 'password'
  }
}
onMounted(() => {
  animationEffect.value = true
})
</script>

<template>
  <div class="modal" :class="[animationEffect ? 'modal-opacitity-show' : 'modal-opacitity-hide']">
    <div class="login-modal" :class="[animationEffect ? 'modal-body-show' : 'modal-body-hide']">
      <div class="header">
        <img class="login-header2" src="@/assets/login/image/login-header2.png" />
        <img class="login-header3" src="@/assets/login/image/login-header3.png" />
        <img class="login-coin" src="@/assets/login/image/login-coin.png" />
        <img class="login-header1" src="@/assets/login/image/login-header1.png" />
        <div class="bubble">
          <p class="bubble-text">
            {{ t('signin.bubbleText1') }}<br />{{ t('signin.bubbleText2') }}
          </p>
        </div>
      </div>
      <div class="info-wrapper">
        <input type="text" :placeholder="t('signin.emailText')" class="input-mail" />
        <div class="password-group">
          <input :type="passwordType" :placeholder="t('signin.passwordText')" class="input-pass" />
          <img v-if="passwordShow" src="@/assets/login/svg/eye_1.svg" class="disable-password" @click="showPassword" />
          <img v-else src="@/assets/login/svg/eye.svg" class="disable-password" @click="showPassword" />
        </div>
        <p class="forgot-text" @click="showForgotPassword">{{ t('signin.forgoText') }}</p>
        <button class="signin-button">{{ t('signin.signinBtnText') }}</button>
      </div>
      <div class="break-wrapper">
        <div class="break-line"></div>
        <p class="break-text">{{ t('signin.breakText') }}</p>
        <div class="break-line"></div>
      </div>
      <div class="social-wrapper">
        <a href="#" class="facebook"><span class="visual-hidden">facebook</span></a>
        <a href="#" class="twitter"><span class="visual-hidden">twitter</span></a>
        <a href="#" class="tiktok"><span class="visual-hidden">tiltok</span></a>
        <a href="#" class="linkedin"><span class="visual-hidden">linkedin</span></a>
      </div>
      <p class="reg-wrapper">
        {{ t('signin.regText1') }}
        <a href="#" class="link-signup" @click="showSignUp">{{ t('signin.regText2') }}</a>
      </p>
      <img src="@/assets/login/svg/close-icon.svg" class="close-icon" @click="close" />
    </div>
  </div>
</template>

<style scoped>
.close-icon {
  position: absolute;
  right: 16px;
  top: 24px;
}

.visual-hidden {
  display: none;
}

.close-icon:hover,
.close-icon:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

input[type='text'] {
  width: 335px;
  height: 48px;
  border-radius: 12px;
  background: #211f31;
  border: none;
  color: white;
  font-size: 14px;
  padding: 0 20px;
}

input[type='password'] {
  width: 335px;
  height: 48px;
  border-radius: 12px;
  background: #211f31;
  border: none;
  color: white;
  font-size: 14px;
  padding: 0 20px;
}

button {
  width: 375px;
  height: 60px;
  background: #32cfec;
  border-radius: 12px;
  font-size: 18px;
  color: black;
  font-weight: 700;
  cursor: pointer;
}

.password-group {
  position: relative;
}

.disable-password {
  position: absolute;
  top: 41px;
  right: 10px;
  cursor: pointer;
}

.login-modal {
  position: relative;
  width: 471px;
  height: fit-content;
  border-radius: 16px;
  background: #2e274c;
  text-align: center;
}

.login-modal .header {
  position: relative;
  background-image: url('@/assets/login/image/login-header-back.png');
  width: 100%;
  height: 187px;
}

.login-modal .header .login-header1 {
  position: absolute;
  left: -2px;
  top: 16px;
}

.login-modal .header .login-header2 {
  position: absolute;
  left: -15px;
  top: 12px;
}

.login-modal .header .login-header3 {
  position: absolute;
  left: 15px;
  top: -10px;
}

.login-modal .header .login-coin {
  position: absolute;
  left: 251px;
  top: -10px;
}

.login-modal .header .bubble {
  position: absolute;
  left: 251px;
  top: 43px;
  width: 180px;
  height: 71px;
  background-image: url('@/assets/login/image/login-header-bubble.png');
}

.login-modal .header .bubble .bubble-text {
  color: black;
  font-size: 17px;
  font-weight: 700;
}

.break-wrapper {
  display: flex;
  gap: 44px;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
}

.break-wrapper .break-line {
  width: 130px;
  height: 1px;
  background-color: #414968;
}

.break-wrapper .break-text {
  color: #414968;
  font-size: 18px;
  margin: 0;
}

.social-wrapper {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
}

.facebook {
  background-image: url('@/assets/login/svg/facebook.svg');
  width: 48px;
  height: 48px;
}

.twitter {
  background-image: url('@/assets/login/svg/twitter.svg');
  width: 48px;
  height: 48px;
}

.tiktok {
  background-image: url('@/assets/login/svg/tiktok.svg');
  width: 48px;
  height: 48px;
}

.linkedin {
  background-image: url('@/assets/login/svg/linkedin.svg');
  width: 48px;
  height: 48px;
}

.info-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.info-wrapper .input-mail {
  margin-top: 40px;
}

.info-wrapper .input-pass {
  margin-top: 24px;
}

.info-wrapper .forgot-text {
  text-align: left;
  color: #7782aa;
  font-size: 14px;
  margin: 12px 0 0 0;
  cursor: pointer;
}

.info-wrapper .signin-button {
  width: 375px;
  height: 60px;
  background: #32cfec;
  border-radius: 12px;
  font-size: 18px;
  color: black;
  font-weight: 700;
  margin-top: 60px;
}

.reg-wrapper {
  color: white;
  font-size: 16px;
  margin: 32px 0 40px 0;
}

.reg-wrapper .link-signup {
  color: #32cfec;
  font-weight: bold;
  font-size: 16px;
  text-decoration: none;
}
</style>
