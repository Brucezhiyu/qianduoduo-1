import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Money from '@/views/Money.vue'
import Labels from "@/views/Labels.vue";
import Statistics from "@/views/Statistics.vue";

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
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
