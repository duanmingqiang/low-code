<template>
  hello world
  <div class="setting-config-container">
    <template v-for="(configObj, propKey) in activeComponent.props" :key="propKey">
      <component v-if="propKey !== 'id'" :is="getComponentType(configObj)" v-model="activeComponent.props[propKey]" />
    </template>
  </div>
  
</template>
<script>
import BooleanConfig from './components/BooleanConfig.vue'
import StringConfig from './components/StringConfig.vue'
export default {
  components: {
    BooleanConfig, StringConfig
  },
  data() {
    return {}
  },
  computed: {
    activeComponent() {
      if (this.$store.state.activeComponent && this.$store.state.activeComponent.props) {
        return this.$store.state.activeComponent
      }
      return []
    }
  },
  methods: {
    getComponentType  (configObj) {
      if (configObj.type === 'string') {
        return 'string-config'
      } else if (configObj.type === 'boolean') {
        return 'boolean-config'
      }
    }
  }
}
</script>
