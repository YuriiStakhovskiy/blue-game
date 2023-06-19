
<script lang="ts" setup>
import { ref, computed, toRefs } from 'vue';
import { useI18n } from 'vue-i18n';
import ValidationBox from '@/components/Signup/ValidationBox.vue';
import Header from './Header.vue';
import { useDisplay } from 'vuetify';

const { t } = useI18n();
const emit = defineEmits<{ (e: 'userDialogHide'): void }>()
const props = defineProps<{ email: string }>();
const { email } = toRefs(props);

const nickName = ref<string>("");
const isShowNicknameValidation = ref<boolean>(false);
const nickNameValidationStrList = ref<Array<string>>([
    t('signup.displayNamePage.validation.username.items[0]'),
    t('signup.displayNamePage.validation.username.items[1]'),
])


const nickNameValidationList = computed((): boolean[] => {
    // 2-20 characters in length
    const condition1 = nickName.value.length <= 20 && nickName.value.length >= 2;
    // Nickname must not be like your email
    const condition2 = !(nickName.value.toLowerCase().trim() === email.value.toLowerCase().trim());

    return [condition1, condition2];
})

const validateNickName = (): boolean => {
    return nickNameValidationList.value.reduce((res, item) => res && item, true)
}

const handleNickNameInputFocus = (): void => {
    isShowNicknameValidation.value = true;
}

const handleNickNameInputBlur = (): void => {
    isShowNicknameValidation.value = false;
}
</script>

<template>
    <div class="user-container">
        <Header @userDialogHide="emit('userDialogHide')" />
        <v-row class="ma-4 relative">
            <v-text-field :label="t('signup.displayNamePage.username')" class="form-textfield dark-textfield" variant="solo"
                density="comfortable" v-model="nickName" :onfocus="handleNickNameInputFocus"
                :onblur="handleNickNameInputBlur" />
            <ValidationBox v-if="isShowNicknameValidation" :title="t('signup.displayNamePage.validation.username.title')"
                :descriptionList="nickNameValidationStrList" :validationList="nickNameValidationList" />
        </v-row>
        <v-row class="ma-4">
            <v-btn class="ma-3 mt-8 button-bright text-none" width="-webkit-fill-available" height="60px"
                :disabled="!validateNickName()" @click="$emit('close')">
                {{ t('signup.displayNamePage.submit') }}
            </v-btn>
        </v-row>
    </div>
</template>

<style lang="scss">
// account dialog container
.user-container {
    background-color: #211F31;
    border-radius: 16px !important;
    height: 470px;
}
</style>