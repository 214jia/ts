import {createRouter,createWebHashHistory,RouteRecordRaw} from 'vue-router'


const routes:Array<RouteRecordRaw> = [
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/home',
        name:'home',
        component:()=>import('../components/layout/index.vue'), //布局页
        children:[
            {
                path:'/index',
                name:'index',
                component:()=>import('../views/index/index.vue'), 
            },
            {
                path:'/monitor',
                name:'monitor',
                component:()=>import('../views/monitor/index.vue'), 
            },
            {
                path:'/order',
                name:'order',
                component:()=>import('../views/order/index.vue'), 
            },
            {
                path:'/census',
                name:'census',
                component:()=>import('../views/census/index.vue'), 
            }
        ]
    }
]
const router =createRouter({
    history:createWebHashHistory(),
    routes
})

export default router