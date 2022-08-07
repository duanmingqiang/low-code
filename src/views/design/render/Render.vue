<script>
import { h, resolveComponent } from "vue";
import { useStore } from "vuex";
import CommponentWrap from '../components/CommponentWrap.vue'
export default {
  props: {
    renderData: {
      type: Array,
      default: () => []
    } 
  },
  setup() {
    const store = useStore()
    const handleNodeClick = (event, item) => {

      store.commit('SET_ACTIVE_COMPONENT', item)
    }
    const getSlots = (slotoptions) => {
      const slots = {}
      Object.keys(slotoptions).forEach(item => {
        const componentId = (new Date()).getTime().toString()
        slots[item] = () => h(resolveComponent(slotoptions[item]), {id: componentId})
      })
      if (Object.keys(slots).length) {
        return slots
      }
      return null
    }
    const myResolveComponent = (data) => {
      return data.map((item) => {
        const props =  {}
        Object.keys(item.props ||  {}).forEach(key => {
          if (key === 'id') { return }

          props[key] = item.props[key]['value']

          if (key === 'modelValue') {
            props['onUpdate:modelValue'] = (value) => {
              // props[key] = value
              item.props[key]['value'] = value
            }
          }
        })

        const slot = getSlots(item.slots)
        // console.log('slot', slot, props)

        const currentComponent = item
        if (slot) {
          return h(CommponentWrap, {
            currentComponent: currentComponent
          }, {default: () => {
            return h(resolveComponent(item.type), {...props  }, slot); 
          }});
        } else {
          return h(CommponentWrap, {
            currentComponent: currentComponent
          }, {default: () => {
            return h(resolveComponent(item.type), {...props  });
          }});
        }
      });
    }
    return {
      myResolveComponent,
      handleNodeClick
    }
  },
  watch: {
    renderData: {
      immediate: true,
      handler() {
        // console.log('renderData', this.renderData)
      }
    }
  },
  render() {
    const elementList = this.myResolveComponent(this.renderData)
    // console.log('renderComponent', elementList)
    return h("div", { }, [...elementList]);
  }
}
</script>