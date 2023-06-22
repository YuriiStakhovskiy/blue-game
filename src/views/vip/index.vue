<script lang="ts" setup>
import { ref, watch, computed, onMounted } from "vue"
import { appBarStore } from "@/store/appBar";
import { type GetVIPData } from "@/interface/vip";
import { storeToRefs } from "pinia";
import { useI18n } from "vue-i18n";
import { useDisplay } from "vuetify";

const { t } = useI18n();
const { width } = useDisplay()

const vipWidth = ref<string>('vip-container');
const selectedTabIndex = ref<number>(0)
const depositRate = ref<number>(56);

const vipItems = ref<Array<GetVIPData>>([
    {
        id: 1,
        totalDepositAmount: 10000,
        currentDepositAmount: 5642,
        totalWagerAmount: 10000,
        currentWagerAmount: 5642,
        vipGrade: "VIP 1",
        vipRate: 56,
    },
    {
        id: 2,
        totalDepositAmount: 10000,
        currentDepositAmount: 5642,
        totalWagerAmount: 10000,
        currentWagerAmount: 5642,
        vipGrade: "VIP 2",
        vipRate: 56,
    },
    {
        id: 3,
        totalDepositAmount: 10000,
        currentDepositAmount: 5642,
        totalWagerAmount: 10000,
        currentWagerAmount: 5642,
        vipGrade: "VIP 3",
        vipRate: 56,
    },
    {
        id: 4,
        totalDepositAmount: 10000,
        currentDepositAmount: 5642,
        totalWagerAmount: 10000,
        currentWagerAmount: 5642,
        vipGrade: "VIP 4",
        vipRate: 56,
    },
    {
        id: 5,
        totalDepositAmount: 10000,
        currentDepositAmount: 5642,
        totalWagerAmount: 10000,
        currentWagerAmount: 5642,
        vipGrade: "VIP 5",
        vipRate: 56,
    }
])

const vipTabs = ref<Array<string>>([
    t('vip.all_bonus_text'),
    t('vip.cash_back_text'),
    t('vip.super_carousel_text'),
    t('vip.welfare_task'),
])

const selectedVIPTab = ref<string>(t('vip.all_bonus_text'));

const selectedIndex = ref<number>(0);

const calculateTransform = (index: number) => {
    const selectedItemIndex = selectedIndex.value;
    const itemWidth = 100 / vipItems.value.length;
    const maxTranslation = (vipItems.value.length - 1) * itemWidth;
    let transform = (index - selectedItemIndex) * itemWidth;
    if (transform > maxTranslation / 2) {
        transform -= maxTranslation;
    } else if (transform < -maxTranslation / 2) {
        transform += maxTranslation;
    }
    return transform;
}

const handleCarouselChange = (index: number): void => {
    console.log(index);
    selectedIndex.value = index;
}

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
            <el-carousel :interval="6000" type="card" height="200px" class="mx-2 mt-4" :autoplay="false"
                @change="handleCarouselChange">
                <el-carousel-item v-for="(item, index) in vipItems" :key="index">
                    <div class="text-800-20 white text-center mt-4">{{ t('vip.slider.title_text') }}</div>
                    <v-row class="full-height mx-2">
                        <v-col cols="3" class="text-center">
                            <img src="@/assets/vip/svg/img_vip_02.svg" width="70" />
                            <p class="text-800-20 yellow">{{ item.vipGrade }}</p>
                        </v-col>
                        <v-col cols="9">
                            <div class="deposit-progress-bg">
                                <div class="d-flex mx-4">
                                    <div class="white">{{ t('appBar.deposit') }}</div>
                                    <div class="ml-auto">
                                        <Font class="text-gray">R$ {{ item.currentDepositAmount }} / </Font>
                                        <Font color="#F9BC01">R$ {{ item.totalDepositAmount }}</Font>
                                    </div>
                                </div>
                                <div>
                                    <v-progress-linear v-model="item.vipRate" height="20" class="deposit-progress">
                                    </v-progress-linear>
                                </div>
                            </div>
                            <div class="deposit-progress-bg mt-4">
                                <div class="d-flex mx-4">
                                    <div class="white">{{ t('appBar.wager') }}</div>
                                    <div class="ml-auto">
                                        <Font class="text-gray">R$ {{ item.currentWagerAmount }} / </Font>
                                        <Font color="#623AEC">R$ {{ item.totalWagerAmount }}</Font>
                                    </div>
                                </div>
                                <div>
                                    <v-progress-linear v-model="depositRate" height="20" class="wager-progress">
                                    </v-progress-linear>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </el-carousel-item>
            </el-carousel>
            <div class="mt-8">
                <v-slide-group v-model="selectedVIPTab" show-arrows>
                    <v-slide-group-item v-for="(item, index) in vipTabs" :key="index" v-slot="{ isSelected, toggle }"
                        :value="item">
                        <v-btn class="ma-2 text-none transaction-tab-btn" :class="isSelected ? 'white' : 'text-gray'"
                            rounded :color="isSelected ? '#32CFEC' : 'transparent'" @click="toggle"
                            :width="mobileWidth < 600 ? 120 : 150">
                            {{ item }}
                        </v-btn>
                    </v-slide-group-item>
                </v-slide-group>
            </div>
            <div class="reward-body mt-2 mx-2">
                <div class="text-800-16 white pt-8 mx-10">{{ t('vip.reward_text') }} {{ vipItems[selectedIndex].vipGrade }}
                </div>
                <v-row class="mx-12 mt-6 justify-center pb-6">
                    <v-col cols="3" class="d-flex justify-center">
                        <div class="reward-card text-center">
                            <div class="text-800-16 yellow pt-4">{{ t('vip.reward_card_1.daily_free_bonus_text') }}</div>
                            <div class="mt-6">
                                <img src="@/assets/vip/images/img_public_02.png" />
                            </div>
                            <div class="mt-10 text-600-16 white">
                                {{ t('vip.reward_card_1.text_1') }}
                            </div>
                            <div class="mt-4 mx-6">
                                <v-btn class="text-none button-dark" width="-webkit-fill-available" height="60px">
                                    {{ t('vip.receive_btn_text') }}
                                </v-btn>
                            </div>
                            <div class="mt-4 text-500-16 white">
                                {{ t('vip.reward_card_1.text_2') }}<Font class="yellow">21:23:22</Font>
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="3" class="d-flex justify-center">
                        <div class="reward-card text-center">
                            <div class="text-800-16 yellow pt-4">{{ t('vip.reward_card_2.vip_week_gift_text') }}</div>
                            <div class="mt-6 d-flex justify-center align-center">
                                <img src="@/assets/vip/images/img_public_02.png" />
                                <img src="@/assets/vip/images/img_public_09.png" class="ml-4" width="83" height="58" />
                            </div>
                            <div class="mt-6 text-600-16 white">
                                {{ t('vip.reward_card_2.text_1') }}
                            </div>
                            <div class="text-600-16 white">
                                {{ t('vip.reward_card_2.text_2') }}
                            </div>
                            <div class="mt-4 mx-6">
                                <v-btn class="text-none button-dark" width="-webkit-fill-available" height="60px">
                                    {{ t('vip.receive_btn_text') }}
                                </v-btn>
                            </div>
                            <div class="mt-4 text-500-16 white">
                                {{ t('vip.reward_card_2.text_3') }}<Font class="yellow">3</Font>{{
                                    t('vip.reward_card_2.text_4') }}
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="3" class="d-flex justify-center">
                        <div class="reward-card text-center">
                            <div class="text-800-16 yellow pt-4">{{ t('vip.reward_card_3.vip_month_gift_text') }}</div>
                            <div class="mt-6 d-flex justify-center align-center">
                                <img src="@/assets/vip/images/img_public_02.png" />
                                <img src="@/assets/vip/images/img_public_09.png" class="ml-4" width="83" height="58" />
                            </div>
                            <div class="mt-6 text-600-16 white">
                                {{ t('vip.reward_card_3.text_1') }}
                            </div>
                            <div class="text-600-16 white">
                                {{ t('vip.reward_card_3.text_2') }}
                            </div>
                            <div class="mt-4 mx-6">
                                <v-btn class="text-none button-dark" width="-webkit-fill-available" height="60px">
                                    {{ t('vip.receive_btn_text') }}
                                </v-btn>
                            </div>
                            <div class="mt-4 text-500-16 white">
                                {{ t('vip.reward_card_3.text_3') }}<Font class="yellow">3</Font>{{
                                    t('vip.reward_card_3.text_4') }}
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="3" class="d-flex justify-center">
                        <div class="reward-card text-center">
                            <div class="text-800-16 yellow pt-4">{{ t('vip.reward_card_4.vip_upgrage_gift_text') }}</div>
                            <div class="mt-6 d-flex justify-center align-center">
                                <img src="@/assets/vip/images/img_public_02.png" />
                                <img src="@/assets/vip/images/img_public_09.png" class="ml-4" width="83" height="58" />
                            </div>
                            <div class="mt-6 text-600-16 white">
                                {{ t('vip.reward_card_4.text_1') }}
                            </div>
                            <div class="text-600-16 white">
                                {{ t('vip.reward_card_4.text_2') }}
                            </div>
                            <div class="mt-4 mx-6">
                                <v-btn class="text-none button-dark" width="-webkit-fill-available" height="60px">
                                    {{ t('vip.receive_btn_text') }}
                                </v-btn>
                            </div>
                            <div class="mt-4 text-500-16 white">
                                {{ t('vip.reward_card_4.text_3') }}
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </div>
            <div class="cashback-bonus-body mt-6 mx-2 pb-6">
                <div class="text-800-16 white pt-8 mx-10 d-flex">
                    {{ t('vip.cashback_body.text_1') }}
                    <v-btn class="text-none button-yellow ml-auto relative" height="60px" width="262px">
                        <img src="@/assets/vip/images/img_public_10.png" class="cashback-btn-img" />
                        {{ t('vip.cashback_body.text_2') }}
                    </v-btn>
                </div>
                <v-card theme="dark" color="#1C1929" class="mt-6 mx-4">
                    <div class="pa-6">
                        <v-row class="ma-0 pa-0 align-center">
                            <p class="text-500-16 white">{{ t('vip.cashback_body.text_3') }} {{
                                vipItems[selectedIndex].vipGrade }}</p>
                            <p class="text-600-16 text-gray ml-auto">{{ t('vip.cashback_body.text_4') }}</p>
                            <img src="@/assets/vip/svg/icon_public_22.svg" class="ml-2" />
                        </v-row>
                        <v-row class="pa-3">
                            <v-col cols="3">
                                <v-card theme="dark" color="#29253C" class="text-center pa-2 relative">
                                    <img src="@/assets/vip/images/img_public_22.png" class="cashback-card-img" />
                                    <p class="text-600-16 white ">{{ t('vip.cashback_body.text_11') }}</p>
                                    <p class="text-800-32 color-04D981 mt-4">0.4%</p>
                                    <p class="text-700-16 text-gray mt-4">{{ t('vip.cashback_body.text_5') }} 0.5%</p>
                                </v-card>
                            </v-col>
                            <v-col cols="3">
                                <v-card theme="dark" color="#29253C" class="text-center pa-2 relative">
                                    <img src="@/assets/vip/images/img_public_22.png" class="cashback-card-img" />
                                    <p class="text-600-16 white ">{{ t('vip.cashback_body.text_11') }}</p>
                                    <p class="text-800-32 color-04D981 mt-4">0.5%</p>
                                    <p class="text-700-16 text-gray mt-4">{{ t('vip.cashback_body.text_5') }} 0.6%</p>
                                </v-card>
                            </v-col>
                            <v-col cols="3">
                                <v-card theme="dark" color="#29253C" class="text-center pa-2 relative">
                                    <img src="@/assets/vip/images/img_public_22.png" class="cashback-card-img" />
                                    <p class="text-600-16 white ">{{ t('vip.cashback_body.text_11') }}</p>
                                    <p class="text-800-32 color-04D981 mt-4">0.5%</p>
                                    <p class="text-700-16 text-gray mt-4">{{ t('vip.cashback_body.text_5') }} 0.6%</p>
                                </v-card>
                            </v-col>
                            <v-col cols="3">
                                <v-card theme="dark" color="#29253C" class="text-center pa-2 relative">
                                    <img src="@/assets/vip/images/img_public_22.png" class="cashback-card-img" />
                                    <p class="text-600-16 white ">{{ t('vip.cashback_body.text_11') }}</p>
                                    <p class="text-800-32 color-04D981 mt-4">0.4%</p>
                                    <p class="text-700-16 text-gray mt-4">{{ t('vip.cashback_body.text_5') }} 0.5%</p>
                                </v-card>
                            </v-col>
                        </v-row>
                    </div>
                </v-card>
                <v-card theme="dark" color="#1C1929" class="mt-6 mx-4">
                    <div class="pa-6">
                        <v-row class="pa-3 align-center">
                            <v-col cols="3">
                                <p class="text-700-16 white">{{ t('vip.cashback_body.text_7') }}</p>
                                <p class="text-700-20 yellow mt-6">R$ 12345678910</p>
                            </v-col>
                            <v-col cols="5">
                                <p class="text-700-16 white">{{ t('vip.cashback_body.text_8') }}</p>
                                <p class="text-700-20 yellow mt-6">R$ 12345678910</p>
                            </v-col>
                            <v-col cols="4" class="text-right">
                                <v-btn class="text-none button-yellow ml-auto relative" height="60px" width="262px">
                                    <div class="cashback-bonus-help-img">
                                        <img src="@/assets/vip/svg/icon_public_76.svg" />
                                    </div>
                                    <div style="width: 150px; white-space: normal;" class="text-800-14 ml-4">
                                        {{ t('vip.cashback_body.text_9') }}
                                    </div>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </div>
                </v-card>
            </div>
            <div class="super-spin-body mt-6 mx-2 pb-6">
                <div class="text-800-16 white pt-8 mx-10 d-flex">
                    {{ t('vip.super_spin_body.text_1') }}
                    <v-card theme="dark" color="#1C1929" class="ml-auto d-flex align-center" height="60" width="470">
                        <p class="text-600-16 white ml-4">{{ t('vip.super_spin_body.text_2') }} <Font class="text-800-20">3
                            </Font>
                        </p>
                        <v-btn class="text-none button-yellow ml-auto relative" height="60px" width="180px">
                            {{ t('vip.super_spin_body.text_3') }}
                        </v-btn>
                    </v-card>
                </div>
            </div>
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

    .v-slide-group {
        background: #1C1929 !important;
        margin: 8px !important;
        border-radius: 8px !important;
    }

    .v-slide-group__content {
        justify-content: center !important;
    }

    .v-btn__content {
        font-size: 16px;
    }

    .v-slide-group__prev,
    .v-slide-group__next {
        color: white !important;
    }
}

.el-carousel__indicators {
    display: none;
}

.el-carousel__arrow {
    border-radius: 8px;
    background: #000;

    .el-icon {
        font-size: 20px;
        font-weight: 800;
    }
}

.el-carousel__item--card {
    border-radius: 8px;
    background: linear-gradient(179deg, #4A32AA 0%, #29263F 100%);

}

.reward-body {
    border-radius: 8px;
    background: #29253C;
}

.reward-card {
    width: 247px;
    height: 347px;
    flex-shrink: 0;
    border-radius: 32px;
    background: linear-gradient(0deg, #275798 0%, #9419F0 100%);
    /* Button Shadow */
    box-shadow: 0px 3px 4px 1px rgba(0, 0, 0, 0.21);
}

.cashback-bonus-body {
    border-radius: 8px;
    background: linear-gradient(90deg, #29263F 0%, #4A32AA 100%);

    .v-btn__content {
        color: #000;
        font-size: 16px;
        font-family: Inter;
        font-weight: 800;
    }
}

.cashback-btn-img {
    position: absolute;
    top: -33px;
    left: -49px;
}

.cashback-card-img {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
}

.cashback-card-border {
    border-right: 1px solid #7782AA
}

.cashback-bonus-help-img {
    padding: 8px;
    border-radius: 50%;
    background: #000;
    width: 40px;
    height: 40px;
}

.super-spin-body {
    border-radius: 8px;
    background: linear-gradient(90deg, #29263F 0%, #67A22C 100%);

    .v-btn__content {
        color: #000;
        font-size: 20px;
        font-family: Inter;
        font-weight: 800;
    }
}
</style>