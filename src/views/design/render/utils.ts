/* {
    "type": "el-input",
    "props": {
        "id": "1659969892885",
        "modelValue": {
            "name": "输入框值",
            "type": "string",
            "value": "1111111"
        },
        "placeholder": {
            "name": "占位符",
            "type": "string",
            "value": "1111111"
        },
        "disabled": {
            "name": "是否禁用",
            "type": "boolean",
            "value": false
        },
        "clearable": {
            "name": "是否一键清空",
            "type": "boolean",
            "value": false
        }
    },
    "slots": {}
}
*/

// import { h, resolveComponent, defineComponent } from "vue";
// import CommponentWrap from '../components/CommponentWrap.vue'
// export function _resolveComponent(renderData) {
//     return renderData.map((item) => {
//         return resolveVnode(item)
//     })
// }

// export function resolveVnode(nodeData) {

//     // 组件名称
//     const componentType = nodeData.type
//     // props处理
//     const props = {}
//     // 排除ID类属性
//     nodeData.props && Object.keys(nodeData.props).filter(key => key !== 'id').forEach(key => {
//         props[key] = nodeData.props[key].value
//         // v-model类型特殊处理
//         if (key === 'modelValue') {
//             props['onUpdate:modelValue'] = (value) => { props[key] = value }
//         }
//     })
//     // 组件插槽处理
//     const slots = {}

//     nodeData.slots && Object.keys(nodeData.slots).forEach(slotName => {
//         const temp = _resolveComponent(nodeData.slots[slotName].slotList || [])
//         slots[slotName] = () => temp
//     })
    
//     const currentComponent = nodeData
//     return h(CommponentWrap, {
//         currentComponent: currentComponent
//     }, {
//             default: () => {
//                 return h(resolveComponent(componentType), {...props}, slots)
//             }
//         }
//     )
// }
// "slots": {
//     "default": {
//         "name": "默认插槽",
//         "slotName": "builtin-text"
//     }
// }