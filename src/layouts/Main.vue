<script lang="ts" setup>
import { ref, computed, watch } from 'vue';
import { useDisplay } from 'vuetify';
import { appBarStore } from '@/store/appBar';
import { storeToRefs } from 'pinia';
import Deposit from "@/components/deposit/index.vue";
import MDeposit from "@/components/deposit/mobile/index.vue";
import Withdraw from "@/components/withdraw/index.vue";
import MWithdraw from "@/components/withdraw/mobile/index.vue";
const { name, width } = useDisplay();
const {setDepositDialogToggle} = appBarStore();
const {setWithdrawDialogToggle} = appBarStore();

// mobile or pc screen
const mobileVersion = computed(() => {
  return name.value;
})
const mobileWidth = computed(() => {
  return width.value
})

// deposit dialog
const depositDialog = ref<boolean>(false);
const depositDialogToggle = computed(() => {
  const { getDepositDialogToggle } = storeToRefs(appBarStore());
  return getDepositDialogToggle.value;
})
watch(depositDialogToggle, (newValue) => {
  depositDialog.value = newValue;
})

// withdraw dialog
const withdrawDialog = ref<boolean>(false);
const withdrawDialogToggle = computed(() => {
  const {getWithdrawDialogToggle} = storeToRefs(appBarStore());
  return getWithdrawDialogToggle.value
})
watch(withdrawDialogToggle, (newValue) => {
  withdrawDialog.value = newValue;
})
</script>

<template>
  <v-main class="main-background">
    <v-dialog v-model="depositDialog" :width="mobileVersion == 'sm' ? '' : 471" :fullscreen="mobileVersion == 'sm'"
      :scrim="mobileVersion == 'sm' ? false : true" :transition="mobileVersion == 'sm' ? 'dialog-bottom-transition' : ''" @click:outside="setDepositDialogToggle(false)">
      <Deposit v-if="mobileWidth > 600"/>
      <MDeposit v-else/>
    </v-dialog>
    <v-dialog v-model="withdrawDialog" :width="mobileVersion == 'sm' ? '' : 471" :fullscreen="mobileVersion == 'sm'"
      :scrim="mobileVersion == 'sm' ? false : true" :transition="mobileVersion == 'sm' ? 'dialog-bottom-transition' : ''" @click:outside="setWithdrawDialogToggle(false)">
      <Withdraw v-if="mobileWidth > 600"/>
      <MWithdraw v-else/>
    </v-dialog>
    <router-view />
  </v-main>
</template>
<style lang="scss">
.main-background {
  background: #31275C;
}
</style>