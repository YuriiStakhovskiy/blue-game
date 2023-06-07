
<script lang="ts" setup>
import { ref, computed } from "vue";
import NavBarLayout from './NavBar.vue';
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
    <MainLayout />
    <RightBarLayout />
    <MobileMenuLayout v-if="mobileWidth < 600"/>
  </v-app>
</template>

<style lang="scss"></style>
