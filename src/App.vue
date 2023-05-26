<template>
  <Header />
  <router-view />
</template>
<script setup lang="ts">
import Header from '@/components/layout/header.vue'
</script>
<style>
.modal {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.6);
}

.modal-opacitity-show {
  animation: modalOpacityAnimationShow 0.3s;
}

.modal-opacitity-hide {
  animation: modalOpacityAnimationHide 0.3s;
}

.modal-body-show {
  animation: modalBodyScaleShow 0.3s;
}

.modal-body-hide {
  animation: modalBodyScaleHide 0.3s;
}

@keyframes modalOpacityAnimationShow {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes modalOpacityAnimationHide {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes modalBodyScaleShow {
  from {
    scale: 0;
  }
  to {
    scale: 1;
  }
}

@keyframes modalBodyScaleHide {
  from {
    scale: 1;
  }
  to {
    scale: 0;
  }
}
</style>
