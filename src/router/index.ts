import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
    {
        path: '/',
        component:() => import('../views/common/Home.vue'),
    },
    {
        path: '/design',
        component: () => import('../views/design/index.vue'),
    }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export {
    router
};

