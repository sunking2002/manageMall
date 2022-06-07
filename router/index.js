import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../pages/Main.vue"

Vue.use(VueRouter)

const routes = [{
        path:'/',
        name:'Main',
        component:Main,
        children:[{
            name:'home',
            path:'/home',
            component:()=>import('../pages/home')
            },
            {
                name:'user',
                path:'/user',
                component:()=>import('../pages/User')
            },
            {
                name:'mall',
                path:'/mall',
                component:()=>import('../pages/mall')
            },
            {
                name:'page1',
                path:'/page1',
                component:()=>import('../pages/other/page1')
            },
            {
                name:'page2',
                path:'/page2',
                component:()=>import('../pages/other/page2')
            }
    ]
    },
]
const router = new VueRouter({
    mode:'history',
    routes,
})
export default router