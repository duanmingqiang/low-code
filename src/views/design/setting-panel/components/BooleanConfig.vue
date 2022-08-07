<template>
  <div class="setting-config-list">
    <div class="title">{{ attribute.name }}:</div>
    <div>
      <el-switch v-model="attribute.value" @change="handleChange" />
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