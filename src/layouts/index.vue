
<script lang="ts" setup>
import { ref, computed } from "vue";
import NavBarLayout from './NavBar.vue';
import UserNavBarLayout from './UserNavBar.vue';
import RightBarLayout from './RightBar.vue';
import AppBarLayout from './AppBar.vue'
import MainLayout from './Main.vue'
import MobileMenuLayout from './MobileMenu.vue';
import { useDisplay } from 'vuetify';

const { width } = useDisplay();

const mobileWidth = computed(() => {
  return width.value
})
</script>

<template>
  <v-app>
    <AppBarLayout />
    <NavBarLayout />
    <UserNavBarLayout />
    <MainLayout />
    <RightBarLayout v-if="mobileWidth > 600"/>
    <MobileMenuLayout v-if="mobileWidth < 600" />
  </v-app>
</template>

<style lang="scss">
.v-navigation-drawer__scrim {
  opacity: 0.8 !important;
}
</style>