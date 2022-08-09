<template>
  <span :class="{'active': isActiveComponent}" @click="handleClick">
    <slot></slot>
  </span>
</template>

<script>
export default {
  props: {
    currentComponent: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  // components: {},
  computed: {
      isActiveComponent() {
        try {
          console.log(this.$store.state.activeComponent.props.id, this.currentComponent.props.id)
        } catch (error) {
        }
        //  当前组件为选中组件
        return this.$store.state.activeComponent && (this.$store.state.activeComponent.props.id === this.currentComponent.props.id)
      }   
  },
  methods: {
    handleClick(event) {
      this.$store.commit('SET_ACTIVE_COMPONENT', this.currentComponent)
      event.stopPropagation()
    }
  }
}
</script>
<style lang="less" scoped>
.active {
    outline: 1px solid blue;
    // margin: 0 7px;
}
</style>