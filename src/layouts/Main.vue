<script lang="ts" setup>
import { ref, computed, watch } from 'vue';
import { useDisplay } from 'vuetify';
import { appBarStore } from '@/store/appBar';
import { storeToRefs } from 'pinia';
import Deposit from "@/components/cash/deposit/index.vue";
import MDeposit from "@/components/cash/deposit/mobile/index.vue";
import Withdraw from "@/components/cash/withdraw/index.vue";
import MWithdraw from "@/components/cash/withdraw/mobile/index.vue";
import MCashHeader from "@/components/cash/header/mobile/index.vue";
import CashHeader from "@/components/cash/header/index.vue";
const { name, width } = useDisplay();
const { setDepositDialogToggle } = appBarStore();
const { setWithdrawDialogToggle } = appBarStore();
const { setCashDialogToggle } = appBarStore();

// mobile or pc screen
const mobileVersion = computed(() => {
  return name.value;
})
const mobileWidth = computed(() => {
  return width.value
})

// deposit dialog
const depositDialog = ref<boolean>(true);
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
  const { getWithdrawDialogToggle } = storeToRefs(appBarStore());
  return getWithdrawDialogToggle.value
})
watch(withdrawDialogToggle, (newValue) => {
  withdrawDialog.value = newValue;
})

// cash dialog
const cashDialog = ref<boolean>(false);
const cashDialogToggle = computed(() => {
  const { getCashDialogToggle } = storeToRefs(appBarStore());
  return getCashDialogToggle.value
})
watch(cashDialogToggle, (newValue) => {
  cashDialog.value = newValue;
})
</script>

<template>
  <v-main class="main-background">
    <v-dialog v-model="cashDialog" :width="mobileVersion == 'sm' ? '' : 471" :fullscreen="mobileVersion == 'sm'"
      :scrim="mobileVersion == 'sm' ? false : true" :transition="mobileVersion == 'sm' ? 'dialog-bottom-transition' : ''"
      @click:outside="setCashDialogToggle(false)">
      <CashHeader v-if="mobileWidth > 600" />
      <MCashHeader v-else />
      <template v-if="withdrawDialog">
        <Withdraw v-if="mobileWidth > 600" />
        <MWithdraw v-else />
      </template>
      <template v-else>
        <Deposit v-if="mobileWidth > 600" />
        <MDeposit v-else />
      </template>
    </v-dialog>
    <router-view />
  </v-main>
</template>
<style lang="scss">
.main-background {
  background: #31275C;
}
</style>