<script lang="ts" setup>
import { ref, computed, h, shallowRef, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useDisplay } from 'vuetify';

const { t } = useI18n()
const { width } = useDisplay();

const customPrefix = shallowRef({
    render() {
        return h('p', '')
    },
})

const customClear = shallowRef({
    render() {
        return h('p', '')
    },
})

const dateFormat = ref('YYYY/MM/DD');

const selectedBonusItem = ref("Invitation Bonus");

const bonusItems = ref<Array<string>>([
    "Invitation Bonus",
    "Betting Commission"
])

const handleDropdown = (item: string) => {
    selectedBonusItem.value = item;
}

const selectedDate = ref([]);

const mobileWidth = computed(() => {
    return width.value
})
</script>
<template>
    <v-row class="mt-6 justify-end mx-4">
        <v-menu offset="10" class="bonus-menu">
            <template v-slot:activator="{ props }">
                <v-card color="#1C1929" theme="dark" class="ml-auto">
                    <v-list-item class="bonus-item" v-bind="props" :title="selectedBonusItem" append-icon="mdi-chevron-down"
                        value="sport">
                    </v-list-item>
                </v-card>
            </template>
            <v-list theme="dark" bg-color="#211F31">
                <v-list-item v-for="(item, i) in bonusItems" :key="i" :value="item" class="bonus-item"
                    @click="handleDropdown(item)">
                    <v-list-item-title>{{ item }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <div class="relative ml-2">
            <el-date-picker v-model="selectedDate" popper-class="date-picker-background" type="daterange"
                value-format="YYYY/MM/DD" :format="dateFormat" :prefix-icon="customPrefix" :clear-icon="customClear"
                start-placeholder="Start date" end-placeholder="End date">
                <template #range-separator>
                    <img src="@/assets/affiliate/forms/svg/icon_public_83.svg" />
                </template>
            </el-date-picker>
            <img src="@/assets/affiliate/forms/svg/icon_public_23.svg" class="date-icon-position" />
        </div>
    </v-row>
</template>
<style lang="scss">
.bonus-menu {
    margin-left: auto !important;


    .v-overlay__content::after {
        content: "";
        position: absolute;
        align-self: center;
        float: right;
        top: -16px;
        border: 9px solid #211f31;
        border-right-color: transparent;
        border-left-color: transparent;
        border-top-color: transparent;
        border-right-width: 7px;
        border-left-width: 7px;
    }
}

.bonus-item {
    height: 100% !important;
    padding: 4px 14px !important;
    text-align: center !important;

    .v-list-item-title {
        font-weight: 700;
        font-size: 14px;
        color: #7782aa;
    }
}

.date-icon-position {
    position: absolute;
    top: 11px;
    right: 13px;
}

.el-date-editor.el-input__wrapper {
    height: 48px !important;
    background: #1C1929 !important;
    box-shadow: inset 2px 0px 4px 1px rgba(0, 0, 0, 0.12) !important;
    border-radius: 12px !important;
    justify-content: start;
}

.el-date-editor .el-range-input {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #7782AA;
}

.el-popper.is-light .el-popper__arrow::before {
    border: 1px solid #181522;
    background: #181522;
    right: 0;
}

.el-popper.is-light {
    background-color: #181522 !important;
    border: none !important;
    border-radius: 10px !important;
}

.date-picker-background {

    .el-picker-panel {
        background-color: #181522;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 19px;
        color: #FFFFFF;
        border-color: #181522;
        border: none;
        box-shadow: none;
        border-radius: 10px !important;
        box-shadow: 0px 5px 5px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 8px 10px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 3px 14px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
    }

    .el-date-range-picker__content.is-left {
        border-right: none;
    }

    .el-date-table td.in-range .el-date-table-cell {
        background-color: transparent;
    }

    .el-picker-panel__icon-btn .el-icon {
        cursor: pointer;
        font-weight: 900;
        font-size: 18px;
        color: #7782AA;
    }

    .el-date-table th {
        padding: 5px;
        font-weight: 600;
        font-size: 12px;
        color: #FFFFFF;
        border-bottom: none;
    }
}
</style>