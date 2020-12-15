import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
            path: "/",
            redirect: "/index"
        },
        {
            path: "/index",
            name: "Index",
            component: () =>
                import ("../views/Index.vue"),
        },
        {
            path: "/login",
            name: "Login",
            component: () =>
                import ("../views/Login.vue"),
        },
        {
            path: "/home",
            name: "Home",
            component: () =>
                import ("../views/Home.vue"),
            meta: { requiresAuth: true },
            children: [{
                    path: "settings",
                    name: "Settings",
                    meta: { title: 'Settings' },
                    component: () =>
                        import ("../views/Settings.vue"),
                },
                {
                    path: "personalcenter",
                    name: "Personalcenter",
                    meta: { title: 'Personalcenter' },
                    component: () =>
                        import ("../views/Personalcenter.vue"),
                },
                {
                    path: "user",
                    name: "User",
                    meta: { title: 'User' },
                    component: () =>
                        import ("../views/User.vue"),
                },
                {
                    path: "chart",
                    name: "Chart",
                    meta: { title: 'Chart' },
                    component: () =>
                        import ("../views/Chart.vue"),
                },
                {
                    path: "role",
                    name: "Role",
                    meta: { title: 'Role' },
                    component: () =>
                        import ("../views/Role.vue"),
                },
                {
                    path: "menu",
                    name: "Menu",
                    meta: { title: 'Role' },
                    component: () =>
                        import ("../views/Menu.vue"),
                },
                {
                    path: "apartment",
                    name: "Apartment",
                    meta: { title: 'Apartment' },
                    component: () =>
                        import ("../views/Apartment.vue"),
                },
                {
                    path: "position",
                    name: "Position",
                    meta: { title: 'Position' },
                    component: () =>
                        import ("../views/Position.vue"),
                },
                {
                    path: "alpha",
                    name: "Alpha",
                    meta: { title: 'Alpha' },
                    component: () =>
                        import ("../views/Alpha.vue"),
                },
                {
                    path: "parameter",
                    name: "Parameter",
                    meta: { title: 'Parameter' },
                    component: () =>
                        import ("../views/Parameter.vue"),
                },
                {
                    path: "info",
                    name: "Info",
                    meta: { title: 'Info' },
                    component: () =>
                        import ("../views/Info.vue"),
                },
                {
                    path: "diary",
                    name: "Diary",
                    meta: { title: 'Diary' },
                    component: () =>
                        import ("../views/Diary.vue"),
                },
                {
                    path: "onlineuser",
                    name: "Onlineuser",
                    meta: { title: 'Onlineuser' },
                    component: () =>
                        import ("../views/Onlineuser.vue"),
                },
                {
                    path: "scheduletask",
                    name: "Scheduletask",
                    meta: { title: 'Scheduletask' },
                    component: () =>
                        import ("../views/Scheduletask.vue"),
                },
                {
                    path: "dataspy",
                    name: "Dataspy",
                    meta: { title: 'Dataspy' },
                    component: () =>
                        import ("../views/Dataspy.vue"),
                },
                {
                    path: "servicespy",
                    name: "Servicespy",
                    meta: { title: 'Servicespy' },
                    component: () =>
                        import ("../views/Servicespy.vue"),
                },
                {
                    path: "formcreate",
                    name: "Formcreate",
                    meta: { title: 'Formcreate' },
                    component: () =>
                        import ("../views/Formcreate.vue"),
                },
                {
                    path: "codecreate",
                    name: "Codecreate",
                    meta: { title: 'Codecreate' },
                    component: () =>
                        import ("../views/Codecreate.vue"),
                },
                {
                    path: "systeminterface",
                    name: "Systeminterface",
                    meta: { title: 'Systeminterface' },
                    component: () =>
                        import ("../views/Systeminterface.vue"),
                },
                {
                    path: "officialwebsite",
                    name: "Officialwebsite",
                    meta: { title: 'Officialwebsite' },
                    component: () =>
                        import ("../views/Officialwebsite.vue"),
                }
            ]
        }
    ],
    linkActiveClass: "active-router",
    linkExactActiveClass: "exact-router"
});