
<script lang="ts" setup>
import { ref, computed, toRefs } from 'vue';
import { useI18n } from 'vue-i18n';
import { useDisplay } from 'vuetify';

const { t } = useI18n();
const { width } = useDisplay();
const emit = defineEmits<{ (e: 'suspendDialogHide'): void }>()
const props = defineProps<{ suspendDate: number }>();
const { suspendDate } = toRefs(props);

</script>

<template>
    <div class="suspend-dialog-container">
        <v-row class="mx-10 mt-6 text-700-16 text-gray">
            {{ t('account.suspend_account.dialog.title_text') }}
        </v-row>
        <v-row class="mx-10 mt-10 text-700-16 text-gray">
            <p>
                {{ t('account.suspend_account.dialog.content_text_1') }}
                <Font color="#FFFFFF">
                    {{ suspendDate }}
                    {{ t('account.suspend_account.dialog.content_text_2') }}
                </Font>
            </p>
        </v-row>
        <v-row class="mx-10 mt-10 text-700-14 justify-end">
            <div class="suspend-confirm-btn">
                <v-btn class="button-bright text-none" width="-webkit-fill-available" height="40px" @click="emit('suspendDialogHide')">
                    {{ t('account.suspend_account.dialog.determine_btn_text') }}
                </v-btn>
            </div>
            <div class="suspend-cancel-btn ml-2">
                <v-btn class="button-bright text-none" width="-webkit-fill-available" height="40px" @click="emit('suspendDialogHide')">
                    {{ t('account.suspend_account.dialog.cancel_btn_text') }}
                </v-btn>
            </div>
        </v-row>
    </div>
</template>

<style lang="scss">
// account dialog container
.suspend-dialog-container {
    background-color: #1C1929;
    border-radius: 16px !important;
    height: 220px;
}

.suspend-confirm-btn {

    // button
    button {
        border-radius: 26px !important;

        .v-btn__content {
            font-weight: 700;
            font-size: 14px;
        }
    }
}

.suspend-cancel-btn {

    // button
    button {
        background: #414968 !important;
        box-shadow: 0px 3px 4px 1px rgba(0, 0, 0, 0.21);
        border-radius: 26px;

        .v-btn__content {
            font-weight: 700;
            font-size: 14px;
            color: #FFFFFF;
        }
    }
}
</style>