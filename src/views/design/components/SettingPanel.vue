<template>
  hello world
  {{ data.type }}
</template>
<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
// const instance = ref(null)
const store = useStore()
const data = computed(() => {
  if (store.state.activeComponent && store.state.activeComponent.props) {
    return store.state.activeComponent
  }
  return []
})
</script>