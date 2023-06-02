
<script lang="ts">
import { defineComponent, toRefs, reactive, watch, ref, computed, onMounted } from 'vue'
import Signup from '@/components/Signup/index.vue'
import Login from '@/components/Login/index.vue'
import { authStore } from '@/store/auth';
import { storeToRefs } from 'pinia';
import { useI18n } from 'vue-i18n';

type dialogType = 'login' | 'signup';

const Dashboard = defineComponent({
  components: {
    Signup,
    Login,
  },
  setup() {

    const { setAuthModalType } = authStore();
    const { t } = useI18n();

    // initiate component state
    const state = reactive({
      signupDialog: false,
      loginDialog: false,
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
    });

    // methods
    const closeDialog = (type: dialogType) => {
      if (type === 'login') {
        state.loginDialog = false
      } else {
        state.signupDialog = false
      }
      setAuthModalType("")
    }

    const switchDialog = (type: dialogType) => {
      if (type === 'login') {
        state.loginDialog = false;
        state.signupDialog = true;
      } else {
        state.loginDialog = true;
        state.signupDialog = false;
      }
    }

    const authModalType = computed(() => {
      const { getAuthModalType } = storeToRefs(authStore());
      return getAuthModalType.value;
    })

    watch(authModalType, (newValue: string) => {
      if (newValue == 'login') {
        state.loginDialog = true
      } else if (newValue == "signup") {
        state.signupDialog = true
      }
    })

    return {
      t,
      ...toRefs(state),
      closeDialog,
      switchDialog,
      authModalType
    }
  },
})

export default Dashboard
</script>

<template>
  <div class="mt-4 mx-2">
    <v-dialog v-model="signupDialog" width="471">
      <Signup @close="closeDialog('signup')" @switch="switchDialog('signup')" />
    </v-dialog>
    <v-dialog v-model="loginDialog" width="471">
      <Login @close="closeDialog('login')" @switch="switchDialog('login')" />
    </v-dialog>
    <v-carousel cycle interval="6000" height="175" hide-delimiter-background :hide-delimiters="slides.length <= 1"
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
              <img :src="slide[index]" style="width: 100%; height: 158px;">
            </v-col>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <v-row class="pa-4">
      <v-text-field :placeholder="t('home.search')" class="form-textfield dark-textfield" variant="solo" dense filled
        clearable prepend-inner-icon="mdi-magnify" color="#7782AA" style="height: 40px;" />
    </v-row>
    <v-row class="ml-4">
      <v-btn class="mr-2 my-2 text-none lobby-btn-color">
        {{ t('home.button.lobby') }}
      </v-btn>
      <v-btn class="mr-2 my-2 text-none popular-btn-color">
        {{ t('home.button.popular') }}
      </v-btn>
      <v-btn class="mr-2 my-2 text-none popular-btn-color">
        {{ t('home.button.slots') }}
      </v-btn>
      <v-btn class="mr-2 my-2 text-none popular-btn-color">
        {{ t('home.button.live_casino') }}
      </v-btn>
      <v-btn class="mr-2 my-2 text-none popular-btn-color">
        {{ t('home.button.blue_originals') }}
      </v-btn>
    </v-row>
    <v-row>

    </v-row>
  </div>
</template>
  
<style lang="scss">
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
    color: #7782AA;
  }

  .v-btn--active {
    .v-btn__content {
      font-size: 6px;
      width: 18px !important;
      color: #FFFFFF !important;
    }
  }
}

.form-textfield div.v-field__field {
  box-shadow: none !important;
}

.lobby-btn-color {
  background: #32CFEC;
  color: #000000;

  .v-btn__content {
    font-weight: 700 !important;
    font-size: 16px !important;
  }
}
.popular-btn-color {
  background: #211F31;
  color: #7782AA;

  .v-btn__content {
    font-weight: 700 !important;
    font-size: 16px !important;
  }
}
</style>