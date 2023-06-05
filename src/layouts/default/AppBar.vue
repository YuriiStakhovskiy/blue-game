<script lang="ts" setup>
import { ref, watch, computed, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { setLang } from "@/locale/index";
import { authStore } from "@/store/auth";
import { appBarStore } from "@/store/appBar";
import { storeToRefs } from "pinia";
import { type GetUserData } from "@/interface/appBar";

const { setAuthModalType } = authStore();
const { setRightBarToggle } = appBarStore();
const { setNavBarToggle } = appBarStore();

type dialogType = "login" | "signup";
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

// logged in user info
const user = ref<GetUserData>({
  id: "User6696608024",
  avatar: new URL("@/assets/app_bar/image/ua_public_10.png", import.meta.url).href,
  name: "Little Planes",
  grade_level: "Bronze",
  grade: "VIP 4",
  wallet: 515.25,
  currency: "R$",
});

// mail count
const mailCount = ref<number>(10);
// message count
const messageCount = ref<number>(299);

const appBarWidth = ref<string>('app-bar-width');

// get Token
const token = computed(() => {
  const { getToken } = storeToRefs(authStore());
  return getToken.value;
});

const rightBarToggle = computed(() => {
  const { getRightBarToggle } = storeToRefs(appBarStore());
  return getRightBarToggle.value;
})

const navBarToggle = computed(() => {
  const {getNavBarToggle} = storeToRefs(appBarStore());
  return getNavBarToggle.value
})

watch(rightBarToggle, (newValue) => {
  if (newValue && navBarToggle.value) {
    appBarWidth.value = "app-bar-width";
  } else if(newValue && !navBarToggle.value) {
    appBarWidth.value = "app-bar-width-1";
  } else if (!newValue && navBarToggle.value) {
    appBarWidth.value = "app-bar-width-2";
  } else if (!newValue && !navBarToggle.value) {
    appBarWidth.value = "app-bar-width-3";
  }
})

watch(navBarToggle, (newValue) => {
  console.log("navbarToggle", newValue);
  if (newValue && rightBarToggle.value) {
    appBarWidth.value = "app-bar-width";
  } else if(newValue && !rightBarToggle.value) {
    appBarWidth.value = "app-bar-width-2";
  } else if (!newValue && rightBarToggle.value) {
    appBarWidth.value = "app-bar-width-1";
  } else if (!newValue && !rightBarToggle.value) {
    appBarWidth.value = "app-bar-width-3";
  }
})

const toggleLanguage = () => {
  currentLanguage.value = currentLanguage.value === "en" ? "zh" : "en";
};
const openDialog = (type: dialogType) => {
  setAuthModalType(type);
};

const showSignoutDialog = () => {
  setAuthModalType("signout");
}

// watches
watch(currentLanguage, (newLang, oldLang) => {
  setLang(newLang);
});

onMounted(() => {
  setAuthModalType("");
});
</script>

<template>
  <v-app-bar app dark :color="color" :elevate-on-scroll="elevateOnScroll" :hide-on-scroll="hideOnScroll"
    :fade-on-scroll="fadeOnScroll" :fade-img-on-scroll="fadeImgOnScroll" :inverted-scroll="invertedScroll"
    :collapse="collapse" :collapse-on-scroll="collapseOnScroll" :shrink-on-scroll="shrinkOnScroll" :extended="extended"
    :class="appBarWidth" class="app-bar-height">
    <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
    <v-toolbar-title>
      <img src="@/assets/public/svg/logo.svg" class="mt-3" />
    </v-toolbar-title>
    <div v-if="token != undefined">
      <div class="d-flex">
        <v-menu offset="10" class="deposit-menu">
          <template v-slot:activator="{ props }">
            <v-card color="#29263C" theme="dark" class="mr-4 mt-2 user-card-height">
              <v-list-item class="deposit-item user-card-height" v-bind="props" value="deposit dropdown">
                <div class="d-flex align-center">
                  <p class="mr-1">{{ user.currency }}</p>
                  <p class="mr-2">{{ user.wallet }}</p>
                  <img src="@/assets/app_bar/svg/down.svg" class="mr-2" />
                  <img src="@/assets/app_bar/svg/deposit.svg" class="deposit-icon-position" />
                </div>
              </v-list-item>
            </v-card>
          </template>
          <!-- <v-list theme="dark" bg-color="#211F31">
                              </v-list> -->
        </v-menu>
        <v-menu offset="10" class="user-menu">
          <template v-slot:activator="{ props }">
            <v-card color="#29263C" theme="dark" class="mr-4 mt-2 user-card-height">
              <v-list-item class="user-item" v-bind="props" value="user dropdown">
                <div class="d-flex align-center">
                  <img :src="user.avatar" class="user-avatar-width" />
                  <div class="ml-1">
                    <div>{{ user.name }}</div>
                    <div class="d-flex align-center">
                      <div class="user-grade-text">{{ user.grade }}</div>
                      <img src="@/assets/app_bar/svg/down.svg" class="user-drop-arrow-position" />
                    </div>
                  </div>
                </div>
              </v-list-item>
            </v-card>
          </template>
          <v-list theme="dark" bg-color="#211F31" class="px-2">
            <v-list-item class="user-item" value="id">
              <template v-slot:prepend>
                <img src="@/assets/app_bar/svg/icon_public_58.svg" />
              </template>
              <v-list-item-title class="ml-2">{{ t('appBar.id') }}: {{ user.id }}</v-list-item-title>
              <template v-slot:append>
                <img src="@/assets/app_bar/svg/icon_public_71.svg" v-ripple.center class="ml-6" />
              </template>
            </v-list-item>
            <v-list-item class="user-item vip-background-img" value="vip">
              <template v-slot:prepend>
                <img src="@/assets/app_bar/svg/img_vip_02.svg" style="margin-left: -6px;" />
              </template>
              <v-list-item-title class="ml-2">
                <div class="grade-color d-flex">
                  <div>{{ user.grade_level }}</div>
                  <div class="grade-text-position">{{ user.grade }}</div>
                </div>
                <div>
                  <img src="@/assets/app_bar/image/Group 399.png">
                </div>
              </v-list-item-title>
              <template v-slot:append>
                <img src="@/assets/app_bar/svg/img_public_05.svg" v-ripple.center class="ml-6" />
                <img src="@/assets/app_bar/svg/img_public_05.svg" v-ripple.center class="ml-1" />
                <img src="@/assets/app_bar/svg/img_public_05.svg" v-ripple.center class="ml-1" />
              </template>
            </v-list-item>
            <v-list-item class="user-item" value="account">
              <template v-slot:prepend>
                <img src="@/assets/app_bar/svg/icon_public_59.svg" />
              </template>
              <v-list-item-title class="ml-2">{{ t('appBar.account') }}</v-list-item-title>
            </v-list-item>
            <v-list-item class="user-item" value="deposit">
              <template v-slot:prepend>
                <img src="@/assets/app_bar/svg/icon_public_60.svg" />
              </template>
              <v-list-item-title class="ml-2">{{ t('appBar.deposit') }}</v-list-item-title>
            </v-list-item>
            <v-list-item class="user-item" value="bonuses">
              <template v-slot:prepend>
                <img src="@/assets/app_bar/svg/icon_public_61.svg" />
              </template>
              <v-list-item-title class="ml-2">{{ t('appBar.bonuses') }}</v-list-item-title>
            </v-list-item>
            <v-list-item class="user-item" value="game_history">
              <template v-slot:prepend>
                <img src="@/assets/app_bar/svg/icon_public_62.svg" />
              </template>
              <v-list-item-title class="ml-2">{{ t('appBar.game_history') }}</v-list-item-title>
            </v-list-item>
            <v-list-item class="user-item" value="transactions">
              <template v-slot:prepend>
                <img src="@/assets/app_bar/svg/icon_public_63.svg" />
              </template>
              <v-list-item-title class="ml-2">{{ t('appBar.transactions') }}</v-list-item-title>
            </v-list-item>
            <v-list-item class="user-item refer-friend-background" value="refer_friend">
              <template v-slot:prepend>
                <img src="@/assets/app_bar/svg/icon_public_64.svg" />
              </template>
              <v-list-item-title class="ml-2">{{ t('appBar.refer_friend') }}</v-list-item-title>
              <template v-slot:append>
                <img src="@/assets/app_bar/image/img_public_09.png" v-ripple.center
                  class="ml-6 refer-friend-img-position" />
                <p class="refer-friend-text-position">{{ t('appBar.earn_money') }}</p>
              </template>
            </v-list-item>
            <v-list-item class="user-item" value="withdraw">
              <template v-slot:prepend>
                <img src="@/assets/app_bar/svg/icon_public_65.svg" />
              </template>
              <v-list-item-title class="ml-2">{{ t('appBar.withdraw') }}</v-list-item-title>
            </v-list-item>
            <v-list-item class="user-item app-background" value="app">
              <template v-slot:prepend>
                <img src="@/assets/app_bar/svg/icon_public_66.svg" />
              </template>
              <v-list-item-title class="ml-2">{{ t('appBar.app') }}</v-list-item-title>
              <template v-slot:append>
                <img src="@/assets/app_bar/image/img_public_04.png" v-ripple.center class="ml-6 app-img-position" />
                <p class="app-text-position">{{ t('appBar.install') }}</p>
              </template>
            </v-list-item>
            <v-list-item class="user-item" value="fairness">
              <template v-slot:prepend>
                <img src="@/assets/app_bar/svg/icon_public_66 (1).svg" />
              </template>
              <v-list-item-title class="ml-2">{{ t('appBar.fairness') }}</v-list-item-title>
            </v-list-item>
            <v-list-item class="user-item" value="rewards">
              <template v-slot:prepend>
                <img src="@/assets/app_bar/svg/icon_public_67.svg" />
              </template>
              <v-list-item-title class="ml-2">{{ t('appBar.rewards') }}</v-list-item-title>
            </v-list-item>
            <v-list-item class="user-item" value="preferences">
              <template v-slot:prepend>
                <img src="@/assets/app_bar/svg/icon_public_68.svg" />
              </template>
              <v-list-item-title class="ml-2">{{ t('appBar.preferences') }}</v-list-item-title>
            </v-list-item>
            <v-list-item class="user-item" value="statistics">
              <template v-slot:prepend>
                <img src="@/assets/app_bar/svg/icon_public_69.svg" />
              </template>
              <v-list-item-title class="ml-2">{{ t('appBar.statistics') }}</v-list-item-title>
            </v-list-item>
            <v-list-item class="user-item">
              <v-list-item-title>
                <div class="d-flex justify-center sign-out-btn" v-ripple.center @click="showSignoutDialog">
                  <img src="@/assets/app_bar/svg/icon_public_70.svg" />
                  {{ t('appBar.sign_out') }}
                </div>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <div class="mr-4 mt-5 relative mail-height" v-ripple.center>
          <img src="@/assets/app_bar/svg/icon_public_55.svg" />
          <p class="chat-box-text">{{ mailCount }}</p>
        </div>
        <div class="mr-8 mt-5 relative mail-height" v-ripple @click="setRightBarToggle(true)">
          <img src="@/assets/app_bar/svg/icon_public_56.svg" />
          <p class="chat-box-text">{{ messageCount }}</p>
        </div>
      </div>
    </div>
    <div v-else>
      <v-switch :label="currentLanguage === 'en' ? 'English' : '中文'" color="success" value="success"
        @change="toggleLanguage" hide-details class="toggle-language-switch" />
      <v-btn @click="openDialog('login')" class="app-bar-login-btn text-none">
        {{ t("main.loginButton") }}
      </v-btn>
      <v-btn @click="openDialog('signup')" class="app-bar-signup-btn text-none mr-2">
        {{ t("main.signupButton") }}
      </v-btn>
    </div>
  </v-app-bar>
</template>

<style lang="scss">
.app-bar-width {
  width: calc((100% - 620px) - 0px) !important;
  margin-left: 260px;
}

.app-bar-width-1 {
  width: calc((100% - 360px) - 0px) !important;
  margin-left: 10px;
}

.app-bar-width-2 {
  width: calc((100% - 260px) - 0px) !important;
  margin-left: 250px;
}

.app-bar-width-3 {
  width: calc((100% - 20px) - 0px) !important;
  margin-left: 10px;
}

.app-bar-height {
  border-radius: 0px 0px 32px 32px !important;
  height: 68px !important;
  color: #ffffff !important;
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
  height: 46px !important;
  background-color: #29263c;
  margin-right: 6px;
}

.app-bar-signup-btn {
  width: 120px;
  height: 46px !important;
  background-color: #5524fd !important;
}

.chat-box-text {
  top: -6px;
  right: -9px;
  position: absolute;
  font-weight: 800;
  font-size: 12px;
  color: #000000;
  background: #12ff76;
  border-radius: 15px;
  padding: 0px 5px;
}

.user-avatar-width {
  width: 50px;
}

.user-grade-text {
  font-weight: 800;
  font-size: 14px;
  color: #e5b991;
}

.user-card-height {
  height: 56px !important;
}

.user-drop-arrow-position {
  margin-left: auto;
}

.deposit-icon-position {
  margin-left: auto;
}

.mail-height {
  border-radius: 10px;
  height: 36px;
  cursor: pointer;
}

.user-item {
  padding: 4px 8px !important;
  border-radius: 12px !important;

  .v-list-item-title {
    font-weight: 700;
    font-size: 14px;
    color: #7782aa;
  }
}

.user-menu {
  margin-left: auto !important;

  .v-overlay__content {
    top: 74px !important;
  }

  .v-overlay__content::after {
    content: "";
    position: absolute;
    align-self: center;
    float: right;
    top: -16px;
    border: 9px solid #211f31;
    border-right-color: transparent;
    border-left-color: transparent;
    border-top-color: transparent;
    border-right-width: 7px;
    border-left-width: 7px;
  }
}

.vip-background-img {
  background-image: url('@/assets/app_bar/image/bg_public_27.png');
}

.grade-color {
  color: #E6BA93
}

.grade-text-position {
  margin-left: auto
}

.refer-friend-background {
  background-image: url('@/assets/app_bar/image/bg_public_28.png');
}

.refer-friend-img-position {
  position: absolute;
  right: 14px;
  top: -20px;
}

.refer-friend-text-position {
  position: absolute;
  right: 9px;
  top: 20px;
  background: #211F31;
  border-radius: 20px;
  padding: 4px 6px;
  font-weight: 500;
  font-size: 12px;
}

.app-background {
  background-image: url('@/assets/app_bar/image/bg_public_29.png');
}

.app-img-position {
  position: absolute;
  right: 9px;
  top: -20px;
}

.app-text-position {
  position: absolute;
  right: 20px;
  top: 20px;
  background: #211F31;
  border-radius: 20px;
  padding: 4px 13px;
  font-weight: 500;
  font-size: 12px;
}

.sign-out-btn {
  cursor: pointer;
  background: #353652;
  border-radius: 12px;
  padding: 13px;
  margin: 0px 20px;
}
</style>
