<script lang="ts" setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { appBarStore } from "@/store/appBar";;
const { t } = useI18n();
const { setNavBarToggle } = appBarStore();
const { setRightBarToggle } = appBarStore();

// mail count
const mailCount = ref<number>(10);
</script>

<template>
    <v-bottom-navigation bg-color="#000000" grow class="mobile-menu-index">
        <v-btn class="menu-text-color" @click="setNavBarToggle(true)">
            <img src="@/assets/mobile_menu/svg/icon_public_81.svg" width="20" height="20">
            <div class="pt-2">
                {{ t('mobile_menu.menu') }}
            </div>
        </v-btn>
        <v-btn class="menu-text-color">
            <img src="@/assets/mobile_menu/svg/icon_public_34.svg">
            <div class="pt-1">
                {{ t('mobile_menu.casino') }}
            </div>
        </v-btn>
        <v-btn class="menu-text-color">
            <img src="@/assets/mobile_menu/svg/bg_public_22.svg" class="share-background-img-position">
            <img src="@/assets/mobile_menu/svg/img_public_19.svg" class="share-img-position">
            <div class="pt-8">
                {{ t('mobile_menu.share') }}
            </div>
        </v-btn>
        <v-btn class="menu-text-color">
            <img src="@/assets/mobile_menu/svg/icon_public_40.svg">
            <div class="pt-1">
                {{ t('mobile_menu.sport') }}
            </div>
        </v-btn>
        <v-btn class="menu-text-color" @click="setRightBarToggle(true)">
            <div class="relative">
                <img src="@/assets/mobile_menu/svg/icon_public_55.svg">
                <p class="chat-box-text">{{ mailCount }}</p>
            </div>
            {{ t('mobile_menu.mail') }}
        </v-btn>
    </v-bottom-navigation>
</template>

<style lang="scss">
.mobile-menu-index {
    z-index: 1009 !important;
    overflow: inherit !important;
}

.menu-text-color {
    color: #7782AA;

    .v-btn__content {
        font-weight: 700 !important;
        font-size: 12px !important;
    }

    .chat-box-text {
        top: 4px;
        right: -8px;
        position: absolute;
        font-weight: 800;
        font-size: 12px;
        color: #000000;
        background: #12ff76;
        border-radius: 15px;
        padding: 0px 2px;
    }
}

.triangle {
    position: absolute;
    top: 0;
    left: calc(50% - 10px);
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #1976d2;
}

.share-img-position {
    position: absolute;
    top: -22px;
    width: 50px;
}

.share-background-img-position {
    position: absolute;
    top: -30px;
    width: 64px;
}
</style>