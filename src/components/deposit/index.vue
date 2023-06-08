<script lang="ts" setup>
import { ref } from 'vue';
import { appBarStore } from '@/store/appBar';
import { type GetCurrencyItem } from '@/interface/deposit';
import { type GetPaymentItem } from '@/interface/deposit';
import ValidationBox from '@/components/deposit/ValidationBox.vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const { setDepositDialogToggle } = appBarStore();

const selectedCurrencyItem = ref<GetCurrencyItem>({
    icon: new URL("@/assets/deposit/svg/deposit_1.svg", import.meta.url).href,
    name: "BRL"
})
const selectedPaymentItem = ref<GetPaymentItem>({
    icon: new URL("@/assets/deposit/svg/icon_public_74.svg", import.meta.url).href,
    name: "PIX",
    description: "20~150.000 BRL"
})

const currencyList = ref<Array<GetCurrencyItem>>([
    {
        icon: new URL("@/assets/deposit/svg/deposit_1.svg", import.meta.url).href,
        name: "BRL_1"
    },
    {
        icon: new URL("@/assets/deposit/svg/deposit_2.svg", import.meta.url).href,
        name: "BRL_2"
    },
    {
        icon: new URL("@/assets/deposit/svg/deposit_3.svg", import.meta.url).href,
        name: "BRL_3"
    },
    {
        icon: new URL("@/assets/deposit/svg/deposit_4.svg", import.meta.url).href,
        name: "BRL_4"
    },
    {
        icon: new URL("@/assets/deposit/svg/deposit_5.svg", import.meta.url).href,
        name: "BRL_5"
    },
])

const paymentList = ref<Array<GetPaymentItem>>([
    {
        icon: new URL("@/assets/deposit/svg/icon_public_74.svg", import.meta.url).href,
        name: "PIX_1",
        description: "20~150.000 BRL"
    },
    {
        icon: new URL("@/assets/deposit/svg/icon_public_74.svg", import.meta.url).href,
        name: "PIX_2",
        description: "20~150.000 BRL"
    },
    {
        icon: new URL("@/assets/deposit/svg/icon_public_74.svg", import.meta.url).href,
        name: "PIX_3",
        description: "20~150.000 BRL"
    },
    {
        icon: new URL("@/assets/deposit/svg/icon_public_74.svg", import.meta.url).href,
        name: "PIX_4",
        description: "20~150.000 BRL"
    },
    {
        icon: new URL("@/assets/deposit/svg/icon_public_74.svg", import.meta.url).href,
        name: "PIX_5",
        description: "20~150.000 BRL"
    },
    {
        icon: new URL("@/assets/deposit/svg/icon_public_74.svg", import.meta.url).href,
        name: "PIX_6",
        description: "20~150.000 BRL"
    },
    {
        icon: new URL("@/assets/deposit/svg/icon_public_74.svg", import.meta.url).href,
        name: "PIX_5",
        description: "20~150.000 BRL"
    },
    {
        icon: new URL("@/assets/deposit/svg/icon_public_74.svg", import.meta.url).href,
        name: "PIX_6",
        description: "20~150.000 BRL"
    },
])

const depositAmountList = ref<Array<string>>([
    '20',
    '200',
    '500',
    '2000',
    '5000',
    '19999',
])

const depositAmountUnit = ref<string>("R$");

const depositRate = ref<string>("+100%");

const depositAmount = ref<string>("")

const isShowAmountValidaton = ref<boolean>(false);

const handleDepositAmount = (amount: string) => {
    depositAmount.value = amount;
}

const handleSelectCurrency = (item: GetCurrencyItem) => {
    selectedCurrencyItem.value = item;
}

const handleSelectPayment = (item: GetPaymentItem) => {
    selectedPaymentItem.value = item;
}

const validateAmount = (): boolean => {
    return Number(depositAmount.value) >= 20 && Number(depositAmount.value) <= 100000;
}

const handleAmountInputFocus = (): void => {
    if (validateAmount()) {
        isShowAmountValidaton.value = false;
    } else {
        isShowAmountValidaton.value = true;
    }
}

const handleAmountInputChange = (): void => {
    if (validateAmount()) {
        isShowAmountValidaton.value = false;
    } else {
        isShowAmountValidaton.value = true;
    }
}

const handleAmountInputBlur = (): void => {
    if (validateAmount()) {
        isShowAmountValidaton.value = false;
    } else {
        isShowAmountValidaton.value = true;
    }
}
</script>
  
<template>
    <div class="deposit-container">
        <div class="header d-flex align-center relative">
            <img src="@/assets/deposit/image/Group 772544197.png" width="48" height="48" class="ml-4" />
            <img src="@/assets/deposit/svg/icon_public_11.svg" class="ml-2" />
            <div class="deposit-toggle">
                <input type="checkbox" id="deposit-toggle" />
                <label for="deposit-toggle">
                    <div class="deposit">
                        <img src="@/assets/app_bar/svg/icon_public_60.svg" />
                        <P>{{ t('appBar.deposit') }}</P>
                    </div>
                    <div class="withdraw">
                        <img src="@/assets/app_bar/svg/icon_public_65.svg" />
                        <P>{{ t('appBar.withdraw') }}</P>
                    </div>
                </label>
            </div>
        </div>
        <v-row class="mt-6 ml-16 deposit-text">
            {{ t('deposit_dialog.deposit_currency') }}
        </v-row>
        <v-menu offset="4" class="mt-1">
            <template v-slot:activator="{ props }">
                <v-card color="#1C1929" theme="dark" class="mx-12 mt-4 deposit-card-height">
                    <v-list-item v-bind="props" class="currency-item deposit-card-height" value="currency dropdown"
                        append-icon="mdi-chevron-down">
                        <template v-slot:prepend>
                            <img :src="selectedCurrencyItem.icon" width="26" />
                        </template>
                        <v-list-item-title class="ml-2">{{ selectedCurrencyItem.name }}</v-list-item-title>
                    </v-list-item>
                </v-card>
            </template>
            <v-list theme="dark" bg-color="#211F31" class="px-2">
                <v-list-item class="currency-item pl-6" :value="currencyItem.name"
                    v-for="(currencyItem, currencyIndex) in currencyList" :key="currencyIndex"
                    @click="handleSelectCurrency(currencyItem)">
                    <template v-slot:prepend>
                        <img :src="currencyItem.icon" width="26" />
                    </template>
                    <v-list-item-title class="ml-2">{{ currencyItem.name }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <v-row class="mt-6 ml-16 deposit-text">
            {{ t('deposit_dialog.choose_payment_method') }}
        </v-row>
        <v-menu offset="4" class="mt-1">
            <template v-slot:activator="{ props }">
                <v-card color="#1C1929" theme="dark" class="mx-12 mt-4 deposit-card-height">
                    <v-list-item v-bind="props" class="payment-item deposit-card-height" value="payment dropdown"
                        append-icon="mdi-chevron-down">
                        <template v-slot:prepend>
                            <img :src="selectedPaymentItem.icon" />
                        </template>
                        <v-list-item-title class="ml-2">{{ selectedPaymentItem.name }}</v-list-item-title>
                    </v-list-item>
                </v-card>
            </template>
            <v-list theme="dark" bg-color="#181522">
                <v-row class="payment-width-370">
                    <v-col cols="6" v-for="(paymentItem, paymentIndex) in paymentList" :key="paymentIndex">
                        <v-card color="#1C1929" theme="dark" class="deposit-card-height text-center">
                            <v-list-item class="payment-select-item pa-2" :value="paymentItem.name"
                                @click="handleSelectPayment(paymentItem)">
                                <img :src="paymentItem.icon" />
                                <v-list-item-title>{{ paymentItem.name }}</v-list-item-title>
                                <v-list-item-title>{{ paymentItem.description }}</v-list-item-title>
                            </v-list-item>
                        </v-card>
                    </v-col>
                </v-row>
            </v-list>
        </v-menu>
        <v-btn class="close-button" icon="true" @click="setDepositDialogToggle(false)">
            <v-icon color="#7782AA">
                mdi-close
            </v-icon>
        </v-btn>
        <v-row class="mt-6 ml-16 deposit-text">
            {{ t('deposit_dialog.deposit_amount') }}
        </v-row>
        <v-row class="mt-2 mx-10" style="width: 400px">
            <v-col cols="4" class="py-1 px-2" v-for="(depositAmountItem, depositAmountIndex) in depositAmountList"
                :key="depositAmountIndex">
                <v-btn class="my-1 text-none" height="46px"
                    :class="[depositAmountIndex == 0 ? 'deposit-amout-btn-black' : 'deposit-amout-btn-white']"
                    @click="handleDepositAmount(depositAmountItem)">
                    {{ depositAmountUnit }} {{ depositAmountItem }}
                    <div class="deposit-amount-area"></div>
                    <div class="deposit-amount-rate-text">{{ depositRate }}</div>
                </v-btn>
            </v-col>
        </v-row>
        <v-row class="mt-4 relative">
            <v-text-field :label="`${t('deposit_dialog.amount')}(${selectedCurrencyItem.name})`"
                class="form-textfield dark-textfield mx-14" variant="solo" density="comfortable" color="#7782AA"
                v-model="depositAmount" :onfocus="handleAmountInputFocus" :onblur="handleAmountInputBlur"
                @input="handleAmountInputChange" />
            <ValidationBox v-if="isShowAmountValidaton" />
        </v-row>
        <v-row class="mt-2 mx-10">
            <v-col cols="1" class="pl-1">
                <v-checkbox hide-details icon class="agreement-checkbox" />
            </v-col>
        </v-row>
    </div>
</template>

<style lang="scss">
// container
.deposit-container {
    background-color: #211F31;
    border-radius: 16px !important;
    height: 780px;

    .header {
        text-align: center;
        background: #29253C;
        border-radius: 16px 16px 0px 0px;
        height: 80px;
    }

    // close modal button
    .close-button {
        box-shadow: none !important;
        background-color: transparent !important;
        position: absolute !important;
        top: 5px;
        right: 5px;
    }

    // deposit and withdraw toggle switch
    .deposit-toggle {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        label {
            width: 230px;
            height: 40px;
            position: relative;
            display: block;
            background: #211F31;
            border-radius: 20px !important;
            box-shadow: inset 0px 5px 15px rgba(0, 0, 0, 0.4), inset 0px -5px 15px rgba(255, 255, 255, 0.4);
            cursor: pointer;
            transition: 0.3s;

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

            .deposit {
                left: 14px;
                transition: 0.3s;
                color: black;

                img {
                    width: 20px;
                    height: 24px;
                    margin-right: 4px;
                }
            }

            .withdraw {
                left: 132px;
                transition: 0.3s;
                color: #7782AA;

                img {
                    width: 20px;
                    margin-right: 4px;
                }
            }
        }

        label:after {
            content: "";
            width: 100px;
            height: 36px;
            position: absolute;
            top: 2px;
            left: 3px;
            background: #32CFEC;
            border-radius: 18px;
            box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
            transition: 0.3s;
        }

        input {
            width: 0;
            height: 0;
            visibility: hidden;
            position: absolute;
        }

        input:checked+label:after {
            left: 226px;
            transform: translateX(-100%);
        }

        label:active:after {
            width: 100px;
        }

        input:checked+label .deposit {
            color: #7782AA
        }

        input:checked+label .withdraw {
            color: black
        }

    }

    .deposit-text {
        font-weight: 400;
        font-size: 14px;
        color: #7782AA;
    }

    .deposit-card-height {
        height: 48px;
    }

    .v-list-item__prepend {
        padding-left: 20px;
    }

    .currency-item {
        font-weight: 400;
        font-size: 14px;
        color: #FFFFFF;
    }

    .payment-item {
        font-weight: 400;
        font-size: 14px;
        color: #FFFFFF;
    }

    .deposit-amout-btn-black {
        background: #32CFEC;
        font-weight: 700;
        font-size: 12px;
        border-radius: 4px;
        box-shadow: 0px 3px 4px 1px rgba(0, 0, 0, 0.21) !important;
        width: 100% !important;
    }

    .deposit-amout-btn-white {
        background: #353652;
        font-weight: 700;
        font-size: 12px;
        border-radius: 4px;
        color: #FFFFFF;
        box-shadow: 0px 3px 4px 1px rgba(0, 0, 0, 0.21) !important;
        width: 100% !important;
    }

    .deposit-amount-area {
        width: 40px;
        position: absolute;
        top: 0;
        right: 0;
        background: #F97001;
        border-radius: 0px 4px;
        height: 15px;
    }

    .deposit-amount-rate-text {
        position: absolute;
        top: -3px;
        right: 2px;
        font-size: 8px;
        color: #FFFFFF;
    }

    .dark-textfield .v-field__field {
        background-color: #1C1929 !important;
    }

    .v-field--variant-solo {
        background: transparent !important;
    }

    // agreement
    .agreement-text {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        margin-top: 13px;
        color: #7782AA;
    }

    .agreement-checkbox {
        i.v-icon {
            color: #211F31;
            background-color: #01983A;
            width: 16px;
            height: 16px;
            border-radius: 4px;
            margin-top: 4px;
        }

        i.mdi-checkbox-blank-outline {
            background-color: #211F31;
            box-shadow: inset 1px 0px 2px 1px rgba(0, 0, 0, 0.11);
            border-radius: 4px;
        }
    }
}

.payment-select-item {
    font-weight: 300;
    font-size: 10px;
    color: #7782AA;
}

.payment-width-370 {
    width: 370px !important;
    margin: auto;
    height: 440px !important;
}
</style>