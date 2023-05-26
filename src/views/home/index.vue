<template>
  <SIGNUP
    v-if="index == 1"
    @showRegisteredDialog="showRegisteredDialog"
    @showConfirmDialog="showConfirmDialog"
    @showNickNameDialog="showNickNameDialog"
    @submitEmail="submitEmail"
  />
  <CONFIRM v-if="confirmShow" @showConfirmDialog="showConfirmDialog" />
  <REGISTERED v-if="registeredShow" @closeRegisteredDialog="closeRegisteredDialog" />
  <NICKNAME v-if="nicknameShow" @showNickNameDialog="showNickNameDialog" :email="email" />

  <SIGNIN v-if="index == 2" @showForgotPassword="showForgotPassword" />
  <FORGOTPASSWORD v-if="forgotShow" @showForgotPassword="showForgotPassword" />
  <SIGNOUT v-if="index == 3" />
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'

// signup compoments
import SIGNUP from '@/components/auth/signup/index.vue'
import CONFIRM from '@/components/auth/signup/confirm.vue'
import REGISTERED from '@/components/auth/signup/registered.vue'
import NICKNAME from '@/components/auth/signup/nickname.vue'

// signin compoments
import SIGNIN from '@/components/auth/signin/index.vue'
import FORGOTPASSWORD from '@/components/auth/signin/forgot_password.vue'
import SIGNOUT from '@/components/auth/signin/signout.vue'

// auth store
import { authStore } from '@/stores/auth'

// signin compoments show
const signinShow = ref(false)
const email = ref('')
const forgotShow = ref(false)

// signup compoments show
const confirmShow = ref(false)
const registeredShow = ref(false)
const nicknameShow = ref(false)

const index = computed(() => {
  const { getIndex } = storeToRefs(authStore())
  return getIndex.value
})
const showForgotPassword = (data: boolean) => {
  forgotShow.value = data
}
const closeRegisteredDialog = (data: boolean) => {
  registeredShow.value = data
}
const showRegisteredDialog = (data: boolean) => {
  registeredShow.value = data
}
const showConfirmDialog = (data: boolean) => {
  confirmShow.value = data
}
const showNickNameDialog = (data: boolean) => {
  nicknameShow.value = data
}
const submitEmail = (data: string) => {
  email.value = data
}
</script>
<style lang="scss" scoped></style>
