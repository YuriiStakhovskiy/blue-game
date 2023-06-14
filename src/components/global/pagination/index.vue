<script lang="ts" setup>
import { ref } from 'vue';

const page = ref(2);
</script>
<template>
    <v-pagination v-model="page" :length="4"></v-pagination>
</template>
<style lang="scss">
.v-pagination__prev {
    .v-btn {
        width: 32px !important;
        height: 32px !important;
        background: #353652 !important;
        box-shadow: 0px 3px 4px 1px rgba(0, 0, 0, 0.21) !important;
        border-radius: 6px !important;
        color: #FFFFFF;
    }
}

.v-pagination__next {
    .v-btn {
        width: 32px !important;
        height: 32px !important;
        background: #353652 !important;
        box-shadow: 0px 3px 4px 1px rgba(0, 0, 0, 0.21) !important;
        border-radius: 6px !important;
        color: #FFFFFF;
    }
}

.v-pagination__item {
    .v-btn {
        width: 32px !important;
        height: 32px !important;
        background: #353652 !important;
        box-shadow: 0px 3px 4px 1px rgba(0, 0, 0, 0.21) !important;
        border-radius: 6px !important;
        font-weight: 600;
        font-size: 16px;
    }

}

.v-pagination__item--is-active {
    .v-btn {
        width: 32px !important;
        height: 32px !important;
        background: #32CFEC !important;
        box-shadow: 0px 3px 4px 1px rgba(0, 0, 0, 0.21) !important;
        border-radius: 6px !important;
        font-weight: 600;
        font-size: 16px;
    }

}
</style>