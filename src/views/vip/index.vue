<script lang="ts" setup>
import { ref, watch, computed, onMounted } from "vue"
import { appBarStore } from "@/store/appBar";
import { storeToRefs } from "pinia";
import { useI18n } from "vue-i18n";
import { useDisplay } from "vuetify";

const { t } = useI18n();
const { width } = useDisplay()

const vipWidth = ref<string>('vip-container');
const selectedTabIndex = ref<number>(0)

const model = ref(null);

const rightBarToggle = computed(() => {
    const { getRightBarToggle } = storeToRefs(appBarStore());
    return getRightBarToggle.value;
})

const mobileWidth: any = computed(() => {
    return width.value;
})

watch(rightBarToggle, (newValue) => {
    if (mobileWidth.value > 1280) {
        if (newValue) {
            vipWidth.value = "vip-container";
        } else {
            vipWidth.value = "vip-container-1";
        }
    } else {
        vipWidth.value = "m-vip-container";
    }
})

watch(mobileWidth, (newValue: number) => {
    if (newValue > 1280) {
        if (rightBarToggle.value) {
            vipWidth.value = "vip-container";
        } else {
            vipWidth.value = "vip-container-1";
        }
    } else {
        vipWidth.value = "m-vip-container";
    }
})

const tabSelect = (index: number) => {
    selectedTabIndex.value = index;
}

onMounted(() => {
    if (mobileWidth.value > 1280) {
        if (rightBarToggle.value) {
            vipWidth.value = "vip-container";
        } else {
            vipWidth.value = "vip-container-1";
        }
    } else {
        vipWidth.value = "m-vip-container";
    }
})
</script>

<template>
    <div :class="vipWidth">
        <div class="vip-body">
            <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
                <v-slide-group-item v-for="n in 15" :key="n" v-slot="{ isSelected, toggle, selectedClass }">
                    <v-card color="grey-lighten-1" :class="['ma-4', selectedClass]" height="200" width="400"
                        @click="toggle">
                        <div class="d-flex fill-height align-center justify-center">
                            <v-scale-transition>
                                <v-icon v-if="isSelected" color="white" size="48" icon="mdi-close-circle-outline"></v-icon>
                            </v-scale-transition>
                        </div>
                    </v-card>
                </v-slide-group-item>
            </v-slide-group>
        </div>
    </div>
</template>
<style lang="scss">
.vip-container {
    margin: -20px 20px;
    background: #211F31;
    padding-bottom: 20px;
    border-radius: 8px;
}

.vip-container-1 {
    margin: -20px 10px;
    background: #211F31;
    padding-bottom: 20px;
    border-radius: 8px;
}

.m-vip-container {
    margin: -20px 0px;
    background: #211F31;
    padding-bottom: 20px;
    border-radius: 8px;
}

.vip-body {
    padding-top: 30px;
}
</style>