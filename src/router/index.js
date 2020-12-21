import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import ProductDetail from '../views/ProductDetail.vue'
import About from '../views/About.vue'

const routes = [
    {
        path: '/',
        name: 'EventList',
        component: EventList
    },
    {
        path: '/product/:id',
        name: 'ProductDetail',
        component: ProductDetail,
        props: true
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
