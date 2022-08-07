<template>
  <div class="design-header-container">
    <div class="design-page-name">设计页面1</div>
    <div class="opt-btn-container">
      <el-button type="primary" size="small">保存</el-button>
      <el-button type="primary" size="small">预览</el-button>
      <el-button type="primary" size="small">撤销</el-button>
      <el-button type="primary" size="small">发布</el-button>
    </div>
  </div>
</template>

<script>

</script>
<style scoped lang="less">
.design-header-container {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid gray;
}
.design-page-name {
    margin-left: 21px;;
}
.opt-btn-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 21px;
}
</style>