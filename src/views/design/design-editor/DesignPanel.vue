<template>
  <div 
    style="width: 100%; height: 100%;border: 1px solid red;"
    @dragenter="dragEnter"
    @dragover="dragOver"
    @dragleave="dragLeave"
    @drop="drop" 
  >
    <editor-render :render-data="editorData" />
  </div>
</template>
<script setup>

import { useStore } from 'vuex';
const store = useStore()

import {ref} from 'vue'
import EditorRender from '../render/Render.vue'

const editorData = ref([])
// 拖拽元素到目标上，就会触发dragenter事件（类比mouseover） 
const dragEnter = function (event) {
    event.preventDefault();
    event.stopPropagation();
}
// 当拖动元素在目标元素中，就会持续触发dragover事件 
const dragOver = function (event) {
    event.preventDefault();
    event.stopPropagation();
}
// 离开目标元素，触发dragleave事件（类比mouseout） 
const dragLeave = function (event) {
    event.preventDefault();
    event.stopPropagation();
}
// 若拖放元素到了目标元素中（在目标元素中松开鼠标），就会触发drop事件而不会触发dragleave事件
const drop = function (event) {
    const currentComponent = JSON.parse(JSON.stringify(store.state.currentDragComponent))
    // 解析模块的props配置字段
    const props = currentComponent.props || {}
    // 解析模块的slots配置
    // const slots = {}
    // currentComponent.slots && Object.keys(currentComponent.slots).forEach(item => {
    //   if (currentComponent.slots[item].slotName) {
    //     slots[item] = currentComponent.slots[item].slotName
    //   }
    // })
    const slots = currentComponent.slots || {}
    // 生成唯一ID
    const componentId = (new Date()).getTime().toString()
    editorData.value = [...editorData.value, {
        type: currentComponent['component-name'],
        props: {
          // ...options,
          id: componentId,
          ...props
        },
        slots
        // slots: currentComponent.slots || {}
    }]  
    event.preventDefault();
    event.stopPropagation();
}
</script>