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
    const myResolveComponent = (data) => {
      return data.map((item) => {
        const props = item.props ||  {}
        return h(resolveComponent(item.type), {...props  }, []);
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
        console.log('renderData', this.renderData)
      }
    }
  },
  render() {
    const elementList = this.myResolveComponent(this.renderData)
    return h("div", { }, [...elementList]);
  }
}
</script>