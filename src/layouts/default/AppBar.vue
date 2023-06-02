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
  avatar: new URL("@/assets/app_bar/image/ua_public_10.png", import.meta.url)
    .href,
  name: "Little Planes",
  grade: "VIP 4",
  wallet: 515.25,
  currency: "R$",
});
// sport items
const userDropDownItems = ref<Array<string>>([
  t("rightBar.dropdownItem.sport"),
  t("rightBar.dropdownItem.casino"),
]);

// mail count
const mailCount = ref<number>(10);
// message count
const messageCount = ref<number>(299);
// user wallet
const wallet = ref;

// get Token
const token = computed(() => {
  const { getToken } = storeToRefs(authStore());
  return getToken.value;
  // return undefined;
});

const toggleLanguage = () => {
  currentLanguage.value = currentLanguage.value === "en" ? "zh" : "en";
};
const openDialog = (type: dialogType) => {
  setAuthModalType(type);
};

// watches
watch(currentLanguage, (newLang, oldLang) => {
  setLang(newLang);
});

onMounted(() => {
  setAuthModalType("");
});
</script>

<template>
  <v-app-bar
    app
    dark
    :color="color"
    :elevate-on-scroll="elevateOnScroll"
    :hide-on-scroll="hideOnScroll"
    :fade-on-scroll="fadeOnScroll"
    :fade-img-on-scroll="fadeImgOnScroll"
    :inverted-scroll="invertedScroll"
    :collapse="collapse"
    :collapse-on-scroll="collapseOnScroll"
    :shrink-on-scroll="shrinkOnScroll"
    :extended="extended"
    class="app-bar-width"
  >
    <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
    <v-toolbar-title>
      <img src="@/assets/public/svg/logo.svg" class="mt-3" />
    </v-toolbar-title>
    <div class="flex-grow-1"></div>
    <div v-if="token != undefined">
      <div class="d-flex">
        <v-menu offset="10" class="deposit-menu">
          <template v-slot:activator="{ props }">
            <v-card
              color="#29263C"
              theme="dark"
              class="mr-4 mt-2 user-card-height"
            >
              <v-list-item
                class="deposit-item user-card-height"
                v-bind="props"
                value="deposit dropdown"
              >
                <div class="d-flex align-center">
                  <p class="mr-1">{{ user.currency }}</p>
                  <p class="mr-2">{{ user.wallet }}</p>
                  <img src="@/assets/app_bar/svg/down.svg" class="mr-2" />
                  <img
                    src="@/assets/app_bar/svg/deposit.svg"
                    class="deposit-icon-position"
                  />
                </div>
              </v-list-item>
            </v-card>
          </template>
          <v-list theme="dark" bg-color="#211F31">
            <v-list-item
              v-for="(item, i) in userDropDownItems"
              :key="i"
              :value="item"
            >
              <v-list-item-title>{{ item }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu offset="10" class="user-menu">
          <template v-slot:activator="{ props }">
            <v-card
              color="#29263C"
              theme="dark"
              class="mr-4 mt-2 user-card-height"
            >
              <v-list-item
                class="user-item"
                v-bind="props"
                value="user dropdown"
              >
                <div class="d-flex align-center">
                  <img :src="user.avatar" class="user-avatar-width" />
                  <div class="ml-1">
                    <div>{{ user.name }}</div>
                    <div class="d-flex align-center">
                      <div class="user-grade-text">{{ user.grade }}</div>
                      <img
                        src="@/assets/app_bar/svg/down.svg"
                        class="user-drop-arrow-position"
                      />
                    </div>
                  </div>
                </div>
              </v-list-item>
            </v-card>
          </template>
          <v-list theme="dark" bg-color="#211F31">
            <v-list-item
              v-for="(item, i) in userDropDownItems"
              :key="i"
              :value="item"
            >
              <v-list-item-title>{{ item }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <div class="mr-4 mt-5 relative mail-height" v-ripple.center>
          <img src="@/assets/app_bar/svg/icon_public_55.svg" />
          <p class="chat-box-text">{{ mailCount }}</p>
        </div>
        <div
          class="mr-8 mt-5 relative mail-height"
          v-ripple
          @click="setRightBarToggle(true)"
        >
          <img src="@/assets/app_bar/svg/icon_public_56.svg" />
          <p class="chat-box-text">{{ messageCount }}</p>
        </div>
      </div>
    </div>
    <div v-else>
      <v-switch
        :label="currentLanguage === 'en' ? 'English' : '中文'"
        color="success"
        value="success"
        @change="toggleLanguage"
        hide-details
        class="toggle-language-switch"
      />
      <v-btn @click="openDialog('login')" class="app-bar-login-btn text-none">
        {{ t("main.loginButton") }}
      </v-btn>
      <v-btn
        @click="openDialog('signup')"
        class="app-bar-signup-btn text-none mr-2"
      >
        {{ t("main.signupButton") }}
      </v-btn>
    </div>
  </v-app-bar>
</template>

<style lang="scss">
.app-bar-width {
  width: calc((100% - 620px) - 0px) !important;
  left: 47% !important;
  transform: translateX(-50%) !important;
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
</style>
