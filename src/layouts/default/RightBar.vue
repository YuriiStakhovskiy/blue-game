<script lang="ts" setup>
import { ref } from 'vue';
const items = ref(['Sport', 'Casino']);
</script>

<template>
    <v-navigation-drawer permanent class="nav-background" location="right" :width="240">
        <template v-slot:prepend>
            <v-card color="#211F31" theme="dark" class="right-bar-card-border">
                <v-row class="ma-1 align-center">
                    <v-btn class="right-btn" icon="true">
                        <v-icon icon="mdi-close" class="card-close-icon" />
                    </v-btn>
                    <img src="@/assets/right_navigation/svg/info.svg" class="ml-4" />
                    <img src="@/assets/right_navigation/svg/img_nav_87.svg" class="ml-4" />
                    <v-select :items="items" density="compact"></v-select>
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
</style>