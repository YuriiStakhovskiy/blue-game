<script lang="ts" setup>
import { ref, computed, watch, onMounted } from 'vue';
import moment from 'moment-timezone';
import { appBarStore } from '@/store/appBar';
import { authStore } from "@/store/auth";
import { userStore } from "@/store/user";
import { withdrawStore } from '@/store/withdraw';
import { depositStore } from '@/store/deposit';
import { mailStore } from '@/store/mail';
import { type GetUserInfo } from "@/interface/user";
import { type GetCurrencyItem } from '@/interface/deposit';
import { type GetPaymentItem } from '@/interface/deposit';
import ValidationBox from '@/components/cash/mxn/withdraw/ValidationBox.vue';
import SuccessIcon from '@/components/global/notification/SuccessIcon.vue';
import WarningIcon from '@/components/global/notification/WarningIcon.vue';
import { useI18n } from 'vue-i18n';
import { useDisplay } from 'vuetify';
import { storeToRefs } from 'pinia';
import store from '@/store';
import { useToast } from "vue-toastification";
import { bannerStore } from '@/store/banner';
import icon_public_09 from "@/assets/public/svg/icon_public_09.svg";
import BindingPhone from "./BindingPhone.vue";

const { name, width } = useDisplay();
const { t } = useI18n();
const { setDepositDialogToggle } = appBarStore();
const { setWithdrawDialogToggle } = appBarStore();
const { setMainBlurEffectShow } = appBarStore();
const { setHeaderBlurEffectShow } = appBarStore();
const { setMenuBlurEffectShow } = appBarStore();
const { setCashDialogToggle } = appBarStore();
const { setMailList } = mailStore();
const { dispatchUserWithdrawCfg } = withdrawStore();
const { dispatchUserWithdrawSubmit } = withdrawStore();
const { setDepositWithdrawToggle } = appBarStore();
const { dispatchUserBalance } = userStore();
const { dispatchCurrencyList } = currencyStore();
import router from '@/router';
import { currencyStore } from '@/store/currency';

const selectedCurrencyItem = ref<GetCurrencyItem>({
  icon: new URL("@/assets/public/svg/icon_public_84.svg", import.meta.url).href,
  name: "MXN",
  value: 5.25
})
const selectedPaymentItem = ref<GetPaymentItem>({
  id: "1",
  icon: new URL("@/assets/public/svg/icon_public_74.svg", import.meta.url).href,
  name: "PIX",
  description: "20~150.000 BRL",
  min: 149,
  max: 588.88
})

const currencyTemplateList = [
  {
    icon: new URL("@/assets/public/svg/icon_public_84.svg", import.meta.url).href,
    name: "BRL",
    value: 5.25
  },
  {
    icon: new URL("@/assets/public/svg/icon_public_85.svg", import.meta.url).href,
    name: "PHP",
    value: 0
  },
  {
    icon: new URL("@/assets/public/svg/icon_public_86.svg", import.meta.url).href,
    name: "PEN",
    value: 0
  },
  {
    icon: new URL("@/assets/public/svg/icon_public_87.svg", import.meta.url).href,
    name: "MXN",
    value: 0
  },
  {
    icon: new URL("@/assets/public/svg/icon_public_88.svg", import.meta.url).href,
    name: "CLP",
    value: 0
  },
  {
    icon: new URL("@/assets/public/svg/icon_public_89.svg", import.meta.url).href,
    name: "USD",
    value: 0
  },
  {
    icon: new URL("@/assets/public/svg/icon_public_90.svg", import.meta.url).href,
    name: "COP",
    value: 0
  },
]

const svgIconColor = ref<string>("#12FF76");

const currencyList = ref<Array<GetCurrencyItem>>([])

const paymentList = ref<Array<GetPaymentItem>>([
  {
    id: "1",
    icon: new URL("@/assets/public/svg/icon_public_74.svg", import.meta.url).href,
    name: "PIX_1",
    description: "20~150.000 BRL",
    min: 149,
    max: 588.88
  },
])

const withdrawAmount = ref<string>("")

const availableAmount = ref<number>(0);

const feeRate = ref<number>(0);

const validationText2 = ref<string>("")

const notificationShow = ref<boolean>(false);

const loading = ref<boolean>(false);

const phoneBindingDialog = ref<boolean>(false);

const checkIcon = ref<any>(new URL("@/assets/public/svg/icon_public_18.svg", import.meta.url).href);

const notificationText = ref<string>("");

const isShowAmountValidation = ref<boolean>(false);

const isDepositBtnReady = ref<boolean>(false);

const currencyMenuShow = ref<boolean>(false);
const paymentMenuShow = ref<boolean>(false);

const withdrawCheck = ref<boolean>(false);

const selectedCurrencyUnit = ref<string>("R$")

const userInfo = computed((): GetUserInfo => {
  const { getUserInfo } = storeToRefs(authStore());
  return getUserInfo.value;
})

const userBalance = computed(() => {
  const { getUserBalance } = storeToRefs(userStore());
  return getUserBalance.value
})

const pixInfo = computed(() => {
  const { getPixInfo } = storeToRefs(depositStore());
  return getPixInfo.value
})

const withdrawConfig = computed(() => {
  const { getWithdrawCfg } = storeToRefs(withdrawStore());
  return getWithdrawCfg.value
})

const depositBlurEffectShow = computed(() => {
  const { getDepositBlurEffectShow } = storeToRefs(appBarStore());
  return getDepositBlurEffectShow.value
})

const filterByKeyArray = (arr: any, key: any, valueArr: any) => {
  return arr.filter((obj: any) => {
    const objValues = obj[key];
    return valueArr.every((value: any) => objValues.includes(value));
  });
};

watch(userBalance, (value) => {
  availableAmount.value = value["availabe_balance"];
})

watch(withdrawConfig, (newValue) => {
  paymentList.value = [];
  newValue["cfg"][selectedCurrencyItem.value.name].map((item: any) => {
    paymentList.value.push({
      id: item.channel_id,
      icon: new URL("@/assets/public/svg/icon_public_74.svg", import.meta.url).href,
      name: item.channel_name,
      description: item.min + "~" + item.max + " " + item.channel_type,
      min: item.min,
      max: item.max
    })
  })
  const keyArray = Object.keys(newValue["cfg"]);
  const filteredObjects = filterByKeyArray(currencyTemplateList, 'name', keyArray);
  currencyList.value = filteredObjects;
  selectedPaymentItem.value = paymentList.value[0];
  feeRate.value = withdrawConfig.value["fee"]["rate"];
}, { deep: true });

const handleSelectCurrency = (item: GetCurrencyItem) => {
  selectedCurrencyItem.value = item;
  paymentList.value = [];
  withdrawConfig.value["cfg"][selectedCurrencyItem.value.name]?.map((item: any) => {
    paymentList.value.push({
      id: item.channel_id,
      icon: new URL("@/assets/public/svg/icon_public_74.svg", import.meta.url).href,
      name: item.channel_name,
      description: item.min + "~" + item.max + " " + item.channel_type,
      min: item.min,
      max: item.max
    })
  })
  selectedPaymentItem.value = paymentList.value[0];
  switch (selectedCurrencyItem.value.name) {
    case "BRL":
      selectedCurrencyUnit.value = 'R$';
      break;
    case "MXN":
      selectedCurrencyUnit.value = 'MXN';
      break;
  }
}

const handleSelectPayment = (item: GetPaymentItem) => {
  selectedPaymentItem.value = item;
}

const validateAmount = (): boolean => {
  return Number(withdrawAmount.value) >= 0 && Number(withdrawAmount.value) <= Number(userBalance.value.availabe_balance);
}

const handleAmountInputFocus = (): void => {
  if (validateAmount()) {
    isShowAmountValidation.value = false;
  } else {
    isShowAmountValidation.value = true;
  }
}

const handleAmountInputChange = (): void => {
  if (validateAmount()) {
    isShowAmountValidation.value = false;
  } else {
    isShowAmountValidation.value = true;
  }
}

const handleAmountInputBlur = (): void => {
  // if (validateAmount()) {
  isShowAmountValidation.value = false;
  // } else {
  //     isShowAmountValidation.value = true;
  // }
}

const success = computed(() => {
  const { getSuccess } = storeToRefs(withdrawStore());
  return getSuccess.value;
})

const errMessage = computed(() => {
  const { getErrMessage } = storeToRefs(withdrawStore());
  return getErrMessage.value
})

const depositConfig = computed(() => {
  const { getDepositCfg } = storeToRefs(depositStore());
  return getDepositCfg.value
})



const svgTransform = (el: any, color: string) => {
  el.children[0].setAttribute("fill", color);
  return el;
};

const handleWithdrawSubmit = async () => {
  if (Number(withdrawAmount.value) == 0 || Number(userBalance.value.availabe_balance) == 0) {
    const toast = useToast();
    toast.success('Your current cash withdrawal amount is insufficient', {
      timeout: 3000,
      closeOnClick: false,
      pauseOnFocusLoss: false,
      pauseOnHover: false,
      draggable: false,
      showCloseButtonOnHover: false,
      hideProgressBar: true,
      closeButton: "button",
      icon: WarningIcon,
      rtl: false,
    });
    return;
  }
  if (!userInfo.value.phone_confirmd) {
    phoneBindingDialog.value = true;
    return;
  }
  loading.value = true
  let formData = {} as any;
  if (depositConfig.value.deposit_user_switch) {
    formData.id_number = pixInfo.value.id
    formData.first_name = pixInfo.value.first_name
    formData.last_name = pixInfo.value.last_name
  }
  formData.channels_id = selectedPaymentItem.value.id;
  formData.amount = Number(withdrawAmount.value)
  await dispatchUserWithdrawSubmit(formData)
  loading.value = false;
  if (success.value) {
    const toast = useToast();
    toast.success("Successful withdrawal of funds", {
      timeout: 3000,
      closeOnClick: false,
      pauseOnFocusLoss: false,
      pauseOnHover: false,
      draggable: false,
      showCloseButtonOnHover: false,
      hideProgressBar: true,
      closeButton: "button",
      icon: SuccessIcon,
      rtl: false,
    });
    let mailItem = {
      id: 5,
      offset: 0,
      icon: new URL("@/assets/public/svg/icon_public_16.svg", import.meta.url).href,
      mail_content_1: {
        color: "text-color-gray",
        content: "Withdrawal Amount"
      },
      mail_content_2: {
        color: "money-color-white",
        content: "$" + Number(withdrawAmount.value).toFixed(2)
      },
      mail_rail_1: {
        color: "text-color-gray",
        content: moment().tz("Asia/Hong_Kong").format("YYYY/MM/DD HH:mm:ss")
      },
      mail_rail_2: {
        color: "text-color-yellow",
        content: "ln processing..."
      }
    }
    setMailList(mailItem);
    setWithdrawDialogToggle(false);
    setCashDialogToggle(false);
    setMainBlurEffectShow(false);
    setHeaderBlurEffectShow(false);
    setMenuBlurEffectShow(false);
    router.push({ name: "Dashboard" })
  } else {
    const toast = useToast();
    toast.success(errMessage.value, {
      timeout: 3000,
      closeOnClick: false,
      pauseOnFocusLoss: false,
      pauseOnHover: false,
      draggable: false,
      showCloseButtonOnHover: false,
      hideProgressBar: true,
      closeButton: "button",
      icon: WarningIcon,
      rtl: false,
    });
  }
}

watch(withdrawAmount, (newValue) => {
  if (validateAmount()) {
    isDepositBtnReady.value = true;
  } else {
    isDepositBtnReady.value = false;
  }
  isShowAmountValidation.value = !validateAmount();
})

watch(currencyMenuShow, (value) => {
  // if (currencyMenuShow.value && currencyList.value.length < 2) {
  //   currencyMenuShow.value = false
  // }
})

onMounted(async () => {
  setDepositWithdrawToggle(false);
  await dispatchUserWithdrawCfg();
  await dispatchUserBalance();
  await dispatchCurrencyList();
  switch (selectedCurrencyItem.value.name) {
    case "BRL":
      selectedCurrencyUnit.value = 'R$';
      break;
    case "MXN":
      selectedCurrencyUnit.value = 'MXN';
      break;
  }
})
</script>

<template>
  <v-dialog
    v-model="phoneBindingDialog"
    class="m-phone-binding-dialog"
    :width="''"
    :fullscreen="true"
    :scrim="true"
    :transition="'dialog-top-transition'"
    @click:outside="phoneBindingDialog = false"
  >
    <BindingPhone />
  </v-dialog>
  <div
    class="mobile-withdraw-container"
    :class="depositBlurEffectShow || phoneBindingDialog ? 'deposit-bg-blur' : ''"
  >
    <v-row class="mt-6 mx-8 text-500-10 white align-center">
      {{ t("withdraw_dialog.withdraw_amount") }}
      {{ selectedCurrencyUnit }}
      {{ availableAmount }}
      <img
        src="@/assets/public/svg/icon_public_16.svg"
        style="margin-left: auto"
        width="16"
      />
    </v-row>
    <v-row class="mt-2 mx-2 relative">
      <v-text-field
        :label="`${t('withdraw_dialog.amount')}(${selectedCurrencyItem.name})`"
        class="form-textfield dark-textfield m-withdraw-amount-text mb-0"
        variant="solo"
        density="comfortable"
        color="#7782AA"
        type="number"
        v-model="withdrawAmount"
        :onfocus="handleAmountInputFocus"
        :onblur="handleAmountInputBlur"
        @input="handleAmountInputChange"
      />
    </v-row>
    <div class="mt-3 mx-8 text-400-12 gray d-flex align-center">
      {{ t("withdraw_dialog.text_5") }}
      <span class="text-700-12" style="margin-left: auto">
        0&nbsp;{{ selectedCurrencyItem.name }}
      </span>
    </div>
    <div class="mt-2 mx-8 text-400-12 gray d-flex align-center">
      {{ t("withdraw_dialog.text_6") }}
      <span class="text-700-12" style="margin-left: auto">
        0&nbsp;{{ selectedCurrencyItem.name }}
      </span>
    </div>
    <div class="mt-2 mx-8 text-400-12 gray d-flex align-center">
      {{ t("withdraw_dialog.text_7") }}
      <span class="text-700-12" style="margin-left: auto">
        0&nbsp;{{ selectedCurrencyItem.name }}
      </span>
    </div>
    <div class="mx-4 mt-2">
      <img src="@/assets/public/image/bg_public_02_01.png" style="width: 100%" />
    </div>
    <v-row class="mt-2 mx-8 text-400-12 gray">
      {{ t("withdraw_dialog.withdraw_payment_method") }}
    </v-row>
    <v-menu offset="4" class="mt-1" v-model:model-value="paymentMenuShow">
      <template v-slot:activator="{ props }">
        <v-card
          color="#15161C"
          theme="dark"
          class="mx-4 mt-4 m-deposit-card-height"
          style="border-radius: 8px"
        >
          <v-list-item
            v-bind="props"
            class="payment-item m-deposit-card-height m-withdraw-currency-item"
            value="payment dropdown"
            :append-icon="paymentMenuShow ? 'mdi-chevron-down' : 'mdi-chevron-right'"
          >
            <template v-slot:prepend>
              <img :src="selectedPaymentItem.icon" width="52" />
            </template>
            <v-list-item-title class="ml-2 text-400-12 d-flex align-center">
              {{ selectedPaymentItem.name }}
              <inline-svg
                :src="icon_public_09"
                width="20"
                height="20"
                :transform-source="(el: any) => svgTransform(el, '#12FF76')"
                style="margin-left: auto"
              >
              </inline-svg>
            </v-list-item-title>
          </v-list-item>
        </v-card>
      </template>
      <v-list theme="dark" bg-color="#15161C">
        <v-row class="m-payment-width-370 px-2">
          <v-col
            cols="12"
            v-for="(paymentItem, paymentIndex) in paymentList"
            :key="paymentIndex"
            class="pa-1"
          >
            <v-card
              color="#23262F"
              theme="dark"
              class="text-center"
              :class="selectedPaymentItem.name == paymentItem.name ? 'border-active' : ''"
              style="border-radius: 8px; box-shadow: none"
            >
              <v-list-item
                class="payment-select-item pa-2"
                :value="paymentItem.name"
                @click="handleSelectPayment(paymentItem)"
              >
                <v-row class="align-center">
                  <v-col cols="4" class="text-center">
                    <img :src="paymentItem.icon" width="62" />
                  </v-col>
                  <v-col cols="5" class="text-left">
                    <v-list-item-title class="text-400-12">
                      {{ paymentItem.name }}
                    </v-list-item-title>
                    <v-list-item-title class="text-400-12">
                      {{ paymentItem.description }}
                    </v-list-item-title>
                  </v-col>
                  <v-col cols="3">
                    <inline-svg
                      :src="icon_public_09"
                      width="20"
                      height="20"
                      :transform-source="(el: any) => svgTransform(el, '#12FF76')"
                    >
                    </inline-svg>
                    <img src="@/assets/public/svg/icon_public_109.svg" class="ml-2" />
                  </v-col>
                </v-row>
              </v-list-item>
            </v-card>
          </v-col>
        </v-row>
      </v-list>
    </v-menu>
    <div class="mx-4">
      <v-checkbox
        hide-details
        icon
        class="deposit-checkbox"
        v-model="withdrawCheck"
        :label="t('withdraw_dialog.text_8')"
      />
    </div>
    <v-row class="mt-0 mx-14 text-400-10 gray">
      {{ t("withdraw_dialog.text_1") }}
    </v-row>
    <v-row class="mt-4 mx-14 text-400-10 gray">
      {{ t("withdraw_dialog.text_2") }}
    </v-row>
    <v-row class="mt-4 mx-14 text-400-10 gray">
      {{ t("withdraw_dialog.text_3") }}
    </v-row>
    <v-row class="mt-4 mx-14 text-400-10 gray">
      {{ t("withdraw_dialog.text_4") }}
    </v-row>
    <!-- <v-row
      class="m-deposit-footer-text-position text-600-10 white justify-center mx-2 mt-10"
    >
      {{ feeRate * 100 }} {{ t("withdraw_dialog.other_text") }}{{ selectedCurrencyUnit }}
      {{ Number(withdrawAmount) * (1 - Number(feeRate)) }}
      {{ t("withdraw_dialog.other_text_1") }}
    </v-row> -->
    <div class="m-withdraw-btn-position">
      <v-btn
        class="ma-3 m-deposit-btn"
        :class="isDepositBtnReady ? 'm-deposit-btn-ready' : ''"
        width="-webkit-fill-available"
        height="48px"
        :loading="loading"
        :onclick="handleWithdrawSubmit"
      >
        {{ t("withdraw_dialog.withdraw_btn_text") }}
      </v-btn>
      <div class="d-flex align-center justify-center mt-2">
        <img src="@/assets/public/svg/icon_public_108.svg" />
        <span class="text-400-12 blue ml-1" style="text-decoration: underline">
          {{ t("withdraw_dialog.text_9") }}
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.m-phone-binding-dialog {
  z-index: 2433 !important;
  margin: 0px !important;
}
.mobile-withdraw-container::-webkit-scrollbar {
  width: 0px;
}

// container
.mobile-withdraw-container {
  .m-withdraw-currency-item {
    .v-list-item__append > .v-icon {
      margin-inline-start: 10px;
    }
  }

  .m-withdraw-btn-position {
    position: absolute;
    bottom: 70px;
    left: 50%;
    transform: translateX(-50%);
    width: 98%;
  }

  .form-textfield div.v-field__field {
    box-shadow: 2px 0px 4px 1px rgba(0, 0, 0, 0.12) inset !important;
  }

  .form-textfield div.v-field--variant-solo,
  .v-field--variant-solo-filled {
    background: transparent;
  }

  background-color: #1d2027;
  height: 100%;
  overflow-y: auto;

  .deposit-card-height {
    height: 48px;
  }

  .v-list-item__prepend {
    padding-left: 20px;
  }

  .currency-item {
    font-weight: 400;
    font-size: 14px;
    color: #ffffff;
  }

  .payment-item {
    font-weight: 400;
    font-size: 14px;
    color: #ffffff;
  }

  .deposit-amout-btn-black {
    background: #009b3a;
    font-weight: 700;
    font-size: 12px;
    border-radius: 4px;
    box-shadow: 0px 3px 4px 1px rgba(0, 0, 0, 0.21) !important;
    width: 100% !important;
  }

  .deposit-amout-btn-white {
    background: #23262f;
    font-weight: 700;
    font-size: 12px;
    border-radius: 4px;
    color: #ffffff;
    box-shadow: 0px 3px 4px 1px rgba(0, 0, 0, 0.21) !important;
    width: 100% !important;
  }

  .deposit-amount-area {
    width: 40px;
    position: absolute;
    top: 0;
    right: 0;
    background: #f97001;
    border-radius: 0px 4px;
    height: 15px;
  }

  .deposit-amount-rate-text {
    position: absolute;
    top: -3px;
    right: 2px;
    font-size: 8px;
    color: #ffffff;
  }

  .dark-textfield .v-field__field {
    background-color: #15161c !important;
  }

  .v-field--variant-solo {
    background: transparent !important;
  }

  .deposit-checkbox {
    .v-label {
      margin-top: 6px;
      color: #7782aa !important;
      font-weight: 400;
      font-size: 12px !important;
      opacity: 1;
    }

    i.v-icon {
      color: #15161c;
      background-color: #01983a;
      width: 16px;
      height: 16px;
      border-radius: 4px;
      margin-top: 4px;
    }

    i.mdi-checkbox-blank-outline {
      background-color: #15161c;
      box-shadow: inset 1px 0px 2px 1px rgba(0, 0, 0, 0.11);
      border-radius: 4px;
    }
  }

  .deposit-other-text {
    font-weight: 600;
    font-size: 12px;
    color: #ffffff;
  }
}

.deposit-text {
  font-weight: 400;
  font-size: 14px;
  color: #7782aa;
}

.withdraw-text {
  font-weight: 400;
  font-size: 14px;
  color: #ffffff;
}

.payment-select-item {
  font-weight: 300;
  font-size: 10px;
  color: #7782aa;
}

.other-text {
  font-weight: 400;
  font-size: 12px;
  color: #7782aa;
}

.m-deposit-btn {
  text-align: center;
  background: #23262f;

  /* Button Shadow */
  box-shadow: 0px 3px 4px 1px rgba(0, 0, 0, 0.21);

  .v-btn__content {
    color: #fff;
    text-align: center;
    font-family: Inter, -apple-system, Framedcn, Helvetica Neue, Condensed, DisplayRegular,
      Helvetica, Arial, PingFang SC, Hiragino Sans GB, WenQuanYi Micro Hei,
      Microsoft Yahei, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
}

.m-deposit-btn-ready {
  background: #009b3a;
  /* Button Shadow */
  box-shadow: 0px 3px 4px 1px rgba(0, 0, 0, 0.21);

  .v-btn__content {
    color: white;
  }
}

.deposit-bg-blur {
  filter: blur(3px);
  -webkit-filter: blur(3px);
}

.v-dialog--persistent .v-dialog__content {
  transform: none !important;
}

.m-withdraw-amount-text {
  transform-origin: top !important;

  .v-field__field {
    .v-label.v-field-label {
      font-family: Inter, -apple-system, Framedcn, Helvetica Neue, Condensed,
        DisplayRegular, Helvetica, Arial, PingFang SC, Hiragino Sans GB,
        WenQuanYi Micro Hei, Microsoft Yahei, sans-serif;
      font-size: 12px !important;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color: #7782aa !important;
      opacity: 1 !important;
    }

    .v-label.v-field-label--floating {
      --v-field-label-scale: 0.88em;
      font-size: 10px !important;
      max-width: 100%;
      color: #7782aa !important;
      opacity: 1 !important;
    }
  }
}
</style>
