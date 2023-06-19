<script lang="ts" setup>
import { ref, watch, computed, onMounted } from "vue"
import { useI18n } from "vue-i18n";
import { useDisplay } from "vuetify";
import { appBarStore } from "@/store/appBar";
import { storeToRefs } from "pinia";
import { type GetUserInfo } from "@/interface/user";
import EditNickname from "@/components/account/dialog/EditNickname.vue";
import EditPassword from "@/components/account/dialog/EditPassword.vue";
import Notification from "@/components/global/notification/index.vue";

const { t } = useI18n();
const { width } = useDisplay()

const userInfo = ref<GetUserInfo>({
    id: "1",
    nickName: "DanDan",
    email: "anderson.bluegame@gmail.com",
    password: "",
    area: "en",
    phoneNumber: "+5517991696669",
    verified: false,
})

const mobileWidth: any = computed(() => {
    return width.value;
})

const accountWidth = ref<string>('account-container');
const activeMenuIndex = ref<number>(0);
const dialogVisible = ref<boolean>(false);
const editNicknameDialog = ref<boolean>(false);
const editPasswordDialog = ref<boolean>(false);

const notificationShow = ref<boolean>(false);

const checkIcon = ref<any>(new URL("@/assets/public/svg/icon_public_17.svg", import.meta.url).href);

const notificationText = ref<string>(t('account.phone_warning_text'));

const menuList = ref<Array<string>>([
    t('account.menu.user_info_text'),
    t('account.menu.personal_info_text'),
    t('account.menu.document_text'),
    t('account.menu.preference_text'),
    t('account.menu.suspend_account_text'),
])

const rightBarToggle = computed(() => {
    const { getRightBarToggle } = storeToRefs(appBarStore());
    return getRightBarToggle.value;
})

const handleMenu = (index: number) => {
    activeMenuIndex.value = index;
}

const handlePhonNumber = () => {
    notificationShow.value = true;
}

const editNicknameDialogShow = () => {
    dialogVisible.value = true;
    editNicknameDialog.value = true;
    editPasswordDialog.value = false;
}

const editPasswordDialogShow = () => {
    dialogVisible.value = true;
    editPasswordDialog.value = true;
    editNicknameDialog.value = false;
}

const userDialogHide = () => {
    dialogVisible.value = false;
    editPasswordDialog.value = false;
    editNicknameDialog.value = false;
}

const handleVerifyCode = () => {
    userInfo.value.verified = true;
}

watch(rightBarToggle, (newValue) => {
    if (mobileWidth.value > 1280) {
        if (newValue) {
            accountWidth.value = "account-container";
        } else {
            accountWidth.value = "account-container-1";
        }
    } else {
        accountWidth.value = "m-account-container";
    }
})

watch(mobileWidth, (newValue: number) => {
    if (newValue > 1280) {
        if (rightBarToggle.value) {
            accountWidth.value = "account-container";
        } else {
            accountWidth.value = "account-container-1";
        }
    } else {
        accountWidth.value = "m-account-container";
    }
})

onMounted(() => {
    if (mobileWidth.value > 1280) {
        if (rightBarToggle.value) {
            accountWidth.value = "account-container";
        } else {
            accountWidth.value = "account-container-1";
        }
    } else {
        accountWidth.value = "m-account-container";
    }
})
</script>

<template>
    <div :class="accountWidth">
        <v-row class="ma-0">
            <v-col cols="12" md="3" lg="3" class="account-menu pt-10" style="height: 320px;">
                <v-list theme="dark">
                    <template v-for="(item, index) in menuList" :key="index">
                        <v-list-item :value="item" @click="handleMenu(index)">
                            <v-list-item-title>
                                <div :class="index == activeMenuIndex ? 'text-700-14 white' : 'text-500-14 text-gray'">
                                    {{ item }}
                                </div>
                            </v-list-item-title>
                        </v-list-item>
                        <v-divider class="account-divider" v-if="index != 4"></v-divider>
                    </template>
                </v-list>
            </v-col>
            <v-col cols="12" md="9" lg="9" class="pa-0 pl-4">
                <div class="account-menu py-10 relative user-info-body" style="height: 600px;">
                    <v-row class="mx-6 mt-5 text-700-20 text-white">
                        {{ t('account.menu.user_info_text') }}
                    </v-row>
                    <v-row class="mx-6 mt-8">
                        <v-col cols="6">
                            <div>
                                <v-card color="#1C1929" theme="dark" class="user-info-item">
                                    <v-list-item>
                                        <v-list-item-title class="ml-2">
                                            <div class="text-400-12 text-gray">{{ t('account.item.nick_name_text') }}</div>
                                            <div class="text-600-14">{{ userInfo.nickName }}</div>
                                        </v-list-item-title>
                                        <template v-slot:append>
                                            <v-btn class="account-edit-btn" @click="editNicknameDialogShow">{{
                                                t('account.edit_text') }}</v-btn>
                                        </template>
                                    </v-list-item>
                                </v-card>
                            </div>
                            <div class="text-400-12" style="visibility: hidden;">
                                {{ t('account.verify_code_text') }}
                            </div>
                            <div class="mt-6">
                                <v-row>
                                    <v-col cols="4" lg="3">
                                        <v-card color="#1C1929" theme="dark">
                                            <v-list-item :value="t('account.item.area_text')" class="text-center">
                                                <v-list-item-title>
                                                    <div class="text-400-12 text-gray">
                                                        {{ t('account.item.area_text') }}
                                                    </div>
                                                    <div>
                                                        <img src="@/assets/public/image/img_public_01.png" />
                                                        <v-icon class="ml-1">mdi-chevron-down</v-icon>
                                                    </div>
                                                </v-list-item-title>
                                            </v-list-item>
                                        </v-card>
                                    </v-col>
                                    <v-col cols="8" lg="9" class="pl-0">
                                        <v-card color="#1C1929" theme="dark" class="user-info-item">
                                            <v-list-item class="user-info-item">
                                                <v-list-item-title class="ml-2">
                                                    <div class="text-600-14 text-gray">{{ userInfo.phoneNumber }}</div>
                                                </v-list-item-title>
                                                <template v-slot:append>
                                                    <v-btn class="account-edit-btn" @click="handlePhonNumber">
                                                        <img src="@/assets/public/svg/icon_public_12.svg" />
                                                    </v-btn>
                                                </template>
                                            </v-list-item>
                                        </v-card>
                                    </v-col>
                                </v-row>
                            </div>
                        </v-col>
                        <v-col cols="6">
                            <v-card color="#1C1929" theme="dark" class="user-info-item">
                                <v-list-item>
                                    <v-list-item-title class="ml-2">
                                        <div class="text-400-12 text-gray">{{ t('account.item.email_text') }}</div>
                                        <div class="text-600-14">{{ userInfo.email }}</div>
                                    </v-list-item-title>
                                    <template v-slot:append>
                                        <v-btn class="account-edit-btn">
                                            <img src="@/assets/public/svg/icon_public_08.svg" v-if="userInfo.verified"/>
                                            <img src="@/assets/public/svg/icon_public_09.svg" v-else/>
                                            {{ t('account.edit_text') }}
                                        </v-btn>
                                    </template>
                                </v-list-item>
                            </v-card>
                            <div class="text-400-12 text-gray text-right mr-2 cursor-pointer mt-1" @click="handleVerifyCode">
                                {{ t('account.verify_code_text') }}
                            </div>
                            <v-card color="#1C1929" theme="dark" class="user-info-item mt-6">
                                <v-list-item>
                                    <v-list-item-title class="ml-2">
                                        <div class="text-400-12 text-gray">{{ t('account.item.current_pwd_text') }}</div>
                                        <div class="text-600-14 user-pwd-spacing">*******************</div>
                                    </v-list-item-title>
                                    <template v-slot:append>
                                        <v-btn class="account-edit-btn" @click="editPasswordDialogShow">
                                            {{ t('account.edit_text') }}
                                        </v-btn>
                                    </template>
                                </v-list-item>
                            </v-card>
                        </v-col>
                    </v-row>
                </div>
            </v-col>
        </v-row>
        <v-dialog v-model="dialogVisible" width="471">
            <EditNickname v-if="editNicknameDialog" @userDialogHide="userDialogHide" :email="userInfo.email" />
            <EditPassword v-if="editPasswordDialog" @userDialogHide="userDialogHide" />
        </v-dialog>
        <Notification :notificationShow="notificationShow" :notificationText="notificationText" :checkIcon="checkIcon" />
    </div>
</template>

<style lang="scss">
.account-container {
    margin: -20px 20px;
    padding-bottom: 20px;
}

.account-container-1 {
    margin: -20px 10px;
    padding-bottom: 20px;
}

.m-account-container {
    margin: -20px 0px;
    padding-bottom: 20px;
    border-radius: 8px;
}

.account-divider {
    margin: auto;
    border-width: thin;
    background: #353652;
}

.user-info-body:before {
    content: "";
    position: absolute;
    left: -10px;
    top: 60px;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 10px solid #211F31;
}

.account-menu {
    background-color: #211F31;
    border-radius: 0px 0px 12px 12px !important;

    .v-list {
        background: inherit !important;
    }
}

.user-info-item {
    height: 56px !important;
}

.account-edit-btn {
    background: transparent !important;
    box-shadow: none !important;

    .v-btn__content {
        font-weight: 400;
        font-size: 12px;
        color: #7782AA;
    }
}

.user-pwd-spacing {
    letter-spacing: 2px;
}
</style>