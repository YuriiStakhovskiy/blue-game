<template>
  <div class="modal" :class="[animationEffect ? 'modal-opacitity-show' : 'modal-opacitity-hide']">
    <div class="confirm-modal" :class="[animationEffect ? 'modal-body-show' : 'modal-body-hide']">
      <div class="header">
        <img class="logo" src="@/assets/images/auth/signup-logo.png" />
        <img class="coin" src="@/assets/images/auth/coin.png" />
      </div>
      <p class="confirm-text">Are you sure you want to cancel your registration?</p>
      <p class="confirm-notice">€200 in deposit bonuses awaits you.</p>
      <button class="continue-button" @click="showSignUp">Continue</button>
      <button class="cancel-button" @click="close">Yes. I want to cancel</button>
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
const emit = defineEmits<{
  (e: 'showConfirmDialog', forgotShow: boolean): void
}>()
const modalEffect = ref(false)
const animationEffect = ref(false)

const close = () => {
  animationEffect.value = false
  setTimeout(() => {
    setIndex('0')
    emit('showConfirmDialog', false)
  }, 250)
}
const showSignUp = () => {
  animationEffect.value = false
  setTimeout(() => {
    setIndex('1')
    emit('showConfirmDialog', false)
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

.header {
  position: relative;
  background-image: url('@/assets/images/auth/signup-header.png');
  width: 100%;
  height: 187px;
}

.header .logo {
  position: absolute;
  left: 24px;
  top: 24px;
}

.header .coin {
  position: absolute;
  left: 138px;
  top: -10px;
}

.confirm-modal {
  position: relative;
  width: 471px;
  height: 594px;
  background: #2e274c;
  border-radius: 16px;
  text-align: center;
}

.confirm-modal.hidden {
  display: none;
}

.confirm-modal .confirm-text {
  font-size: 28px;
  color: white;
  font-weight: 700;
  padding: 0 30px;
  margin: 60px 0 0 0;
}

.confirm-modal .confirm-notice {
  font-size: 16px;
  color: #7782aa;
  margin: 28px 0 0 0;
  text-align: center;
}

.confirm-modal .continue-button {
  margin-top: 40px;
}

.confirm-modal .cancel-button {
  color: white;
  background: #353652;
  margin-top: 32px;
}
</style>
