<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="内置组件" name="defaultComponent">
      <component-list />
    </el-tab-pane>
    <el-tab-pane label="自定义组件" name="customComponent">
      <span>ToDo</span>>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import ComponentList from './ComponentList.vue'
export default {
    components: {ComponentList},
    setup() {
        const handleClick = () => {

        }
        return {
            handleClick
        }
    },
    data() {
        return {
            activeName: 'defaultComponent'
        }
    },
}
</script>
<style scoped lang="less">

</style>