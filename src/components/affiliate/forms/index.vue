<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useDisplay } from 'vuetify';

const { t } = useI18n()
const { width } = useDisplay();

const selectedDate=ref(null);

const mobileWidth = computed(() => {
    return width.value
})
</script>
<template>
    <v-row class="mt-6 statistics-profit-text">
        <v-date-picker v-model="selectedDate"></v-date-picker>
    </v-row>
</template>
<style lang="scss">
</style>