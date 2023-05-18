import {createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import User from './components/User.vue'
import Edit from './components/Edit.vue'
import Delete from './components/Delete.vue'
const routes = [
    {
        name:'Home',
        path:'/main/:username',
        component: Home
    },
    {
        name: 'User',
        path: '/users/:id',
        component: User
    },
    {
        name: 'Edit',
        path: '/edit/:id',
        component: Edit
    },
    {
        name: 'delete',
        path:'/delete/:id',
        component: Delete
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;