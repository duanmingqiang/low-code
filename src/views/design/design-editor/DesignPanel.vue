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
// 生成组件唯一ID 利用时间戳+随机字母生成，永远不会重复
function createId () {
	let abc=['a','b','c','d','e','f','g','h','i','g','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	let [max,min]=[Math.floor(Math.random()*(10-7+1)+1),Math.floor(Math.random()*(17-10+1)+17)];
	abc=abc.sort(()=>0.4-Math.random()).slice(max,min).slice(0,8).join("");
	var a=new Date().getTime()+abc;
	return a
}
// 若拖放元素到了目标元素中（在目标元素中松开鼠标），就会触发drop事件而不会触发dragleave事件
const drop = function (event) {
    const currentComponent = JSON.parse(JSON.stringify(store.state.currentDragComponent))
    // 解析模块的props配置字段
    const props = currentComponent.props || {}
    // 解析模块的slots配置
    // const slots = {}
    const slots = currentComponent.slots || {}
    currentComponent.slots && Object.keys(currentComponent.slots).forEach(item => {
      currentComponent.slots[item].slotList && currentComponent.slots[item].slotList.forEach(slot => {
        const componentId = createId()
        slot.props.id = componentId
        console.log('slot', slot)
      })
    })
    // 生成唯一ID
    const componentId = createId()
    editorData.value = [...editorData.value, {
        'component-name': currentComponent['component-name'],
        props: {
          id: componentId,
          ...props
        },
        slots
    }]  
    event.preventDefault();
    event.stopPropagation();
}
</script>