<script lang="ts" setup>
import { ref, toRefs, watch, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { authStore } from '@/stores/auth'
const { t } = useI18n()
const { setIndex } = authStore()
const passwordShow = ref(false)
const passwordType = ref('password')
const email = ref('')
const password = ref('')
const modalEffect = ref(false)
const animationEffect = ref(false)
const emailValidShow = ref(false)
const passwordValidShow = ref(false)
const passwordValidPromptShow = ref(false)
const emailValidPromptShow = ref(false);
const passwordCheck1 = ref(false)
const passwordCheck2 = ref(false)
const passwordCheck3 = ref(false)
const passwordCheck4 = ref(false)
const policy = ref(false)
const disabled = ref(true)
const emit = defineEmits<{
  (e: 'showRegisteredDialog', registeredShow: boolean): void
  (e: 'submitEmail', email: string): void
  (e: 'showConfirmDialog', confirmShow: boolean): void
  (e: 'showNickNameDialog', confirmShow: boolean): void
}>()
const showPassword = () => {
  passwordShow.value = !passwordShow.value
  if (passwordShow.value) {
    passwordType.value = 'text'
  } else {
    passwordType.value = 'password'
  }
}
const visiblePasswordShow = () => {
  passwordValidPromptShow.value = false;
  setTimeout(() => {
    passwordValidShow.value = false
  }, 250)
}
const emailPromptHide = () => {
    emailValidPromptShow.value = false;
    setTimeout(() => {
      emailValidShow.value = false
    }, 250)
}
watch(
  policy,
  () => {
    if (
      policy.value &&
      passwordCheck1.value &&
      passwordCheck2.value &&
      passwordCheck3.value &&
      passwordCheck4.value &&
      email.value !== ''
    ) {
      disabled.value = false
    } else {
      disabled.value = true
    }
  },
  { deep: true }
)
watch(
  email,
  () => {
    if (email.value == '') {
      setTimeout(() => {
        emailValidShow.value = true
        emailValidPromptShow.value = true;
      }, 250)
    } else {
      emailValidPromptShow.value = false;
      setTimeout(() => {
        emailValidShow.value = false
      }, 250)
    }
    if (
      policy.value &&
      passwordCheck1.value &&
      passwordCheck2.value &&
      passwordCheck3.value &&
      passwordCheck4.value &&
      email.value !== ''
    ) {
      disabled.value = false
    } else {
      disabled.value = true
    }
  },
  { deep: true }
)
const regExp1 = /^[a-zA-Z0-9~!@#$%&*()_-]{8,30}$/
const regExp2 = /^(?=.*[a-z])(?=.*[A-Z]).+$/
const regExp3 = /^[0-9]+$/
const regExp4 = /^[~!@#$%&*()_-]+$/
watch(
  password,
  () => {
    if (regExp1.test(password.value)) {
      passwordCheck1.value = true
    } else {
      passwordCheck1.value = false
    }
    if (regExp2.test(password.value)) {
      passwordCheck2.value = true
    } else {
      passwordCheck2.value = false
    }
    let test3 = false
    for (const letter of password.value) {
      if (regExp3.test(letter)) {
        test3 = true
      }
    }
    if (test3) {
      passwordCheck3.value = true
    } else {
      passwordCheck3.value = false
    }
    let test4 = false
    for (const letter of password.value) {
      if (regExp4.test(letter)) {
        test4 = true
      }
    }
    if (test4) {
      passwordCheck4.value = true
    } else {
      passwordCheck4.value = false
    }
    if (
      policy.value &&
      passwordCheck1.value &&
      passwordCheck2.value &&
      passwordCheck3.value &&
      passwordCheck4.value &&
      email.value !== ''
    ) {
      disabled.value = false
    } else {
      disabled.value = true
    }
  },
  { deep: true }
)

const close = () => {
  animationEffect.value = false
  setTimeout(() => {
    setIndex('0')
    emit('showConfirmDialog', true)
  }, 250)
}
const emailChange = () => {
  if (email.value == '') {
    emailValidShow.value = true
    emailValidPromptShow.value = true;
  } else {
    emailValidPromptShow.value = false;
    setTimeout(() => {
      emailValidShow.value = false
    }, 250)
  }
}
const passwordChange = () => {
  passwordValidPromptShow.value = true;
  passwordValidShow.value = true
}
const showRegistered = () => {
  animationEffect.value = false
  setTimeout(() => {
    setIndex('0')
    emit('showRegisteredDialog', true)
  }, 250)
}
const showSignInDialog = () => {
  animationEffect.value = false
  setTimeout(() => {
    setIndex('2')
  }, 250)
}
const showNickName = () => {
  animationEffect.value = false
  email.value = email.value.trim()
  setTimeout(() => {
    setIndex('0')
    emit('showNickNameDialog', true)
    emit('submitEmail', email.value)
  }, 250)
}
onMounted(() => {
  modalEffect.value = true
  animationEffect.value = true
})
</script>

<template>
  <div class="modal" :class="[animationEffect ? 'modal-opacitity-show' : 'modal-opacitity-hide']">
    <div class="signup-modal" :class="[animationEffect ? 'modal-body-show' : 'modal-body-hide']">
      <div class="header">
        <img class="logo" src="@/assets/login/image/signup-logo.png" />
        <img class="coin" src="@/assets/login/image/coin.png" />
      </div>
      <div class="info-wrapper">
        <input type="text" v-model="email" :placeholder="t('signup.emailText')" class="mail-box" @focus="emailChange" @blur="emailPromptHide"/>
        <div class="mail-confirm-alert" v-if="emailValidShow"
          :class="[emailValidPromptShow ? 'modal-opacitity-show modal-body-show' : 'modal-opacitity-hide modal-body-hide']">
          <img src="@/assets/login/svg/warning-icon.svg" />
          <p>{{ t('signup.mainConfirmText') }}</p>
        </div>
        <div class="password-group">
          <input :type="passwordType" :placeholder="t('signup.passwordText')" class="pwd-box" v-model="password"
            @focus="passwordChange" @blur="visiblePasswordShow" />
          <img v-if="passwordShow" src="@/assets/login/svg/eye_1.svg" class="disable-password" @click="showPassword" />
          <img v-else src="@/assets/login/svg/eye.svg" class="disable-password" @click="showPassword" />
        </div>
        <div class="pass-confirm-alert" v-if="passwordValidShow"
          :class="[passwordValidPromptShow ? 'modal-opacitity-show modal-body-show' : 'modal-opacitity-hide modal-body-hide']">
          <div class="confirm-list">
            <img v-if="passwordCheck1" src="@/assets/login/svg/confirm-unchecked.svg" />
            <img v-else src="@/assets/login/svg/confirm-checked.svg" />
            <p :class="[passwordCheck1 ? 'passowrd-color-blue' : 'password-color-gray']">
              {{ t('signup.confirmListText1') }}
            </p>
          </div>
          <div class="confirm-list">
            <img v-if="passwordCheck2" src="@/assets/login/svg/confirm-unchecked.svg" />
            <img v-else src="@/assets/login/svg/confirm-checked.svg" />
            <p :class="[passwordCheck2 ? 'passowrd-color-blue' : 'password-color-gray']">
              {{ t('signup.confirmListText2') }}
            </p>
          </div>
          <div class="confirm-list">
            <img v-if="passwordCheck3" src="@/assets/login/svg/confirm-unchecked.svg" />
            <img v-else src="@/assets/login/svg/confirm-checked.svg" />
            <p :class="[passwordCheck3 ? 'passowrd-color-blue' : 'password-color-gray']">
              {{ t('signup.confirmListText3') }}
            </p>
          </div>
          <div class="confirm-list">
            <img v-if="passwordCheck4" src="@/assets/login/svg/confirm-unchecked.svg" />
            <img v-else src="@/assets/login/svg/confirm-checked.svg" />
            <p :class="[passwordCheck4 ? 'passowrd-color-blue' : 'password-color-gray']">
              Contains Special Code
            </p>
          </div>
        </div>
        <input type="text" :placeholder="t('signup.promoText')" />
        <div class="agree">
          <input type="checkbox" v-model="policy" />
          <p class="agree-text">
            {{ t('signup.agreeText1') }}
            <span class="agree-confirm">{{ t('signup.agreeText2') }}</span>
            {{ t('signup.agreeText3') }}
          </p>
        </div>
        <button @click="showNickName" :disabled="disabled">Sign Up</button>
        <p class="signin-wrapper">
          {{ t('signup.signinText1') }}
          <a href="#" class="link-signup" @click="showSignInDialog">{{
            t('signup.signinText2')
          }}</a>
        </p>
      </div>
      <div class="social-wrapper">
        <a href="#" class="facebook"><span class="visual-hidden">facebook</span></a>
        <a href="#" class="twitter"><span class="visual-hidden">twitter</span></a>
        <a href="#" class="tiktok"><span class="visual-hidden">tiltok</span></a>
        <a href="#" class="linkedin"><span class="visual-hidden">linkedin</span></a>
      </div>
      <img src="@/assets/login/svg/close-icon.svg" class="close-icon" @click="close" />
    </div>
  </div>
</template>

<style scoped>
.my-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.close-icon {
  position: absolute;
  right: 16px;
  top: 24px;
}

.close-icon:hover,
.close-icon:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.visual-hidden {
  display: none;
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

input[type='checkbox'] {
  width: 22px;
  height: 22px;
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

button:disabled {
  background: #353652;
  cursor: default;
}

.signup-modal {
  position: relative;
  width: 437px;
  height: 700px;
  background: #2e274c;
  border-radius: 20px;
}

.modal-transition {
  transform: translate(-50%, -50%);
}

.header {
  position: relative;
  background-image: url('@/assets/login/image/signup-header.png');
  width: 100%;
  height: 187px;
  border-radius: 20px 20px 0px 0px;
}

.header .logo {
  position: absolute;
  left: 24px;
  top: 24px;
}

.header .coin {
  position: absolute;
  left: 109px;
  top: -10px;
}

.info-wrapper {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
}

.info-wrapper .mail-box {
  margin-top: 12px;
}

.info-wrapper .agree {
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
}

.agree-text {
  color: #7782aa;
  text-align: left;
  width: 324px;
  font-size: 14px;
}

.agree-confirm {
  color: white;
  font-weight: bold;
}

.signin-wrapper {
  margin: 0;
  color: white;
  font-size: 16px;
}

.link-signup {
  color: #32cfec;
  font-weight: bold;
  font-size: 16px;
  text-decoration: none;
}

.social-wrapper {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
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

.passowrd-color-blue {
  color: #12ff76;
}

.password-color-gray {
  color: #7782aa;
}

.password-group {
  position: relative;
}

.disable-password {
  position: absolute;
  top: 16px;
  right: 10px;
  cursor: pointer;
}

.mail-confirm-alert {
  position: absolute;
  width: 375px;
  height: 40px;
  top: 167px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #211f31;
  border-radius: 12px;
  color: #7782aa;
  font-size: 12px;
  gap: 5px;
  /* transform: translate(-50%, 0px);
  left: 50%; */
}

.mail-confirm-alert::after {
  content: '';
  width: 0px;
  height: 0px;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: solid 8px #211f31;
  position: absolute;
  top: 39px;
}

.pass-confirm-alert {
  position: absolute;
  width: 340px;
  padding: 20px;
  top: 84px;
  border-radius: 12px;
  background: #211f31;
  color: #7782aa;
  font-size: 12px;
  /* transform: translate(-50%, 0px); */
  /* left: 50%; */
}

.pass-confirm-alert::after {
  content: '';
  width: 0px;
  height: 0px;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: solid 8px #211f31;
  position: absolute;
  top: 195px;
  left: 50%;
}

.pass-confirm-alert .confirm-list {
  display: flex;
  gap: 5px;
}
</style>
