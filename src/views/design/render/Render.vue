<script>
import { h, resolveComponent } from "vue";
import CommponentWrap from '../components/CommponentWrap.vue'
export default {
  props: {
    renderData: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    function registerResolveComponent(renderData) {
      return renderData.map((item) => {
        return resolveVnode(item)
      })
    }
    function resolveVnode(nodeData) {
      // 组件名称
      const componentType = nodeData['component-name']
      // props处理
      const props = {}
      // 排除ID类属性
      nodeData.props && Object.keys(nodeData.props).filter(key => key !== 'id').forEach(key => {
        props[key] = nodeData.props[key].value
        // v-model类型特殊处理
        if (key === 'modelValue') {
          props['onUpdate:modelValue'] = (value) => { props[key] = value }
        }
      })
      // 组件插槽处理
      const slots = {}
      nodeData.slots && Object.keys(nodeData.slots).forEach(slotName => {
        console.log('nodeData.slots[slotName].slotList', nodeData.slots[slotName].slotList)
        slots[slotName] = () => registerResolveComponent(nodeData.slots[slotName].slotList || [])
      })

      const currentComponent = nodeData
      return h(CommponentWrap, {
        currentComponent: currentComponent
      }, {
        default: () => {
          return h(resolveComponent(componentType), { ...props }, slots)
        }
      }
      )
    }
    return {
      registerResolveComponent,
      resolveVnode
    }
  },
  render() {
    const elementList = this.registerResolveComponent(this.renderData)
    return h("div", {}, [...elementList]);
  }
}
</script>