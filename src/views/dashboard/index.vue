
<script lang="ts">
import { defineComponent, toRefs, reactive, watch, ref, computed, onMounted } from 'vue'
import Signup from '@/components/Signup/index.vue'
import Login from '@/components/Login/index.vue'
import { authStore } from '@/store/auth';
import { storeToRefs } from 'pinia';

type dialogType = 'login' | 'signup';

const Dashboard = defineComponent({
  components: {
    Signup,
    Login,
  },
  setup() {

    const {setAuthModalType} = authStore();

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
      if (getAuthModalType.value == 'login') {
        state.loginDialog = true
      } else if (getAuthModalType.value == "signup") {
        state.signupDialog = true
      }
      return getAuthModalType.value;
    })

    return {
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
  <div>
    <v-dialog v-model="signupDialog" width="471" v-if="authModalType == 'signup'">
      <Signup @close="closeDialog('signup')" @switch="switchDialog('signup')" />
    </v-dialog>
    <v-dialog v-model="loginDialog" width="471">
      <Login @close="closeDialog('login')" @switch="switchDialog('login')" />
    </v-dialog>
  </div>
</template>
  
<style lang="scss"></style>