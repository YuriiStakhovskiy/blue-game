
<script lang="ts" setup>
import { ref, computed, toRefs } from 'vue';
import { useI18n } from 'vue-i18n';
import Header from './Header.vue';
import { useDisplay } from 'vuetify';

const { t } = useI18n();
const { width } = useDisplay();
const emit = defineEmits<{ (e: 'userDialogHide'): void }>()

const email = ref<string>("");
const title = ref<string>(t('account.edit_email_text'))

const mobileWidth = computed(() => {
    return width.value
})

const validateEmail = (): boolean => {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const isMatch = email.value.match(validRegex);
    return !!isMatch;
}

const updateEmail = () => {

}
</script>

<template>
    <div class="user-container">
        <Header @userDialogHide="emit('userDialogHide')" :title="title" />
        <v-row class="mt-10 relative"  :class="mobileWidth < 600 ? 'ma-2' : 'ma-10'">
            <v-text-field :label="t('account.item.email_text')" class="form-textfield dark-textfield" variant="solo"
                density="comfortable" v-model="email" />
        </v-row>
        <v-row class="mt-10" :class="mobileWidth < 600 ? 'ma-2' : 'ma-10'">
            <v-btn class="ma-3 mt-8 button-bright text-none" width="-webkit-fill-available" :height="mobileWidth < 600 ? '46px' : '60px'"
                :disabled="!validateEmail()" @click="emit('userDialogHide')">
                {{ t('account.save_text') }}
            </v-btn>
        </v-row>
    </div>
</template>

<style lang="scss">
// account dialog container
.user-container {
    background-color: #2a283b;
    border-radius: 16px !important;
    height: 470px;

    .v-btn--disabled {
        background-color: #353652 !important;
        color: white !important;
    }
}
</style>