
<script lang="ts">
  import { defineComponent, toRefs, reactive, watch, ref } from 'vue'
  import { useI18n } from 'vue-i18n';
  import { setLang } from '@/locale/index'
  import Signup from '@/components/Signup/index.vue'
  import Login from '@/components/Login/index.vue'

  type dialogType = 'login' | 'signup';

  const Dashboard = defineComponent({
    components: {
      Signup,
      Login,
    },
    setup() {
      // translation
      const { t } = useI18n();
      const currentLanguage = ref("en");

      // initiate component state
      const state = reactive({
        signupDialog: false,
        loginDialog: false,
      });

      // methods
      const closeDialog = (type: dialogType) => {
        if (type === 'login') {
          state.loginDialog = false
        } else {
          state.signupDialog = false
        }
      }
      const openDialog = (type: dialogType) => {
        if (type === 'login') {
          state.loginDialog = true
        } else {
          state.signupDialog = true
        }
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

      const toggleLanguage = () => {
        currentLanguage.value = currentLanguage.value === "en" ? "zh" : "en";
      }

      // watches
      watch(currentLanguage, (newLang, oldLang) => {
        setLang(newLang);
      });

      return {
        ...toRefs(state),
        currentLanguage,
        closeDialog,
        openDialog,
        switchDialog,
        toggleLanguage,
        t,
      }
    },
  })
  
  export default Dashboard
</script>

<template>
    <div>
      <v-img 
        src="@/assets/public/image/background-image.png" 
        class="background-img" 
      />
      <v-switch
        :label="currentLanguage === 'en' ? 'English' : '中文'"
        color="success"
        value="success"
        @change="toggleLanguage"
        hide-details
        class="toggle-language-switch"
      />
      <v-btn
        color="deep-purple-darken-3"
        class="register-button text-none"
        @click="openDialog('signup')"
      >
        {{ t('main.signupButton') }}
      </v-btn>
      <v-btn
        color="deep-purple-darken-3"
        class="login-button button-bright text-none"
        @click="openDialog('login')"
      >
        {{ t('main.loginButton') }}
      </v-btn>
      <v-dialog
        v-model="signupDialog"
        width="471"
      >
        <Signup 
          @close="closeDialog('signup')" 
          @switch="switchDialog('signup')" 
        />
      </v-dialog>
      <v-dialog
        v-model="loginDialog"
        width="471"
      >
        <Login 
          @close="closeDialog('login')" 
          @switch="switchDialog('login')" 
        />
      </v-dialog>
    </div>
  </template>
  
  <style lang="scss">
  .toggle-language-switch {
    position: absolute;
    top: 1%;
    left: 56%;
    display: none;
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
  .background-img {
    width: 100%;
    margin-bottom: -20px;
  }
  .register-button {
    position: absolute;
    right: 21.0%;
    top: 1.3%;
    width: 6.3%;
    height: 4.2% !important;
  }
  .login-button {
    position: absolute;
    right: 28%;
    top: 1.3%;
    width: 5.6%;
    height: 4.2% !important;
  }
  </style>