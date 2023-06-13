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
import { useI18n } from "vue-i18n";
import { useDisplay } from 'vuetify'

const Dashboard = defineComponent({
  components: {
  },
  setup() {
    const { t } = useI18n();
    const { name } = useDisplay()

    // initiate component state
    const state = reactive({
      signupDialog: false,
      loginDialog: false,
      signoutDialog: false,
      mobileDialog: false,
      mobileDialogCheck: false,
      slides: [
        [
          new URL("@/assets/home/image/img_hp_01.png", import.meta.url).href,
          new URL("@/assets/home/image/img_hp_02.png", import.meta.url).href,
          new URL("@/assets/home/image/img_hp_03.png", import.meta.url).href,
        ],
        [
          new URL("@/assets/home/image/img_hp_02.png", import.meta.url).href,
          new URL("@/assets/home/image/img_hp_01.png", import.meta.url).href,
          new URL("@/assets/home/image/img_hp_03.png", import.meta.url).href,
        ],
        [
          new URL("@/assets/home/image/img_hp_03.png", import.meta.url).href,
          new URL("@/assets/home/image/img_hp_02.png", import.meta.url).href,
          new URL("@/assets/home/image/img_hp_01.png", import.meta.url).href,
        ],
        [
          new URL("@/assets/home/image/img_hp_01.png", import.meta.url).href,
          new URL("@/assets/home/image/img_hp_02.png", import.meta.url).href,
          new URL("@/assets/home/image/img_hp_03.png", import.meta.url).href,
        ],
        [
          new URL("@/assets/home/image/img_hp_02.png", import.meta.url).href,
          new URL("@/assets/home/image/img_hp_01.png", import.meta.url).href,
          new URL("@/assets/home/image/img_hp_03.png", import.meta.url).href,
        ],
        [
          new URL("@/assets/home/image/img_hp_03.png", import.meta.url).href,
          new URL("@/assets/home/image/img_hp_02.png", import.meta.url).href,
          new URL("@/assets/home/image/img_hp_01.png", import.meta.url).href,
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
    });
    const mobileVersion = computed(() => {
      return name.value
    });

    watch(mobileVersion, (newValue) => {
      if (newValue == "sm") {
        state.loginDialog = false;
        state.signupDialog = false;
        state.mobileDialog = false;
      }
    })

    return {
      t,
      ...toRefs(state),
      mobileVersion
    };
  },
});

export default Dashboard;
</script>

<template>
  <div class="my-4 mx-2 home-body">
    <!-- image carousel -->
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
            <v-col v-for="(i, index) in 3" :key="index" cols="12" sm="6" md="4" lg="4" xl="4">
              <img :src="slide[index]" class="slider-img-width" />
            </v-col>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <!-- input for search -->
    <v-row class="px-4 mt-2">
      <v-text-field :placeholder="t('home.search')" class="form-textfield dark-textfield" variant="solo" hide-details
        filled clearable density="compact" prepend-inner-icon="mdi-magnify" color="#7782AA" />
    </v-row>

    <!-- buttons for filter -->
    <v-row :class="[mobileVersion == 'sm' ? 'mx-2' : 'mx-4']">
      <template #default="scope" v-if="mobileVersion != 'sm'">
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
      </template>
      <template #default="scope" v-else>
        <v-col cols="4" class="px-1">
          <v-btn class="mr-2 my-2 text-none lobby-btn-color">
            {{ t("home.button.lobby") }}
          </v-btn>
        </v-col>
        <v-col cols="4" class="px-1">
          <v-btn class="mr-2 my-2 text-none popular-btn-color">
            {{ t("home.button.popular") }}
          </v-btn>
        </v-col>
        <v-col cols="4" class="px-1">
          <v-btn class="mr-2 my-2 text-none popular-btn-color">
            {{ t("home.button.slots") }}
          </v-btn>
        </v-col>
      </template>
    </v-row>

    <!-- original games -->
    <v-row class="ml-4 mt-6 mb-2 original_game_text">
      {{ t("home.original_games") }}
    </v-row>
    <v-row class="mx-2 mt-2">
      <v-col cols="4" lg="2" md="2" sm="3" class="px-2" v-ripple.center v-for="(item, index) in originalGames"
        :key="index">
        <v-img :src="item" class="original-game-img-width" />
      </v-col>
    </v-row>
    <v-row class="ml-4 mt-4 justify-center">
      <v-btn class="text-none more-btn-color" variant="outlined" width="300">
        {{ t("home.more") }}
      </v-btn>
    </v-row>

    <!-- principal games -->
    <v-row class="ml-4 mt-6 mb-2 original_game_text">
      {{ t("home.principal") }}
    </v-row>
    <v-row class="mx-2 mt-2">
      <v-col cols="4" lg="2" md="2" sm="3" class="px-2" v-ripple.center
        v-for="(principalItem, principalIndex) in principalGames" :key="principalIndex">
        <v-img :src="principalItem" class="original-game-img-width" />
      </v-col>
    </v-row>
    <v-row class="mt-4 justify-center">
      <v-btn class="text-none more-btn-color" variant="outlined" width="300">
        {{ t("home.more") }}
      </v-btn>
    </v-row>

    <!-------------------- game providers -------------->
    <v-row class="ml-4 mt-6 mb-2 original_game_text">
      {{ t("home.game_providers") }}
    </v-row>
    <v-row class="mx-2 mt-2">
      <v-col cols="4" lg="2" md="2" sm="3" class="px-2 py-1" v-ripple.center
        v-for="(gameProviderItem, gameProviderIndex) in gameProviders" :key="gameProviderIndex">
        <v-img :src="gameProviderItem" class="original-game-img-width" />
      </v-col>
    </v-row>
    <!-------------------- slot games -------------->
    <v-row class="ml-4 mt-6 mb-2 original_game_text">
      {{ t("home.slots") }}
    </v-row>
    <v-row class="mx-2 mt-2">
      <v-col cols="4" lg="2" md="2" sm="3" class="px-2" v-ripple.center v-for="(slotItem, slotIndex) in slots"
        :key="slotIndex">
        <v-img :src="slotItem" class="original-game-img-width" />
      </v-col>
    </v-row>
    <v-row class="mt-4 justify-center">
      <v-btn class="text-none more-btn-color" variant="outlined" width="300">
        {{ t("home.more") }}
      </v-btn>
    </v-row>

    <!-------------------- live casino games -------------->
    <v-row class="ml-4 mt-6 mb-2 original_game_text">
      {{ t("home.live_casino") }}
    </v-row>
    <v-row class="mx-2 mt-2">
      <v-col cols="4" lg="2" md="2" sm="3" class="px-2" v-ripple.center
        v-for="(liveCasinoItem, liveCasinoIndex) in liveCasinos" :key="liveCasinoIndex">
        <v-img :src="liveCasinoItem" class="original-game-img-width" />
      </v-col>
    </v-row>
    <v-row class="mt-4 justify-center">
      <v-btn class="text-none more-btn-color" variant="outlined" width="300">
        {{ t("home.more") }}
      </v-btn>
    </v-row>
  </div>
</template>

<style lang="scss">
.mobile-dialog-toggle-height {
  height: 100px !important;
  position: absolute !important;
  margin: 0 !important;
  bottom: unset !important;
  top: 0 !important;
}

.mobile-login-dialog-position {
  position: absolute !important;
  margin: 0 !important;
  height: 660px !important;
  bottom: 0 !important;
  top: unset !important;
}

.slider-img-width {
  width: 100%;
  height: 200px;
}

.v-field {
  color: white !important
}

.prev-btn-position {
  position: absolute;
  top: 36%;
  left: 5px;
  width: 32px !important;
  height: 32px !important;
}

.next-btn-position {
  position: absolute;
  top: 36%;
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
</style>
