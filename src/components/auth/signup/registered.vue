
<script lang="ts" setup>
import { ref, toRefs, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { authStore } from '@/stores/auth'
const i18n = useI18n()
const modalEffect = ref(false)
const animationEffect = ref(false)
const { setIndex } = authStore()
const emit = defineEmits<{
  (e: 'closeRegisteredDialog', registeredShow: boolean): void
}>()

const close = () => {
  animationEffect.value = false
  setTimeout(() => {
    setIndex('0')
    emit('closeRegisteredDialog', false)
  }, 250)
}

const showSignIn = () => {
  animationEffect.value = false
  setTimeout(() => {
    setIndex('2')
    emit('closeRegisteredDialog', false)
  }, 250)
}
onMounted(() => {
  modalEffect.value = true
  animationEffect.value = true
})
</script>

<template>
  <div class="modal" :class="[animationEffect ? 'modal-opacitity-show' : 'modal-opacitity-hide']">
    <div
      class="registered-modal"
      :class="[animationEffect ? 'modal-body-show' : 'modal-body-hide']"
    >
      <div class="header">
        <img class="logo" src="@/assets/login/svg/signup-logo.png" />
        <img class="coin" src="@/assets/login/svg/coin.png" />
      </div>
      <p class="question-text">Looks like you've already registered, sign in now?</p>
      <button class="continue-button" @click="showSignIn">Confirm</button>
      <button class="cancel-button" @click="close">Cancel</button>
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

.close-icon:hover,
.close-icon:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
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
  background-image: url('@/assets/login/image/signup-header.png');
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

.registered-modal {
  position: relative;
  width: 471px;
  height: 537px;
  background: #2e274c;
  border-radius: 16px;
  text-align: center;
}

.registered-modal .question-text {
  font-size: 16px;
  color: #7782aa;
  margin: 60px 0 0 0;
  padding: 0 100px;
  text-align: left;
}

.registered-modal .continue-button {
  margin-top: 60px;
}

.registered-modal .cancel-button {
  color: white;
  background: #353652;
  margin-top: 32px;
}
</style>
