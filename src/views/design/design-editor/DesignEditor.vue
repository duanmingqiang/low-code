<template>
  <el-tabs v-model="activeName" @tab-click="handleClick" tab-position="bottom" type="border-card" class="design-center-container">
    <el-tab-pane label="编辑区域" name="editor">
      <design-panel />
    </el-tab-pane>
    <el-tab-pane label="数据格式" name="jsonSchema">
      <json-viewer :value="editorData" :expand-depth="5" boxed :show-array-index="false" />
    </el-tab-pane>
  </el-tabs>
</template>
<script setup>


import {ref} from 'vue'
import JsonViewer from 'vue-json-viewer'
import DesignPanel from './DesignPanel.vue'
const editorData = ref({})
const activeName = ref('editor')
const handleClick = (activeName) => {
  activeName.value = activeName
}
</script>
<style lang="less" scoped>
.design-center-container {
  width: 100%;
  height: 100%;
  border: 1px solid #eee;
  /deep/ .el-tabs__content {
    height: calc(100% - 60px);
    .jv-container,.el-tab-pane {
      height: 100%;
    }
  }
}
</style>