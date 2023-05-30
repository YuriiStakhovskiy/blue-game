<script lang="ts" setup>
  //
</script>

<template>
    <v-navigation-drawer permanent class="nav-background" location="right"  :width="240">
        <template v-slot:prepend>
            <v-list-item lines="two" prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg" title="Jane Smith"
                subtitle="Logged in">
            </v-list-item>
        </template>
        <v-divider></v-divider>
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
    top: 0px!important;
    height: 100%!important;
}
</style>