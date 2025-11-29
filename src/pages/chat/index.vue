<script setup lang="ts">
import { useRoute } from 'vue-router';
import ChatDefaul from '@/pages/chat/layouts/chatDefaul/index.vue';
import ChatWithId from '@/pages/chat/layouts/chatWithId/index.vue';
import { useDesignStore } from '@/stores/modules/design';
import { computed } from 'vue';

const route = useRoute();
const designStore = useDesignStore();
const sessionId = computed(() => route.params?.id);
const isCollapse = computed(() => designStore.isCollapse);
</script>

<template>
  <div class="chat-container">
    <div class="chat-content" :class="{ 'sidebar-collapsed': isCollapse }">
      <!-- 默认聊天页面 -->
      <ChatDefaul v-if="!sessionId" />
      <!-- 带id的聊天页面 -->
      <ChatWithId v-else />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chat-container {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  overflow-anchor: none;
}

.chat-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: var(--sidebar-default-width, 280px);
  transition: padding-left 0.3s ease;
  box-sizing: border-box;
}

.chat-content.sidebar-collapsed {
  padding-left: 0;
}
</style>
