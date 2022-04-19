import Vue from 'vue'
import VueRouter from 'vue-router'
import Money from '@/views/Money.vue'
import Labels from "@/views/Labels.vue";
import Statistics from "@/views/Statistics.vue";
import Notfound from "@/views/Notfound.vue";

Vue.use(VueRouter)

const routes = [
    //三个页面，默认页面跳转到/money
    {
        path:'/',
        redirect:'/money'
    },
    {
        path: '/money',
        component: Money
    },
    {
        path: '/labels',
        component: Labels
    },
    {
        path: '/statistics',
        component: Statistics
    },
    {
        path: '*',
        component: Notfound
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
