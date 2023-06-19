<script lang="ts" setup>
import { ref, watch, computed, onMounted } from "vue"
import { useI18n } from "vue-i18n";
import { useDisplay } from "vuetify";

const { t } = useI18n();
const { width } = useDisplay()

const mobileWidth: any = computed(() => {
    return width.value;
})

onMounted(() => {
})
</script>

<template>
    <div>sdfsdfdsfsdfsdf</div>
</template>

<style lang="scss">
</style>