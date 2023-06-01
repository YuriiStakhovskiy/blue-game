<script lang="ts" setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { type ChatRequestData } from '@/interface/chat';
const { t } = useI18n();
// sport items
const sportItems = ref<Array<string>>([
    t('rightBar.dropdownItem.sport'),
    t('rightBar.dropdownItem.casino')
]);
// selected sport item
const selectedItem = ref<string>('Sport');

const handleDropdown = (item: string): void => {
    selectedItem.value = item;
}
// chat message array
const messages = ref<Array<ChatRequestData>>([
    {
        type: "receiver",
        avatar: new URL("@/assets/right_navigation/image/user_3.png", import.meta.url).href,
        grade: "V18",
        gradeColor: "grade-color-white",
        gradeBackground: new URL("@/assets/right_navigation/svg/ellipse_v18.svg", import.meta.url).href,
        sender: "Game",
        receiver: "Jimmy",
        message: "Provider",
        starLevel: [
            new URL("@/assets/right_navigation/svg/heart_v18_up.svg", import.meta.url).href,
            new URL("@/assets/right_navigation/svg/heart_v18_up.svg", import.meta.url).href,
            new URL("@/assets/right_navigation/svg/heart_v18_up.svg", import.meta.url).href,
            new URL("@/assets/right_navigation/svg/heart_v18_down.svg", import.meta.url).href,
            new URL("@/assets/right_navigation/svg/heart_v18_down.svg", import.meta.url).href,
        ]
    },
    {
        type: "receiver",
        avatar: new URL("@/assets/right_navigation/image/user_1.png", import.meta.url).href,
        grade: "V28",
        gradeColor: "grade-color-black",
        gradeBackground: new URL("@/assets/right_navigation/svg/ellipse_v28.svg", import.meta.url).href,
        sender: "Jimmy",
        receiver: "Game",
        message: "Suibian dajige ziz ajapospoaap",
        starLevel: [
            new URL("@/assets/right_navigation/svg/heart_v28_up.svg", import.meta.url).href,
            new URL("@/assets/right_navigation/svg/heart_v28_up.svg", import.meta.url).href,
            new URL("@/assets/right_navigation/svg/heart_v28_up.svg", import.meta.url).href,
            new URL("@/assets/right_navigation/svg/heart_v28_down.svg", import.meta.url).href,
            new URL("@/assets/right_navigation/svg/heart_v28_down.svg", import.meta.url).href,
        ]
    },
])
</script>

<template>
    <v-navigation-drawer permanent class="nav-background" location="right" :width="260">
        <template v-slot:prepend>
            <v-card color="#211F31" theme="dark" class="right-bar-card-border">
                <v-row class="ma-1 align-center">
                    <v-btn class="right-btn" icon="true">
                        <v-icon icon="mdi-close" class="card-close-icon" />
                    </v-btn>
                    <img src="@/assets/right_navigation/svg/info.svg" class="ml-2" width="20" />
                    <img src="@/assets/right_navigation/svg/img_nav_87.svg" class="ml-2" width="20" />
                    <v-menu offset="20" class="sport-menu">
                        <template v-slot:activator="{ props }">
                            <v-card color="#29263C" theme="dark" class="ml-4">
                                <v-list-item class="sport-item" v-bind="props" :title="selectedItem"
                                    append-icon="mdi-chevron-down" value="sport">
                                </v-list-item>
                            </v-card>
                        </template>
                        <v-list theme="dark" bg-color="#211F31">
                            <v-list-item v-for="(item, i) in sportItems" :key="i" :value="item" class="sport-item"
                                @click="handleDropdown(item)">
                                <v-list-item-title>{{ item }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-row>
            </v-card>
        </template>
        <v-list density="compact" nav>
            <template v-for="(messageItem, j) in messages" :key="j">
                <v-list-item v-if="messageItem.type == 'receiver'">
                    <div class="chat-item">
                        <div class="chat-avatar">
                            <img src="@/assets/right_navigation/image/ellipse.png" />
                            <img :src="messageItem.avatar" class="user-avatar" />
                            <p class="grade-position" :class="messageItem.gradeColor">{{ messageItem.grade }}</p>
                            <img :src="messageItem.gradeBackground" class="grade-background" />
                            <img :src="messageItem.starLevel[0]" class="star-level-1" />
                            <img :src="messageItem.starLevel[1]" class="star-level-2" />
                            <img :src="messageItem.starLevel[2]" class="star-level-3" />
                            <img :src="messageItem.starLevel[3]" class="star-level-4" />
                            <img :src="messageItem.starLevel[4]" class="star-level-5" />
                        </div>
                        <div class="chat-content">
                            <div class="chat-name mt-3">{{ messageItem.sender }}</div>
                            <v-card color="#353652" theme="dark" class="pa-2 chat-content-border">
                                <span class="receiver-color">@{{ messageItem.receiver }}</span>
                                <span>{{ messageItem.message }}</span>
                            </v-card>
                        </div>
                    </div>
                </v-list-item>
            </template>
        </v-list>
    </v-navigation-drawer>
</template>

<style lang="scss">
.nav-background {
    background-color: #29263C !important;
    color: #7782AA !important;
    border: 2px !important;
    box-shadow: 2px 0px 4px rgba(0, 0, 0, 0.25) !important;
    top: 0px !important;
    height: 100% !important;
}

.v-navigation-drawer__content {
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden !important;

    &::-webkit-scrollbar {
        width: 2px
    }

    &::-webkit-scrollbar-thumb {
        background: #5142af;
        border-radius: 20px;
    }
}

.right-bar-card-border {
    border-radius: 0px 0px 32px 32px !important;
}

.card-close-icon {
    font-size: 20px;
    font-weight: 800;
    color: #7782AA;
}

.sport-item {
    padding: 4px 8px !important;

    .v-list-item-title {
        font-weight: 700;
        font-size: 14px;
        color: #7782AA;
    }
}

.sport-menu {
    .v-overlay__content::after {
        content: "";
        position: absolute;
        align-self: center;
        float: right;
        top: -16px;
        border: 9px solid #211F31;
        border-right-color: transparent;
        border-left-color: transparent;
        border-top-color: transparent;
        border-right-width: 7px;
        border-left-width: 7px;
    }
}

.chat-item {
    display: flex;
    position: relative;
    height: auto;
    min-height: 76px;
}

.chat-avatar {}

.user-avatar {
    top: 9px;
    position: absolute;
    left: 9px;
    width: 44px;
}

.grade-background {
    top: 39px;
    position: absolute;
    left: 8px;
}

.grade-position {
    top: 43px;
    position: absolute;
    left: 21px;
    z-index: 100;
    font-weight: 700;
    font-size: 12px;
}
.grade-color-white {    
    color: #FFFFFF;
}
.grade-color-black {    
    color: #000000;
}
.star-level-1 {
    position: absolute;
    top: 63px;
    left: 0px;
}

.star-level-2 {
    position: absolute;
    top: 63px;
    left: 12px;
}

.star-level-3 {
    position: absolute;
    top: 63px;
    left: 24px;
}

.star-level-4 {
    position: absolute;
    top: 63px;
    left: 36px;
}

.star-level-5 {
    position: absolute;
    top: 63px;
    left: 48px;
}

.chat-content {}

.chat-name {
    font-weight: 600;
    font-size: 14px;
}

.chat-content-border {
    box-shadow: 0px 3px 2px 1px rgba(0, 0, 0, 0.11) !important;
    border-radius: 0px 20px 20px 20px !important;
    color: #7782AA;
    font-weight: 600;
    font-size: 12px;
}

.receiver-color {
    color: #01983A;
    margin-right: 4px;
}
</style>