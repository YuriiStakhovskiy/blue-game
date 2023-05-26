<template>
  <div class="modal" :class="[animationEffect ? 'modal-opacitity-show' : 'modal-opacitity-hide']">
    <div class="nickname-modal" :class="[animationEffect ? 'modal-body-show' : 'modal-body-hide']">
      <div class="avatar-wrapper">
        <img src="@/assets/images/auth/left-arrow.svg" />
        <img src="@/assets/images/auth/nickname-avatar.png" />
        <img src="@/assets/images/auth/right-arrow.svg" />
      </div>
      <p class="notice-text">Enter a display name</p>
      <input type="text" placeholder="Username" v-model="nickName" @focus="nickNameChange" @blur="nickNameValidShow" />
      <button class="submit-button" @click="close" :disabled="disabled">Submit</button>
      <div class="name-confirm-alert" v-if="confirmValidShow"
        :class="[confirmValidPromtShow ? 'modal-opacitity-show modal-body-show' : 'modal-opacitity-hide modal-body-hide']">
        <p>This is the name others will see on Blue.game</p>
        <div class="confirm-list">
          <img v-if="nickNameCheck1" src="@/assets/images/auth/confirm-unchecked.svg" />
          <img v-else src="@/assets/images/auth/confirm-checked.svg" />
          <p :class="[nickNameCheck1 ? 'passowrd-color-blue' : 'password-color-gray']">
            2-20 characters in length
          </p>
        </div>
        <div class="confirm-list">
          <img v-if="nickNameCheck2" src="@/assets/images/auth/confirm-unchecked.svg" />
          <img v-else src="@/assets/images/auth/confirm-checked.svg" />
          <p :class="[nickNameCheck2 ? 'passowrd-color-blue' : 'password-color-gray']">
            Nickname must not be like your email
          </p>
        </div>
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
const props = defineProps<{
  email: string
}>()
const { email } = toRefs(props)
const nickName = ref('')
const modalEffect = ref(false)
const animationEffect = ref(false)
const disabled = ref(true)
const nickNameCheck1 = ref(false)
const nickNameCheck2 = ref(false)
const confirmValidShow = ref(false)
const confirmValidPromtShow = ref(false)
const emit = defineEmits<{
  (e: 'showNickNameDialog', nicknameShow: boolean): void
}>()
const nickNameChange = () => {
  confirmValidShow.value = true
  confirmValidPromtShow.value = true;
}
const nickNameValidShow = () => {
  confirmValidPromtShow.value = false;
  setTimeout(() => {
    confirmValidShow.value = false
  }, 250)
}
const close = () => {
  animationEffect.value = false
  setTimeout(() => {
    emit('showNickNameDialog', false)
  }, 250)
}
const regExp1 = /^[a-zA-Z0-9~!.@#$%&*()_-]{2,20}$/
watch(
  nickName,
  () => {
    console.log(email.value)
    if (regExp1.test(nickName.value)) {
      nickNameCheck1.value = true
    } else {
      nickNameCheck1.value = false
    }
    if (nickName.value === email.value || nickName.value == '') {
      nickNameCheck2.value = false
    } else {
      nickNameCheck2.value = true
    }
    if (nickNameCheck1.value && nickNameCheck2.value) {
      disabled.value = false
    } else {
      disabled.value = true
    }
  },
  { deep: true }
)
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

button:disabled {
  background: #353652;
}

.nickname-modal {
  position: relative;
  width: 471px;
  height: 439px;
  background: #2e274c;
  border-radius: 16px;
  text-align: center;
}

.nickname-modal .avatar-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 45px;
  padding: 0;
  margin-top: 24px;
}

.nickname-modal .notice-text {
  font-size: 28px;
  color: white;
  font-weight: 700;
  padding: 24px 0;
  margin: 0;
}

.passowrd-color-blue {
  color: #12ff76;
}

.password-color-gray {
  color: #7782aa;
}

.nickname-modal .submit-button {
  color: white;
  margin-top: 32px;
}

.nickname-modal .name-confirm-alert {
  position: absolute;
  width: 335px;
  padding: 20px;
  top: 82px;
  border-radius: 12px;
  background: #211f31;
  color: #7782aa;
  font-size: 12px;
  transform: translateX(-50%);
  left: 50%;
}

.nickname-modal .name-confirm-alert::after {
  content: '';
  width: 0px;
  height: 0px;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: solid 8px #211f31;
  position: absolute;
  top: 157px;
}

.nickname-modal .name-confirm-alert .confirm-list {
  display: flex;
  gap: 5px;
}
</style>
