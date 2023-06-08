
<script lang="ts" setup>
import { appBarStore } from '@/store/appBar';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const {setDepositDialogToggle} = appBarStore();
</script>
  
<template>
    <div class="deposit-container">
        <div class="header">
        </div>
        <v-btn class="close-button" icon="true" @click="setDepositDialogToggle(false)">
            <v-icon color="#7782AA">
                mdi-close
            </v-icon>
        </v-btn>
    </div>
</template>

<style lang="scss">
// container
.deposit-container {
    background-color: #2E274C;
    border-radius: 16px !important;

    .header {
        text-align: center;
        background: #29253C;
        border-radius: 16px 16px 0px 0px;
        height: 80px;
    }

    // close modal button
    .close-button {
        box-shadow: none !important;
        background-color: transparent !important;
        position: absolute !important;
        top: 5px;
        right: 5px;
    }
}
</style>