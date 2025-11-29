<!-- 知识库页面 -->
<script setup lang="ts">
// 知识库页面组件
</script>

<template>
  <div class="knowledge-base-container">
    <div class="knowledge-base-wrap">
      <div class="knowledge-base-header">
        <h1>知识库</h1>
        <p>管理您的知识文档和收藏内容</p>
      </div>
      
      <div class="knowledge-base-content">
        <div class="knowledge-base-empty">
          <div class="empty-icon">
            <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </div>
          <h3>暂无知识库内容</h3>
          <p>您可以在这里添加、管理和查看您的知识库内容</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.knowledge-base-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-anchor: none;
}

.knowledge-base-wrap {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px; // 与chatWithId保持一致的最大宽度
  height: 100%;
  padding: 24px 16px;
}

.knowledge-base-header {
  margin-bottom: 24px;
  
  h1 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 8px;
  }
  
  p {
    font-size: 14px;
    color: #606266;
  }
}

.knowledge-base-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 0;
  overflow: auto;
}

.knowledge-base-empty {
  text-align: center;
  padding: 48px;
  
  .empty-icon {
    margin-bottom: 16px;
    color: #909399;
  }
  
  h3 {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 8px;
  }
  
  p {
    font-size: 14px;
    color: #909399;
  }
}
</style>