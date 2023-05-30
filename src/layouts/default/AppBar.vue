<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { setLang } from '@/locale/index'
import { authStore } from '@/store/auth';

const { setAuthModalType } = authStore();

type dialogType = 'login' | 'signup';
const hideOnScroll = ref(false);
const fadeOnScroll = ref(false);
const fadeImgOnScroll = ref(false);
const invertedScroll = ref(false);
const collapse = ref(false);
const collapseOnScroll = ref(false);
const shrinkOnScroll = ref(false);
const elevateOnScroll = ref(false);
const extended = ref(false);
const color = ref("#29263C");
// translation
const { t } = useI18n();
const currentLanguage = ref("en");

const toggleLanguage = () => {
  currentLanguage.value = currentLanguage.value === "en" ? "zh" : "en";
}
const openDialog = (type: dialogType) => {
  setAuthModalType(type);
}
// watches
watch(currentLanguage, (newLang, oldLang) => {
  setLang(newLang);
});

onMounted(() => {
  setAuthModalType("");
})
</script>

<template>
  <v-app-bar app dark :color="color" :elevate-on-scroll="elevateOnScroll" :hide-on-scroll="hideOnScroll"
    :fade-on-scroll="fadeOnScroll" :fade-img-on-scroll="fadeImgOnScroll" :inverted-scroll="invertedScroll"
    :collapse="collapse" :collapse-on-scroll="collapseOnScroll" :shrink-on-scroll="shrinkOnScroll" :extended="extended"
    class="app-bar-width">
    <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
    <v-toolbar-title>
      <img src="@/assets/public/svg/logo.svg" class="mt-3">
    </v-toolbar-title>
    <div class="flex-grow-1"></div>
    <v-switch :label="currentLanguage === 'en' ? 'English' : '中文'" color="success" value="success"
      @change="toggleLanguage" hide-details class="toggle-language-switch" />
    <v-btn @click="openDialog('login')" class="app-bar-login-btn text-none">
      {{ t('main.loginButton') }}
    </v-btn>
    <v-btn @click="openDialog('signup')" class="app-bar-signup-btn text-none">
      {{ t('main.signupButton') }}
    </v-btn>
  </v-app-bar>
</template>

<style lang="scss">
.app-bar-width {
  width: calc((100% - 520px) - 0px) !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  border-radius: 0px 0px 32px 32px !important;
  height: 72px !important;
  color: #FFFFFF!important
}

.toggle-language-switch {
  position: absolute;
  top: 1%;
  left: 56%;
  display: none !important;
}

.v-selection-control.v-selection-control--density-default {
  div.v-switch__track {
    background-color: #e9e9e9;
  }

  .v-label {
    font-size: larger;
    color: white;
    font-weight: 400;
  }
}

.v-selection-control.v-selection-control--dirty.v-selection-control--density-default {
  div.v-switch__track {
    background-color: rgb(76, 175, 80);
  }
}
.app-bar-login-btn {
  width: 120px;
  height: 46px!important;
  background-color: #29263C;
  margin-right: 6px;
}
.app-bar-signup-btn {
  width: 120px;
  height: 46px!important;
  background-color: #5524FD;
}
</style>
