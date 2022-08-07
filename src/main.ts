import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createApp } from 'vue'
import App from './app.vue'
import BuiltInComponents from './default-components/index'
import { router } from './router'
import store from './store'
import './style/index.less'
const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(store)
app.use(BuiltInComponents)
app.mount('#app')