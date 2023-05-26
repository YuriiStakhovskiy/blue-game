<script lang="ts" setup>
import { ref, toRefs, computed } from 'vue';

const props = defineProps<{
    images: Array<any>
}>()

const { images } = toRefs(props)
const currentIndex = ref(0);
const currentImg = computed(() => {
    return images.value[Math.abs(currentIndex.value) % images.value.length];
})
const prev = (): void => {
    currentIndex.value -= 1
}
const next = (): void => {
    currentIndex.value += 1
}
</script>

<template>
    <div>
        <div class="avatar-wrapper">
            <img src="@/assets/public/svg/icon_public_left_arrow.svg" class="prev" @click="prev" />
            <transition-group  class="img-slider" name="slide" tag="div">
                <div v-for="i in [currentIndex]" :key="i">
                    <img :src="currentImg" class="avatar" />
                </div>
            </transition-group>
            <img src="@/assets/public/svg/icon_public_right_arrow.svg" class="next" @click="next" />
        </div>
    </div>
</template>
<style scoped>
.avatar-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 45px;
    padding: 0;
    margin-top: 24px;
}


.slide-leave-active,
.slide-enter-active {
  transition: 0.5s;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}

.img-slider{
  overflow: hidden;
  position: relative;
  height: 150px;
  width: 150px;
}

.img-slider img {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right:0;
}

.prev,
.next {
    cursor: pointer;
    transition: 0.7s ease;
}

.avatar {
    width: 150px;
}
</style>