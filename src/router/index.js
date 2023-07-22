import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

Vue.use(Router)
Vue.use(Meta)
// route-level code splitting
/*const createListView = id => () => import('../views/CreateListView').then(m => m.default(id))
const ItemView = () => import('../views/ItemView.vue')
const UserView = () => import('../views/UserView.vue')*/
const Layout=()=>import('../views/layout/Index.vue');

export function createRouter () {
    return new Router({
        mode: 'history',
        fallback: false,
        scrollBehavior: () => ({ y: 0 }),
        routes: [
            {
                path: '/',
                component:Layout,
                children:[{
                    path:'',
                    name:'home',
                    component:()=>import('../views/Home.vue')
                },{
                    path:'/app/:id(\\d+).html',
                    name:'app',
                    component:()=>import('../views/Show.vue')
                },{
                    path:'/app',
                    name:'applist',
                    component:()=>import('../views/List.vue')
                },{
                    path:'/app_:id(\\d+).html',
                    name:'apptype',
                    component:()=>import('../views/List.vue')
                },{
                    path:'/ios/:id(\\d+).html',
                    name:'ios',
                    component:()=>import('../views/Show.vue')
                },{
                    path:'/ios',
                    name:'ioslist',
                    component:()=>import('../views/List.vue')
                },{
                    path:'/ios_:id(\\d+).html',
                    name:'iostype',
                    component:()=>import('../views/List.vue')
                },{
                    path:'/android/:id(\\d+).html',
                    name:'android',
                    component:()=>import('../views/Show.vue')
                },{
                    path:'/android',
                    name:'androidlist',
                    component:()=>import('../views/List.vue')
                },{
                    path:'/android_:id(\\d+).html',
                    name:'androidtype',
                    component:()=>import('../views/List.vue')
                },{
                    path:'/harmonyos/:id(\\d+).html',
                    name:'harmonyos',
                    component:()=>import('../views/Show.vue')
                },{
                    path:'/harmonyos',
                    name:'harmonyoslist',
                    component:()=>import('../views/List.vue')
                },{
                    path:'/harmonyos_:id(\\d+).html',
                    name:'harmonyostype',
                    component:()=>import('../views/List.vue')
                },{
                    path:'/computer/:id(\\d+).html',
                    name:'computer',
                    component:()=>import('../views/Show.vue')
                },{
                    path:'/computer',
                    name:'computerlist',
                    component:()=>import('../views/List.vue')
                },{
                    path:'/computer_:id(\\d+).html',
                    name:'computertype',
                    component:()=>import('../views/List.vue')
                },{
                    path:'/news/:id(\\d+).html',
                    name:'new',
                    component:()=>import('../views/New.vue')
                },{
                    path:'/news_:id(\\d+).html',
                    name:'news',
                    component:()=>import('../views/News.vue')
                },{
                    path:'/about',
                    name:'about',
                    component:()=>import('../views/About.vue')
                },{
                    path:'*',
                    name:'any',
                    component:()=>import('../views/404.vue')
                }]
            },
            /*{ path: '/top/:page(\\d+)?', component: createListView('top') },
            { path: '/new/:page(\\d+)?', component: createListView('new') },
            { path: '/show/:page(\\d+)?', component: createListView('show') },
            { path: '/ask/:page(\\d+)?', component: createListView('ask') },
            { path: '/job/:page(\\d+)?', component: createListView('job') },
            { path: '/item/:id(\\d+)', component: ItemView },
            { path: '/user/:id', component: UserView },*/
        ]
    })
}
