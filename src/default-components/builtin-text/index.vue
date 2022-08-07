<template>
  <span style="min-width: 10px;">
    {{ modelValue || '请输入文本' }}
  </span>
</template>
<script>
export default {
    props: {
        modelValue: {
            type: String,
            default: '文本'
        }
    },
    data() {
        return {}
    }
}
</script>