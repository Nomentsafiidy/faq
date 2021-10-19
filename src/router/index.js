import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from './../views/user/login/LoginPage.vue';
import RegisterPage from './../views/user/register/RegisterPage.vue';
import HomePage from './../views/user/home/HomePage.vue';
import QuestionPage from '../views/admin/question/QuestionPage.vue';
import QuestionUserPage from '../views/user/question/QuestionPage.vue';

const routes = [
    {
        path: '/admin',
        name: 'Admin',
        component: () => import('./../layouts/admin/AdminLayout.vue'),
        children: [
            {
                path: 'home',
                component: HomePage,
            },
            {
                path: 'question',
                component: QuestionPage,
            },
            {
                path: '*',
                redirect: 'home',
            },
        ],
    },
    {
        path: '/',
        name: 'User',
        component: () => import('./../layouts/user/UserLayout.vue'),
        children: [
            {
                path: 'home',
                component: HomePage,
            },
            {
                path: 'question',
                component: QuestionUserPage,
            },
            {
                path: 'login',
                component: LoginPage,
            },
            {
                path: 'register',
                component: RegisterPage,
            },
            {
                path: '',
                redirect: '/home',
            },
        ],
    },
    // {
    //     path: '/about',
    //     name: 'About',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    // },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
