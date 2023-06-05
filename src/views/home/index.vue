<script lang="ts">
import {
  defineComponent,
  toRefs,
  reactive,
  watch,
  ref,
  computed,
  onMounted,
} from "vue";
import Signup from "@/components/Signup/index.vue";
import Login from "@/components/Login/index.vue";
import Signout from "@/components/Signout/index.vue";
import { authStore } from "@/store/auth";
import { storeToRefs } from "pinia";
import { useI18n } from "vue-i18n";

type dialogType = "login" | "signup" | "signout";

const Dashboard = defineComponent({
  components: {
    Signup,
    Login,
    Signout
  },
  setup() {
    const { setAuthModalType } = authStore();
    const { t } = useI18n();

    // initiate component state
    const state = reactive({
      signupDialog: false,
      loginDialog: false,
      signoutDialog: false,
      slides: [
        [
          new URL("@/assets/home/image/img_hp_01.png", import.meta.url).href,
          new URL("@/assets/home/image/img_hp_02.png", import.meta.url).href,
          new URL("@/assets/home/image/img_hp_03.png", import.meta.url).href,
        ],
        [
          new URL("@/assets/home/image/img_hp_01.png", import.meta.url).href,
          new URL("@/assets/home/image/img_hp_02.png", import.meta.url).href,
          new URL("@/assets/home/image/img_hp_03.png", import.meta.url).href,
        ],
        [
          new URL("@/assets/home/image/img_hp_01.png", import.meta.url).href,
          new URL("@/assets/home/image/img_hp_02.png", import.meta.url).href,
          new URL("@/assets/home/image/img_hp_03.png", import.meta.url).href,
        ],
        [
          new URL("@/assets/home/image/img_hp_01.png", import.meta.url).href,
          new URL("@/assets/home/image/img_hp_02.png", import.meta.url).href,
          new URL("@/assets/home/image/img_hp_03.png", import.meta.url).href,
        ],
        [
          new URL("@/assets/home/image/img_hp_01.png", import.meta.url).href,
          new URL("@/assets/home/image/img_hp_02.png", import.meta.url).href,
          new URL("@/assets/home/image/img_hp_03.png", import.meta.url).href,
        ],
        [
          new URL("@/assets/home/image/img_hp_01.png", import.meta.url).href,
          new URL("@/assets/home/image/img_hp_02.png", import.meta.url).href,
          new URL("@/assets/home/image/img_hp_03.png", import.meta.url).href,
        ],
        [
          new URL("@/assets/home/image/img_hp_01.png", import.meta.url).href,
          new URL("@/assets/home/image/img_hp_02.png", import.meta.url).href,
          new URL("@/assets/home/image/img_hp_03.png", import.meta.url).href,
        ],
        [
          new URL("@/assets/home/image/img_hp_01.png", import.meta.url).href,
          new URL("@/assets/home/image/img_hp_02.png", import.meta.url).href,
          new URL("@/assets/home/image/img_hp_03.png", import.meta.url).href,
        ],
        [
          new URL("@/assets/home/image/img_hp_01.png", import.meta.url).href,
          new URL("@/assets/home/image/img_hp_02.png", import.meta.url).href,
          new URL("@/assets/home/image/img_hp_03.png", import.meta.url).href,
        ],
      ],
      originalGames: [
        new URL("@/assets/home/image/img_og_01.png", import.meta.url).href,
        new URL("@/assets/home/image/img_og_02.png", import.meta.url).href,
        new URL("@/assets/home/image/img_og_03.png", import.meta.url).href,
        new URL("@/assets/home/image/img_og_05.png", import.meta.url).href,
        new URL("@/assets/home/image/img_og_06.png", import.meta.url).href,
        new URL("@/assets/home/image/img_og_07.png", import.meta.url).href,
      ],
      principalGames: [
        new URL("@/assets/home/image/img_pg_08.png", import.meta.url).href,
        new URL("@/assets/home/image/img_pg_09.png", import.meta.url).href,
        new URL("@/assets/home/image/img_pg_10.png", import.meta.url).href,
        new URL("@/assets/home/image/img_pg_12.png", import.meta.url).href,
        new URL("@/assets/home/image/img_pg_13.png", import.meta.url).href,
        new URL("@/assets/home/image/img_pg_14.png", import.meta.url).href,
      ],
      gameProviders: [
        new URL("@/assets/home/image/img_gp_01.png", import.meta.url).href,
        new URL("@/assets/home/image/img_gp_02.png", import.meta.url).href,
        new URL("@/assets/home/image/img_gp_03.png", import.meta.url).href,
        new URL("@/assets/home/image/img_gp_05.png", import.meta.url).href,
        new URL("@/assets/home/image/img_gp_06.png", import.meta.url).href,
        new URL("@/assets/home/image/img_gp_07.png", import.meta.url).href,
      ],
      slots: [
        new URL("@/assets/home/image/img_slots_01.png", import.meta.url).href,
        new URL("@/assets/home/image/img_slots_02.png", import.meta.url).href,
        new URL("@/assets/home/image/img_slots_03.png", import.meta.url).href,
        new URL("@/assets/home/image/img_slots_05.png", import.meta.url).href,
        new URL("@/assets/home/image/img_slots_06.png", import.meta.url).href,
        new URL("@/assets/home/image/img_slots_07.png", import.meta.url).href,
      ],
      liveCasinos: [
        new URL("@/assets/home/image/img_lc_01.png", import.meta.url).href,
        new URL("@/assets/home/image/img_lc_02.png", import.meta.url).href,
        new URL("@/assets/home/image/img_lc_03.png", import.meta.url).href,
        new URL("@/assets/home/image/img_lc_05.png", import.meta.url).href,
        new URL("@/assets/home/image/img_lc_06.png", import.meta.url).href,
        new URL("@/assets/home/image/img_lc_07.png", import.meta.url).href,
      ],
      footerIcons: [
        new URL("@/assets/public/svg/icon_public_80.svg", import.meta.url).href,
        new URL("@/assets/public/svg/icon_public_28.svg", import.meta.url).href,
        new URL("@/assets/public/svg/icon_public_29.svg", import.meta.url).href,
        new URL("@/assets/public/svg/icon_public_30.svg", import.meta.url).href,
        new URL("@/assets/public/svg/icon_public_31.svg", import.meta.url).href,
        new URL("@/assets/public/svg/icon_public_32.svg", import.meta.url).href,
        new URL("@/assets/public/svg/icon_public_33.svg", import.meta.url).href,
      ]
    });

    // methods
    const closeDialog = (type: dialogType) => {
      console.log("sdfdsfdsf");
      if (type === "login") {
        state.loginDialog = false;
      } else if(type == "signup") {
        state.signupDialog = false;
      } else {
        state.signoutDialog = false;
      }
      setAuthModalType("");
    };

    const switchDialog = (type: dialogType) => {
      if (type === "login") {
        state.loginDialog = false;
        state.signoutDialog = false;
        state.signupDialog = true;
      } else if(type == "signup") {
        state.loginDialog = true;
        state.signupDialog = false;
        state.signoutDialog = false;
      }
    };

    const authModalType = computed(() => {
      const { getAuthModalType } = storeToRefs(authStore());
      return getAuthModalType.value;
    });

    watch(authModalType, (newValue: string) => {
      if (newValue == "login") {
        state.loginDialog = true;
      } else if (newValue == "signup") {
        state.signupDialog = true;
      } else if(newValue == "signout") {        
        state.signoutDialog = true;
      }
    });

    return {
      t,
      ...toRefs(state),
      closeDialog,
      switchDialog,
      authModalType,
    };
  },
});

export default Dashboard;
</script>

<template>
  <div class="my-4 mx-2 home-body">
    <v-dialog v-model="signupDialog" width="471">
      <Signup @close="closeDialog('signup')" @switch="switchDialog('signup')" />
    </v-dialog>
    <v-dialog v-model="loginDialog" width="471">
      <Login @close="closeDialog('login')" @switch="switchDialog('login')" />
    </v-dialog>
    <v-dialog v-model="signoutDialog" width="471">
      <Signout @close="closeDialog('signout')" />
    </v-dialog>
    <v-carousel cycle interval="6000" height="225" hide-delimiter-background :hide-delimiters="slides.length <= 1"
      show-arrows="hover">
      <!-- prev, next button hide when slides array length is less than 2 -->
      <template v-slot:prev="{ props }">
        <v-btn class="button-carousel text-none prev-btn-position" variant="elevated" icon="mdi-chevron-left"
          @click="props.onClick" v-if="slides.length > 1">
        </v-btn>
      </template>
      <template v-slot:next="{ props }">
        <v-btn class="button-carousel text-none next-btn-position" variant="elevated" icon="mdi-chevron-right"
          @click="props.onClick" v-if="slides.length > 1">
        </v-btn>
      </template>
      <v-carousel-item v-for="(slide, slideIndex) in slides" :key="slideIndex">
        <v-sheet color="#31275C" height="100%" tile>
          <v-row align="center" justify="center" class="mx-2 relative">
            <v-col v-for="(i, index) in 3" :key="index" cols="4">
              <img :src="slide[index]" class="slider-img-width" />
            </v-col>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <v-row class="pa-4">
      <v-text-field :placeholder="t('home.search')" class="form-textfield dark-textfield" variant="solo" dense filled
        clearable prepend-inner-icon="mdi-magnify" color="#7782AA" height="40" />
    </v-row>
    <v-row class="ml-4">
      <v-btn class="mr-2 my-2 text-none lobby-btn-color">
        {{ t("home.button.lobby") }}
      </v-btn>
      <v-btn class="mr-2 my-2 text-none popular-btn-color">
        {{ t("home.button.popular") }}
      </v-btn>
      <v-btn class="mr-2 my-2 text-none popular-btn-color">
        {{ t("home.button.slots") }}
      </v-btn>
      <v-btn class="mr-2 my-2 text-none popular-btn-color">
        {{ t("home.button.live_casino") }}
      </v-btn>
      <v-btn class="mr-2 my-2 text-none popular-btn-color">
        {{ t("home.button.blue_originals") }}
      </v-btn>
    </v-row>
    <v-row class="ml-4 mt-6 mb-2 original_game_text">
      {{ t("home.original_games") }}
    </v-row>
    <v-row class="mx-2 mt-2">
      <v-col lg="2" md="2" sm="3" class="px-2" v-ripple.center v-for="(item, index) in originalGames" :key="index">
        <v-img :src="item" class="original-game-img-width" />
      </v-col>
    </v-row>
    <v-row class="ml-4 mt-4 justify-center">
      <v-btn class="text-none more-btn-color" variant="outlined">
        {{ t("home.more") }}
      </v-btn>
    </v-row>
    <v-row class="ml-4 mt-6 mb-2 original_game_text">
      {{ t("home.principal") }}
    </v-row>
    <v-row class="mx-2 mt-2">
      <v-col lg="2" md="2" sm="3" class="px-2" v-ripple.center v-for="(principalItem, principalIndex) in principalGames"
        :key="principalIndex">
        <v-img :src="principalItem" class="original-game-img-width" />
      </v-col>
    </v-row>
    <v-row class="mt-4 justify-center">
      <v-btn class="text-none more-btn-color" variant="outlined">
        {{ t("home.more") }}
      </v-btn>
    </v-row>
    <v-row class="ml-4 mt-6 mb-2 original_game_text">
      {{ t("home.game_providers") }}
    </v-row>
    <v-row class="mx-2 mt-2">
      <v-col lg="2" md="2" sm="3" class="px-2" v-ripple.center
        v-for="(gameProviderItem, gameProviderIndex) in gameProviders" :key="gameProviderIndex">
        <v-img :src="gameProviderItem" class="original-game-img-width" />
      </v-col>
    </v-row>
    <v-row class="ml-4 mt-6 mb-2 original_game_text">
      {{ t("home.slots") }}
    </v-row>
    <v-row class="mx-2 mt-2">
      <v-col lg="2" md="2" sm="3" class="px-2" v-ripple.center v-for="(slotItem, slotIndex) in slots" :key="slotIndex">
        <v-img :src="slotItem" class="original-game-img-width" />
      </v-col>
    </v-row>
    <v-row class="mt-4 justify-center">
      <v-btn class="text-none more-btn-color" variant="outlined">
        {{ t("home.more") }}
      </v-btn>
    </v-row>
    <v-row class="ml-4 mt-6 mb-2 original_game_text">
      {{ t("home.live_casino") }}
    </v-row>
    <v-row class="mx-2 mt-2">
      <v-col lg="2" md="2" sm="3" class="px-2" v-ripple.center v-for="(liveCasinoItem, liveCasinoIndex) in liveCasinos"
        :key="liveCasinoIndex">
        <v-img :src="liveCasinoItem" class="original-game-img-width" />
      </v-col>
    </v-row>
    <v-row class="mt-4 justify-center">
      <v-btn class="text-none more-btn-color" variant="outlined">
        {{ t("home.more") }}
      </v-btn>
    </v-row>
    <v-row class="mx-2 mt-16">
      <v-col cols="2" class="text-center">
        <div class="footer-title">{{ t('home.footer.game.title') }}</div>
        <div class="footer-text-1">{{ t('home.footer.game.menu_1') }}</div>
        <div class="footer-text-1">{{ t('home.footer.game.menu_2') }}</div>
        <div class="footer-text-1">{{ t('home.footer.game.menu_3') }}</div>
        <div class="footer-text-1">{{ t('home.footer.game.menu_4') }}</div>
      </v-col>
      <v-col cols="2" class="text-center">
        <div class="footer-title">{{ t('home.footer.helpful_links.title') }}</div>
        <div class="footer-text-1">{{ t('home.footer.helpful_links.menu_1') }}</div>
        <div class="footer-text-1">{{ t('home.footer.helpful_links.menu_2') }}</div>
      </v-col>
      <v-col cols="3" class="text-center">
        <div class="footer-title">{{ t('home.footer.about_us.title') }}</div>
        <div class="footer-text-1">{{ t('home.footer.about_us.menu_1') }}</div>
        <div class="footer-text-1">{{ t('home.footer.about_us.menu_2') }}</div>
        <div class="footer-text-1">{{ t('home.footer.about_us.menu_3') }}</div>
        <div class="footer-text-1">{{ t('home.footer.about_us.menu_4') }}</div>
        <div class="footer-text-1">{{ t('home.footer.about_us.menu_5') }}</div>
      </v-col>
      <v-col cols="5" class="text-center">
        <div>
          <img src="@/assets/public/svg/logo.svg" width="152" />
        </div>
        <div>
          <v-btn color="grey-darken-4" :class="[footerIndex == 0 ? 'footer-icon-button-red' : 'footer-icon-button']" icon="" v-for="(footerIcon, footerIndex) in footerIcons" :key="footerIndex">
            <img :src="footerIcon" style="width: 100%"/>
          </v-btn>
        </div>
        <p class="text-left footer-4-text mt-4">{{ t('home.footer.footer_4.text') }}</p>
      </v-col>
    </v-row>
    <v-row class="mx-2 mt-6">
      <v-card color="#000000" theme="dark" class="justify-center">
        <v-row class="align-center">
          <v-col cols="3" class="pa-8">
            <img src="@/assets/home/svg/Logo.svg" width="180"/>
          </v-col>
          <v-col cols="9">
            <div class="footer-5-text py-4">{{ t('home.footer.logo.text_1') }}</div>
            <div class="footer-5-text py-4">{{ t('home.footer.logo.text_2') }}</div>
          </v-col>
        </v-row>
      </v-card>
    </v-row>
    <v-row class="mt-8 mb-4 justify-center footer-6-text">
      {{ t('home.footer.footer_6.text') }}
    </v-row>
  </div>
</template>

<style lang="scss">
.slider-img-width {
  width: 100%;
  height: 200px;
}

.v-field {
  color: white !important
}

.prev-btn-position {
  position: absolute;
  top: 30%;
  left: 5px;
  width: 32px !important;
  height: 32px !important;
}

.next-btn-position {
  position: absolute;
  top: 30%;
  right: 5px;
  width: 32px !important;
  height: 32px !important;
}

.v-carousel__controls {
  height: 12px !important;

  .v-btn {
    width: 6px !important;
    height: 6px !important;
    margin-right: 6px !important;
  }

  .v-btn__content {
    font-size: 6px;
    color: #7782aa;
  }

  .v-btn--active {
    .v-btn__content {
      font-size: 6px;
      width: 18px !important;
      color: #ffffff !important;
    }
  }
}

.form-textfield div.v-field__field {
  box-shadow: none !important;
}

.lobby-btn-color {
  background: #32cfec;
  color: #000000;
  width: 160px;

  .v-btn__content {
    font-weight: 700 !important;
    font-size: 16px !important;
  }
}

.popular-btn-color {
  background: #211f31;
  color: #7782aa;
  width: 160px;

  .v-btn__content {
    font-weight: 700 !important;
    font-size: 16px !important;
  }
}

// original game
.original_game_text {
  color: #ffffff;
  font-weight: 700;
  font-size: 22px;
}

.original-game-img-border {
  border-radius: 3px 16px;
  cursor: pointer;
  flex: 10%;
}

.original-game-img-width {
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.more-btn-color {
  background: #2f2756;
  color: #6842ec;

  .v-btn__content {
    font-weight: 700 !important;
    font-size: 16px !important;
  }
}

.footer-title {
  font-weight: 700;
  font-size: 16px;
  color: #FFFFFF;
  margin-bottom: 10px;
}

.footer-text-1 {
  font-weight: 500;
  font-size: 16px;
  color: #7782AA;
  margin-bottom: 6px;
}

.footer-icon-button {
  background-color: #131828 !important;
  width: 34px !important;
  height: 34px !important;
  margin: 0px 3px;
}
.footer-icon-button-red {
  background-color: #D42763 !important;
  width: 34px !important;
  height: 34px !important;
  margin: 0px 3px;
}
.footer-4-text{
  font-weight: 400;
  font-size: 12px;
  color: #7782AA;
}
.footer-5-text {
  font-weight: 400;
  font-size: 14px;
  color: #7782AA;
}
.footer-6-text {
  font-weight: 400;
  font-size: 16px;
  color: #7782AA;
}
</style>
