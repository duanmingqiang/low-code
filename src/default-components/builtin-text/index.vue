<template>
  {{ textContent }}
</template>
<script>
export default {
    props: {
        textContent: {
            type: String,
            default: '文本'
        }
    },
    data() {
        return {}
    }
}
</script>