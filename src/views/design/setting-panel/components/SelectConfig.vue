<template>
  <div class="setting-config-list">
    <div class="title">{{ attribute.name }}:</div>
    <div>
      <!-- <el-switch v-model="attribute.value" @change="handleChange" /> -->
      <el-select v-model="attribute.value" class="m-2" placeholder="请选择" @change="handleChange">
        <el-option
          v-for="item in attribute.options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        modelValue: {
            type: Object,
            default() {return {}}
        }
    },
    emits: ['update:modelValue'],
    data() {
        return {
            attribute: {}
        }
    },
    watch: {
        modelValue: {
            immediate: true,
            handler(newVal) {
                this.attribute = newVal
                console.log('this.attribute', this.attribute, newVal)
            }
        }
    },
    methods: {
        handleChange() {
            this.$emit('update:modelValue', this.attribute)
        }
    }
}
</script>

<style lang="less" scoped>
</style>