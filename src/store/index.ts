import { createStore } from "vuex";
const store = createStore ({
    state() {
        return {
            renderData: [],
            currentDragComponent: {},
            activeComponent: null
        }
    },
    mutations: {
        SET_CURRENT_DRAG_COMPONENT(state, componentInfo) {
            state.currentDragComponent = componentInfo
        },
        SET_ACTIVE_COMPONENT(state, componentInfo) {
            state.activeComponent = componentInfo
        },
        SET_RENDER_DATA(state, data) {
            state.renderData = data
        }
    }
})

export default store
