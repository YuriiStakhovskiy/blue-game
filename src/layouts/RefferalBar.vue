<script lang="ts" setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';;

const { t } = useI18n();

const invertedScroll = ref<boolean>(true);
const elevateOnScroll = ref<boolean>(true);
</script>

<template>
    <v-app-bar class="refferal-app-bar-background justify-center" density="compact" :inverted-scroll="invertedScroll" 
      :elevate-on-scroll="elevateOnScroll">
        <v-toolbar-title class="d-flex align-center justify-center">
            <p class="text-700-16 white">
                {{ t('refferal.app_bar_title') }}
            </p>
            <img src="@/assets/refferal/svg/img_public_09.svg" class="ml-2" />
            <v-btn rounded height="28px" class="text-none ml-4 earn-btn-bg">{{ t('refferal.earn_btn_text') }}</v-btn>
        </v-toolbar-title>
        <v-btn icon density="compact">
            <v-icon color="#FFFFFF" style="font-size: 20px;" @click="elevateOnScroll => !elevateOnScroll">mdi-close</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<style lang="scss">
.refferal-app-bar-background {
    background: linear-gradient(90deg, #6940F8 0%, #3FDAA9 47.8%, #6940F8 100%) !important;

    .v-toolbar-title__placeholder {
        display: flex !important;
        align-items: center;
    }

    .earn-btn-bg {
        background: #29253C !important;
        box-shadow: 0px 3px 4px 1px rgba(0, 0, 0, 0.21) !important;

        .v-btn__content {
            font-weight: 700;
            font-size: 16px;
            color: #FFFFFF;
        }
    }
}
</style>