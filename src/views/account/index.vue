<script lang="ts" setup>
import { ref, watch, computed, onMounted } from "vue"
import { useI18n } from "vue-i18n";
import { useDisplay } from "vuetify";
import Account from "@/components/account/pc/index.vue";
import MAccount from "@/components/account/mobile/index.vue";
import GameProviders from "@/components/global/game_provider/index.vue";

const { t } = useI18n();
const { width } = useDisplay()

const mobileWidth: any = computed(() => {
    return width.value;
})
</script>

<template>
    <Account v-if="mobileWidth > 600"/>
    <MAccount v-else />
    <div class="mx-2 mt-10">
        <GameProviders />
    </div>
</template>

<style lang="scss">
</style>