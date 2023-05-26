<template>
  <div class="modal" :class="[animationEffect ? 'modal-opacitity-show' : 'modal-opacitity-hide']">
    <div class="forgot-modal" :class="[animationEffect ? 'modal-body-show' : 'modal-body-hide']">
      <img src="@/assets/images/auth/forgot-logo.png" class="forgot-logo" />
      <p class="forgot-text">Forgot Password ?</p>
      <input type="text" placeholder="Email Address" class="input-mail" />
      <button class="submit-button" @click="close">Submit</button>
      <div class="social-wrapper">
        <a href="#" class="facebook"><span class="visual-hidden">facebook</span></a>
        <a href="#" class="twitter"><span class="visual-hidden">twitter</span></a>
        <a href="#" class="tiktok"><span class="visual-hidden">tiltok</span></a>
        <a href="#" class="linkedin"><span class="visual-hidden">linkedin</span></a>
      </div>
      <img src="@/assets/images/auth/close-icon.svg" class="close-icon" @click="close" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs, watch, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { authStore } from '@/stores/auth'
const i18n = useI18n()
const { setIndex } = authStore()
const modalEffect = ref(false)
const animationEffect = ref(false)
const emit = defineEmits<{
  (e: 'showForgotPassword', forgotShow: boolean): void
}>()

const close = () => {
  animationEffect.value = false
  setTimeout(() => {
    setIndex('0')
    emit('showForgotPassword', false)
  }, 250)
}
onMounted(() => {
  modalEffect.value = true
  animationEffect.value = true
})
</script>

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

.social-wrapper {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
}

.facebook {
  background-image: url('@/assets/images/auth/facebook.svg');
  width: 48px;
  height: 48px;
}

.twitter {
  background-image: url('@/assets/images/auth/twitter.svg');
  width: 48px;
  height: 48px;
}

.tiktok {
  background-image: url('@/assets/images/auth/tiktok.svg');
  width: 48px;
  height: 48px;
}

.linkedin {
  background-image: url('@/assets/images/auth/linkedin.svg');
  width: 48px;
  height: 48px;
}
/* forgot modal */
.forgot-modal {
  position: relative;
  width: 471px;
  height: fit-content;
  background: #2e274c;
  border-radius: 16px;
  text-align: center;
}

.forgot-modal .forgot-logo {
  margin-top: 40px;
}

.forgot-modal .forgot-text {
  margin: 24px 0 0 0;
  font-size: 20px;
  color: white;
  font-weight: 700;
}

.forgot-modal .input-mail {
  margin-top: 24px;
}

.forgot-modal .submit-button {
  margin-top: 40px;
}

.forgot-modal .social-wrapper {
  margin: 40px 0;
}
</style>
