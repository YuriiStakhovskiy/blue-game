<script lang="ts" setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const emit = defineEmits<{ (e: 'close'): void }>()
</script>
<template>
    <div class="bonus-dialog-container">
        <v-btn class="close-button" icon="true" @click="emit('close')">
            <v-icon color="#FFFFFF">
                mdi-close
            </v-icon>
        </v-btn>
        <v-row class="justify-center mt-6 bonus-dialog-header-title">
            {{ t('affiliate.invite.achivement_bonus') }}
        </v-row>
        <div class="mt-6">
            <img src="@/assets/affiliate/invite/image/bg_public_02_01.png/" />
        </div>
        <div class="mt-6 text-center mx-10 bonus-dialog-text-1">
            {{ t('affiliate.invite.bonus_dialog.text_1') }}
        </div>
        <v-row class="mt-6">
            <v-col cols="6" class="d-flex justify-center">
                <div class="bonus-dialog-text-2 text-center">{{ t('affiliate.invite.bonus_dialog.text_2') }}</div>
            </v-col>
            <v-col cols="6" class="d-flex justify-center">
                <div class="bonus-dialog-text-2 pt-6 text-center">{{ t('affiliate.invite.bonus_dialog.text_3') }}</div>
            </v-col>
        </v-row>
        <v-row class="mt-4 mx-10">
            <img src="@/assets/affiliate/invite/image/Group 772543719.png" />
        </v-row>
        <v-row class="mt-4 mx-10">
            <img src="@/assets/affiliate/invite/image/Group 772543720.png" />
        </v-row>
        <v-row class="mt-4 mx-10">
            <img src="@/assets/affiliate/invite/image/Group 772543721.png" />
        </v-row>
        <v-row class="mt-4 mx-10">
            <img src="@/assets/affiliate/invite/image/Group 772543722.png" />
        </v-row>
        <v-row class="mt-4 mx-10">
            <img src="@/assets/affiliate/invite/image/Group 772543723.png" />
        </v-row>
        <v-row class="mt-4 mx-10">
            <img src="@/assets/affiliate/invite/image/Group 772543724.png" />
        </v-row>
        <v-row class="mt-4 mx-10">
            <img src="@/assets/affiliate/invite/image/Group 772543725.png" />
        </v-row>
        <v-row class="mt-4 mx-10">
            <img src="@/assets/affiliate/invite/image/Group 772543726.png" />
        </v-row>
        <v-row class="mt-4 mx-10">
            <img src="@/assets/affiliate/invite/image/Group 772543728.png" />
        </v-row>
        <v-row class="mt-4 mx-10">
            <img src="@/assets/affiliate/invite/image/Group 772543729.png" />
        </v-row>
        <v-row class="mt-4 mx-10">
            <img src="@/assets/affiliate/invite/image/Group 772543730.png" />
        </v-row>
        <v-row class="mt-4 mx-10">
            <img src="@/assets/affiliate/invite/image/Group 772543731.png" />
        </v-row>
    </div>
</template>
<style lang="scss">
.bonus-dialog-container {
    height: 856px;
    background: linear-gradient(360deg, #29263F 0%, #4A32AA 100%) !important;
    border-radius: 16px !important;
}

// close modal button
.close-button {
    box-shadow: none !important;
    background-color: transparent !important;
    position: absolute !important;
    top: 5px;
    right: 5px;
}

.bonus-dialog-header-title {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #F9BC01;
}

.bonus-dialog-text-1 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    text-align: justify;
    color: #7782AA;
}

.bonus-dialog-text-2 {
    width: 115px;
    height: 40px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #FFFFFF;
}
</style>