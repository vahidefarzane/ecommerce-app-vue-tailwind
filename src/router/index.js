import {createRouter, createWebHistory} from 'vue-router'
import HomeView from "../views/HomeView.vue";
import AddCategory from "../views/Category/AddCategory.vue"
import CategoryView from "../views/Category/CategoryView.vue"
import EditCategory from "../views/Category/EditCategory.vue"
import Admin from "../views/Admin.vue"


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'About',
            component: () => import("../views/AboutView.vue"),
        },
        {
            path: '/admin/category/add',
            name: 'AddCategory',
            component: AddCategory,
        },
        {
            path: '/admin/category',
            name: 'CategoryView',
            component: CategoryView,
        },
        {
            path: '/admin/category/:id',
            name: 'EditCategory',
            component: EditCategory,
        },
        {
            path: '/admin',
            name: 'Admin',
            component: Admin,
        },
    ]

})

export default router
