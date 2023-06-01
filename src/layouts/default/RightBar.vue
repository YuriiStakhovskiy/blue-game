<script lang="ts" setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const items = ref([t('rightBar.dropdownItem.sport'), t('rightBar.dropdownItem.casino')]);
const selectedItem = ref<string>('Sport');
const handleDropdown = (item: string) => {
    console.log(item);
    selectedItem.value = item;
}
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
                    <v-menu offset="20">
                        <template v-slot:activator="{ props }">
                            <v-card color="#29263C" theme="dark" class="ml-4">
                                <v-list-item class="sport-item" v-bind="props" :title="selectedItem" append-icon="mdi-chevron-down"
                                    value="sport">
                                </v-list-item>
                            </v-card>
                        </template>
                        <v-list theme="dark" bg-color="#211F31">
                            <v-list-item v-for="(item, i) in items" :key="i" :value="item" class="sport-item" @click="handleDropdown(item)">
                                <v-list-item-title>{{ item }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-row>
            </v-card>
        </template>
        <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
            <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
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
    padding: 4px 8px!important;
    .v-list-item-title {
        font-weight: 700;
        font-size: 14px;
        color: #7782AA;
    }
}

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
</style>