<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useDisplay } from "vuetify";
import { type GetRouletteHistory } from '@/interface/vip';

const emit = defineEmits<{ (e: 'closeRouletteBonusDialog'): void }>()
const { t } = useI18n();
const { width } = useDisplay()

const roulettePaidBonus = ref<string>("R$ 1.400.000");
const spinNumber = ref<number>(1);
const winnerBodyHeight = ref<number>(347);
const winnerBodyShow = ref<boolean>(false);

const rouletteHistory = ref<Array<GetRouletteHistory>>([
    {
        id: 1,
        rouletteTime: "2023/06/20 23:19:00",
        user: "User9110245128",
        rouletteResult: "R$ 1",
    },
    {
        id: 2,
        rouletteTime: "2023/06/20 23:19:00",
        user: "User9110245128",
        rouletteResult: "R$ 0.5",
    },
    {
        id: 1,
        rouletteTime: "2023/06/20 23:19:00",
        user: "User9110245128",
        rouletteResult: "IPHONE 14",
    },
    {
        id: 1,
        rouletteTime: "2023/06/20 23:19:00",
        user: "User9110245128",
        rouletteResult: "R$ 5000",
    },
])

const mobileWidth: any = computed(() => {
    return width.value;
})

const showWinnerBody = () => {
    winnerBodyShow.value = !winnerBodyShow.value;
    // winnerBodyHeight.value = winnerBodyHeight.value ? 347 : 0;
}
</script>

<template>
    <div class="roulette-bonus-dialog-container">
        <div class="roulette-bonus-dialog-header-left">
            <v-btn class="roulette-bonus-dialog-sound-bg-1 ml-4" icon="true" width="34" height="34">
                <div class="roulette-bonus-dialog-sound-bg-2">
                    <img src="@/assets/public/svg/icon_public_46.svg" width="18"
                        class="roulette-bonus-dialog-sound-position" />
                </div>
            </v-btn>
        </div>
        <div class="roulette-bonus-dialog-header-right">
            <v-btn class="roulette-bonus-dialog-help-bg mr-4" icon="true" width="34" height="34">
                <div class="roulette-bonus-dialog-help-bg-2">
                    <img src="@/assets/public/svg/icon_public_22.svg" width="18"
                        class="roulette-bonus-dialog-help-position" />
                </div>
            </v-btn>
            <v-btn class="roulette-bonus-dialog-close-bg mr-4" icon="true" width="34" height="34"
                @click="emit('closeRouletteBonusDialog')">
                <div class="roulette-bonus-dialog-close-bg-2">
                    <img src="@/assets/public/svg/icon_public_52.svg" width="18"
                        class="roulette-bonus-dialog-close-position" />
                </div>
            </v-btn>
        </div>
        <div class="roulette-bonus-dialog-body">
            <img src="@/assets/vip/image/img_vip_31.png" width="428" class="roulette-bonus-dialog-spin-position" />
            <img src="@/assets/vip/image/img_vip_30.png" width="248" class="roulette-bonus-dialog-spin-position-1" />
            <img src="@/assets/vip/image/img_vip_28.png" width="52" class="roulette-bonus-dialog-spin-position-2" />
            <img src="@/assets/vip/image/img_vip_29.png" width="70" class="roulette-bonus-dialog-spin-position-3" />
            <div class="roulette-bonus-dialog-body-1">
                <p class="text-900-18 white mt-4 text-center">{{ t('vip.roulette_bonus.paid_text') }}</p>
                <p class="text-900-28 yellow mt-3 text-center">{{ roulettePaidBonus }}</p>
            </div>
            <v-btn class="button-bright text-none roulette-bonus-dialog-body-2" width="423" height="48">
                {{ t('vip.roulette_bonus.roulette_btn_text') }}
                <div class="roulette-bonus-dialog-spin-number-bg">
                    <p class="text-900-16 white">{{ spinNumber }}</p>
                </div>
            </v-btn>
            <div class="roulette-bonus-dialog-body-3">
                <div class="my-1">
                    <v-row v-for="(item, index) in rouletteHistory" :key="index" class="ma-0 mx-4 pa-0">
                        <v-col cols="5" class="pa-1 ma-0 text-500-10 gray">{{ item.rouletteTime }}</v-col>
                        <v-col cols="4" class="pa-1 ma-0 text-500-10 gray">{{ item.user }}</v-col>
                        <v-col cols="3" class="pa-1 ma-0 text-500-10 yellow" v-if="item.rouletteResult == 'IPHONE 14'">{{
                            item.rouletteResult }}</v-col>
                        <v-col cols="3" class="pa-1 ma-0 text-500-10 white" v-else-if="item.rouletteResult == 'R$ 5000'">{{
                            item.rouletteResult }}</v-col>
                        <v-col cols="3" class="pa-1 ma-0 text-500-10 gray" v-else>{{ item.rouletteResult }}</v-col>
                    </v-row>
                </div>
            </div>
            <v-btn class="text-none roulette-bonus-dialog-body-4" width="170" height="36" @click="showWinnerBody">
                {{ t('vip.roulette_bonus.victory_btn_text') }}
                <v-icon style="font-size: 20px;" class="mt-1" v-if="winnerBodyShow">mdi-chevron-down</v-icon>
                <v-icon style="font-size: 20px;" class="mt-1" v-else>mdi-chevron-up</v-icon>
            </v-btn>
        </div>
        <!-- <div class="roulette-bonus-dialog-winner-body" :style="{ height: winnerBodyHeight + 'px' }">
            <div class="victory-toggle">
                <input type="checkbox" id="victory-toggle" />
                <label for="victory-toggle">
                    <div class="winner">
                        <P>{{ t('vip.roulette_bonus.winner_text') }}</P>
                    </div>
                    <div class="prize">
                        <P>{{ t('vip.roulette_bonus.prize_winner_text') }}</P>
                    </div>
                </label>
            </div>
            <div class="roulette-bonus-dialog-winner-content"></div>
        </div> -->
        <transition name="fade">
            <div class="roulette-bonus-dialog-winner-body" :style="{ height: winnerBodyHeight + 'px' }"
                v-if="winnerBodyShow">
                <div class="victory-toggle">
                    <input type="checkbox" id="victory-toggle" />
                    <label for="victory-toggle">
                        <div class="winner">
                            <P>{{ t('vip.roulette_bonus.winner_text') }}</P>
                        </div>
                        <div class="prize">
                            <P>{{ t('vip.roulette_bonus.prize_winner_text') }}</P>
                        </div>
                    </label>
                </div>
                <div class="roulette-bonus-dialog-winner-content"></div>
            </div>
        </transition>
        <!-- <transition name="height-transition">
            <div v-if="winnerBodyShow" :style="{ height: `${winnerBodyHeight}px`, background:'black' }">
                sdfsdfsdf
            </div>
        </transition> -->
    </div>
</template>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
    transition: height 0.3s;
}

.fade-enter,
.fade-leave-to {
    height: 0;
}

.roulette-bonus-dialog-container {
    height: 619px;
    border-radius: 0px 0px 24px 24px;
    background: linear-gradient(180deg, #2C2744 0%, #693FF6 100%);
    position: relative;

    .roulette-bonus-dialog-header-left {
        display: flex;
        align-items: center;
        width: 180px;
        position: absolute;
        left: 0;
        top: -46px;
        height: 46px;
        border-radius: 16px 16px 0px 0px;
        background: #29263C;

        .roulette-bonus-dialog-sound-bg-1 {
            background: #211F31;
            border-radius: 34px;
            position: relative;
            z-index: 2000;
        }

        .roulette-bonus-dialog-sound-bg-2 {
            width: 28px;
            height: 28px;
            background: #29253C;
            border-radius: 28px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }

        .roulette-bonus-dialog-sound-position {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }

    .roulette-bonus-dialog-header-right {
        width: 180px;
        position: absolute;
        right: 0;
        top: -46px;
        height: 46px;
        border-radius: 16px 16px 0px 0px;
        background: #29263C;
        display: flex;
        align-items: center;
        justify-content: end;

        .roulette-bonus-dialog-help-bg {
            background: #211F31;
            border-radius: 34px;
            position: relative;
            z-index: 2000;
        }

        .roulette-bonus-dialog-help-bg-2 {
            width: 28px;
            height: 28px;
            background: #29253C;
            border-radius: 28px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }

        .roulette-bonus-dialog-help-position {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }

        .roulette-bonus-dialog-close-bg {
            background: #211F31;
            border-radius: 34px;
            position: relative;
            z-index: 2000;
        }

        .roulette-bonus-dialog-close-bg-2 {
            width: 28px;
            height: 28px;
            background: #29253C;
            border-radius: 28px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }

        .roulette-bonus-dialog-close-position {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }

    .roulette-bonus-dialog-body {
        position: relative;

        .roulette-bonus-dialog-spin-position {
            position: absolute;
            top: -62px;
            left: 50%;
            transform: translateX(-50%);
        }

        .roulette-bonus-dialog-spin-position-1 {
            position: absolute;
            top: -29px;
            left: 51%;
            transform: translateX(-50%);
        }

        .roulette-bonus-dialog-spin-position-2 {
            position: absolute;
            top: -35px;
            left: 51%;
            transform: translateX(-50%);
        }

        .roulette-bonus-dialog-spin-position-3 {
            position: absolute;
            top: 61px;
            left: 51%;
            transform: translateX(-50%);
        }

        .roulette-bonus-dialog-body-1 {
            position: absolute;
            top: 280px;
            left: 51%;
            transform: translateX(-50%);
            width: 423px;
            height: 100px;
            border-radius: 10px;
            background: #211F31;
            /* Text Box */
            box-shadow: 2px 0px 4px 1px rgba(0, 0, 0, 0.12) inset;
        }

        .roulette-bonus-dialog-body-2 {
            position: absolute;
            top: 394px;
            left: 51%;
            transform: translateX(-50%);

            .v-btn__content {
                text-align: center;
                font-family: Inter;
                font-size: 14px;
                font-style: normal;
                font-weight: 900;
                line-height: normal;
            }

            .roulette-bonus-dialog-spin-number-bg {
                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                top: 50%;
                right: 12px;
                transform: translateY(-50%);
                width: 30px;
                height: 30px;
                flex-shrink: 0;
                background: #211F31;
                border-radius: 30px;
            }
        }

        .roulette-bonus-dialog-body-3 {
            overflow-y: auto;
            position: absolute;
            top: 456px;
            left: 51%;
            transform: translateX(-50%);
            width: 423px;
            height: 100px;
            border-radius: 10px;
            background: #211F31;
            /* Text Box */
            box-shadow: 2px 0px 4px 1px rgba(0, 0, 0, 0.12) inset;
        }

        .roulette-bonus-dialog-body-4 {
            border-radius: 12px;
            border: 1px solid #693FF8;
            background: #1C1929;
            box-shadow: 0px 3px 4px 1px rgba(0, 0, 0, 0.21);
            position: absolute;
            top: 568px;
            left: 51%;
            transform: translateX(-50%);
            z-index: 2;

            .v-btn__content {
                color: #FFF;
                text-align: center;
                font-family: Inter;
                font-size: 10px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
            }
        }
    }

    .roulette-bonus-dialog-winner-body {
        width: 100%;
        height: 347px;
        border-radius: 24px;
        background: #29253C;
        position: absolute;
        bottom: 0;
        z-index: 1;
        transition: height 0.3s ease-out;

        // winner and prize toggle switch
        .victory-toggle {
            position: absolute;
            top: -12px;
            left: 50%;
            transform: translateX(-50%);

            // margin-top: -10px;

            label {
                width: 439px;
                height: 48px;
                position: relative;
                display: block;
                border-radius: 50px;
                background: #211F31;
                box-shadow: 2px 0px 4px 1px rgba(0, 0, 0, 0.12) inset;
                cursor: pointer;
                transition: 0.3s;
                margin: auto;

                div {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    z-index: 100;
                    display: flex;
                    align-items: center;
                    font-weight: 700;
                    font-size: 14px;
                }

                .winner {
                    left: 80px;
                    transition: 0.3s;
                    color: black;
                }

                .prize {
                    left: 268px;
                    transition: 0.3s;
                    color: #7782AA;
                }
            }

            label:after {
                content: "";
                width: 214px;
                height: 40px;
                position: absolute;
                top: 4px;
                left: 4px;
                background: #32CFEC;
                border-radius: 20px;
                box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
                transition: 0.3s;
            }

            input {
                width: 0;
                height: 0;
                visibility: hidden;
            }

            input:checked+label:after {
                left: 434px;
                transform: translateX(-100%);
            }

            label:active:after {
                width: 214px;
            }

            input:checked+label .winner {
                color: #7782AA
            }

            input:checked+label .prize {
                color: black
            }

        }

        .roulette-bonus-dialog-winner-content {
            position: absolute;
            top: 70px;
            left: 50%;
            transform: translateX(-50%);
            width: 439px;
            height: 212px;
            border-radius: 12px;
            background: #211F31;
            /* Text Box */
            box-shadow: 2px 0px 4px 1px rgba(0, 0, 0, 0.12) inset;
        }
    }
}
</style>