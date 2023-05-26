<script lang="ts" setup>
import { ref, toRefs, watch, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { authStore } from '@/stores/auth'
const i18n = useI18n()
const { setIndex } = authStore()
const animationEffect = ref(false)

const close = () => {
  animationEffect.value = false
  setTimeout(() => {
    setIndex('0')
  }, 250)
}
onMounted(() => {
  animationEffect.value = true
})
</script>

<template>
  <div class="modal" :class="[animationEffect ? 'modal-opacitity-show' : 'modal-opacitity-hide']">
    <div class="signout-modal" :class="[animationEffect ? 'modal-body-show' : 'modal-body-hide']">
      <div class="header">
        <img src="@/assets/login/image/logout-logo.png" class="logout-logo" />
        <p class="logo-text">Don’t forgot to check out our huge selection of promotions!</p>
      </div>
      <p class="signout-text">Are you sure you want to logout?</p>
      <p class="signout-notice">
        Don’t forgot to check out our huge selection of casino and sports promotions before you
        leave!
      </p>
      <button class="logout-button" @click="close">Log Out</button>
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
/* Signout modal */
.signout-modal {
  position: relative;
  width: 471px;
  height: fit-content;
  background: #2e274c;
  border-radius: 16px;
  text-align: center;
}

.signout-modal .header {
  background: linear-gradient(0deg, #6030cb, #6030cb), #5904d9;
  border-radius: 16px 16px 0px 0px;
}

.signout-modal .header .logout-logo {
  margin-top: -10px;
}

.signout-modal .header .logo-text {
  color: white;
  font-size: 20px;
  font-weight: 700;
  padding: 18px 80px 28px 80px;
  margin: 0;
}

.signout-modal .signout-text {
  margin: 50px 120px 0 120px;
  color: white;
  font-size: 28px;
  font-weight: 700;
}

.signout-modal .signout-notice {
  margin: 56px 53px 0 53px;
  color: white;
  font-size: 16px;
}

.signout-modal .logout-button {
  margin: 40px 0;
}
</style>
