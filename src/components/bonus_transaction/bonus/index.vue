<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useDisplay } from 'vuetify';
import { type GetBonusData} from "@/interface/bonus";

const { t } = useI18n()
const { width } = useDisplay();

const mobileWidth = computed(() => {
    return width.value
})

const totalAmount = ref<string>("R$ 1500.56");
const withdrawAmount = ref<string>("R$ 855.79");

const bonusList = ref<Array<GetBonusData>>([
    {
        type: "Completion",
        rate: 100,
        currentCash: "R$ 90000.00",
        totalCash: "R$ 90000.00",
        restCash: "RRL 3000",
        bonusCash: "R$ 6000",
        expireDate: "2023/2/20"
    },
    {
        type: "Underway",
        rate: 50,
        currentCash: "R$ 90000.00",
        totalCash: "R$ 90000.00",
        restCash: "RRL 3000",
        bonusCash: "R$ 6000",
        expireDate: "2023/2/20"
    }
]);
</script>
<template>
    <v-row class="mt-6 mx-2 text-600-16 text-gray text-center">
        <v-col cols="4">
            {{ t('bonus.title_text') }}
        </v-col>
    </v-row>
    <v-row class="mx-4">
        <v-col cols="12" md="4" lg="4">
            <v-list-item class="bg-color-1">
                <template v-slot:prepend>
                    <img src="@/assets/bonus/svg/icon_public_26.svg" />
                </template>
                <v-list-item-title class="ml-4">
                    <div class="text-400-12 text-gray">{{ t('bonus.total_text') }}</div>
                    <div class="text-600-14 white mt-1">{{ totalAmount }}</div>
                </v-list-item-title>
                <template v-slot:append>
                    <img src="@/assets/bonus/svg/btn_public_02.svg" />
                </template>
            </v-list-item>
            <v-list-item class="bg-color-1 mt-4">
                <template v-slot:prepend>
                    <img src="@/assets/bonus/svg/icon_public_27.svg" />
                </template>
                <v-list-item-title class="ml-4">
                    <div class="text-400-12 text-gray">{{ t('bonus.withdraw_text') }}</div>
                    <div class="text-600-14 white mt-1">{{ withdrawAmount }}</div>
                </v-list-item-title>
            </v-list-item>
        </v-col>
        <v-col cols="12" md="8" lg="8">
            <v-card theme="dark" color="#1C1929" class="bonus-card-body pa-4">
                <v-expansion-panels>
                    <v-expansion-panel class="bg-color-211F31 mt-2" v-for="(item,index) in bonusList" :key="index">
                        <v-expansion-panel-title>
                            <template v-slot:default="{ expanded }">
                                <v-row no-gutters class="align-center">
                                    <v-col cols="2" class="text-700-18 text-center">{{item.restCash}}</v-col>
                                    <v-col cols="2" class="text-400-16 text-center">{{item.type}}</v-col>
                                    <v-col cols="5" class="text-center">
                                        <div class="text-700-14" v-if="item.type == 'Completion'">Complete the task and get <Font color="#F9BC01">{{ item.bonusCash }}</Font> bonus</div>
                                        <div class="mt-2">
                                            <v-progress-linear v-model="item.rate" height="21">
                                                <div class="text-500-12">{{ item.currentCash }} / {{ item.totalCash }}</div>
                                            </v-progress-linear>
                                        </div>
                                    </v-col>
                                    <v-col cols="2" class="text-center" v-if="item.type != 'Underway'">
                                        <div class="text-400-12">Expire on</div>
                                        <div class="text-600-14 mt-2">{{ item.expireDate }}</div>
                                    </v-col>
                                    <v-col cols="2" class="text-center" v-else>
                                        <div class="text-400-12">No time limit</div>
                                    </v-col>
                                    <v-col cols="1">
                                        <img src="@/assets/bonus/img/img_so_03.png" v-if="item.type != 'Underway'"/>
                                    </v-col>
                                </v-row>
                            </template>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <div>test</div>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-card>
        </v-col>
    </v-row>
</template>
<style lang="scss">
.bonus-card-body {
    height: 700px;
    overflow-y: auto;
}

.v-expansion-panel-title:active:enabled {
    transform: none !important;
    filter: none !important;
    background: linear-gradient(90deg, #29263F 0%, #4A32AA 100%) !important;
    border-radius: 8px !important;
}

.v-expansion-panel-title {
    background: linear-gradient(90deg, #29263F 0%, #4A32AA 100%) !important;
    border-radius: 8px !important;
    padding: 14px 8px !important;
    height: 72px !important;
}

.v-progress-linear {
    background: #211F31 !important;
    box-shadow: inset 2px 0px 4px 1px rgba(0, 0, 0, 0.12) !important;
    border-radius: 8px !important;
}
.v-progress-linear__background {
    background: transparent !important;
}
.v-progress-linear__determinate {
    background: linear-gradient(180deg, #6D44F8 0%, #5726FC 100%) !important;
    border-radius: 8px !important;
}
</style>