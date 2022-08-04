<script>
import { h, resolveComponent } from "vue";
import { useStore } from "vuex";
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
        slots[item] = () => h(resolveComponent(slotoptions[item]))
      })
      if (Object.keys(slots).length) {
        return slots
      }
      return null
    }
    const myResolveComponent = (data) => {
      return data.map((item) => {
        const props = item.props ||  {}

        const slot = getSlots(item.slots)
        console.log('slot', slot)
        if (slot) {
          return h(resolveComponent(item.type), {...props  }, slot);
        } else {
          return h(resolveComponent(item.type), {...props  });
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
    console.log('renderComponent', elementList)
    return h("div", { }, [...elementList]);
  }
}
</script>