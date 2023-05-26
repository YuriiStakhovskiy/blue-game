<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" @select="handleSelect">
    <el-menu-item index="0">LOGO</el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1">{{ t('header.signup') }}</el-menu-item>
    <el-menu-item index="2">{{ t('header.signin') }}</el-menu-item>
    <el-menu-item index="3">{{ t('header.signout') }}</el-menu-item>
    <!-- <el-sub-menu index="4">
      <template #title>
        <el-icon><location /></el-icon>
      </template>
      <el-menu-item index="4-1">English</el-menu-item>
      <el-menu-item index="4-2">简体中文</el-menu-item>
    </el-sub-menu> -->
  </el-menu>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { Location } from '@element-plus/icons-vue'
import { setLang } from '@/i18n'
import { useI18n } from 'vue-i18n'
import { authStore } from '@/stores/auth'
const { t } = useI18n()
const { setIndex } = authStore()

const activeIndex = ref('0')

const handleSelect = (key: string, keyPath: string[]) => {
  switch (key) {
    case '4-1':
      setLang('en')
      break
    case '4-2':
      setLang('cn')
      break
    default:
      setIndex(key)
  }
}
</script>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>
