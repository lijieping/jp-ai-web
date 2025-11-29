<!-- 纵向布局作为基础布局 -->
<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useSafeArea } from '@/hooks/useSafeArea';
import { useWindowWidthObserver } from '@/hooks/useWindowWidthObserver';
import Header from '@/layouts/components/Header/index.vue';
import Main from '@/layouts/components/Main/index.vue';
import { useDesignStore } from '@/stores';

const designStore = useDesignStore();
const route = useRoute();

/* 预留侧边栏，各个模块自己实现” */
import { defineAsyncComponent } from 'vue'

const sidebarComponent = computed(() => {
  const loader = route.meta?.sidebarComponent as (() => Promise<any>) | undefined
  return loader ? defineAsyncComponent(loader) : null
})

const isCollapse = computed(() => designStore.isCollapse);

/* 是否移入了安全区 */
useSafeArea({
  direction: 'left',
  size: 50,
  onChange(isInSafeArea) {
    // 设置悬停为 true
    designStore.isSafeAreaHover = isInSafeArea;
  },
  enabled: isCollapse, // 折叠才开启监听
});

/** 监听窗口大小变化，折叠侧边栏 */
useWindowWidthObserver();
</script>

<template>
  <el-container class="layout-container">    
    <!-- 预留侧边栏，各模块自己实现 -->
    <el-aside v-if="sidebarComponent">
      <component :is="sidebarComponent" />
    </el-aside>
  
    <el-container class="layout-container">
      <!-- header -->
      <el-header class="layout-header">
        <Header />
      </el-header>
      <el-main>
        <!-- 主内容，各模块自己实现 -->
        <Main />
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.layout-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .layout-header {
    padding: 0;
  }
  .layout-main {
    height: 100%;
    padding: 0;
  }
  display: flex;
}
</style>
