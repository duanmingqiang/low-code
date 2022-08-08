<template>
  <div>
    <div 
      v-for="item in componentList"
      :key="item.name" 
      class="component-list"
      draggable="true"
      @dragstart="dragStart($event, item)"
      @drag="drag"
      @dragend="dragEnd"
    >
      <span>
        {{ item.name }}
      </span>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const componentList = ref([])
const temp = require.context('@/default-components/', true, /\.json$/)
temp.keys().forEach(key => {
  const component = temp(key)
  componentList.value.push(component)
})

const store = useStore()
// 当鼠标点中元素并且开始移动时，就会触发dragstart事件（类比mousedown） 
// 拖拽过程中会持续不断地触发drag事件（类比mousemove） 
// 松开鼠标取消拖拽时就会触发dragend事件（类比mouseup）
const  dragStart=(e, item) => {
    // console.log("dragStart");
    // e.dataTransfer.setData("text/plain", e.target.id);
    store.commit('SET_CURRENT_DRAG_COMPONENT', item)
}
const   drag=() => {
    // console.log("drag");
}
const   dragEnd = ()=> {
    window.sessionStorage.removeItem("elementType");
    store.commit('SET_CURRENT_DRAG_COMPONENT', {})
    // console.log("dragEnd");
}

</script>

<style >
.component-list {
  display: inline-block;
  box-sizing: border-box;
  font-size: 12px;
  /* width: 50px; */
  height: 24px;
  line-height: 24px;
  margin: 3px;
  padding: 0 7px;
  border: 1px solid #ccc;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
}
</style>