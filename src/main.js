import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//引入elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 引入ant-vue
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { Icon } from 'ant-design-vue';

Icon.setTwoToneColor('#eb2f96');
Icon.getTwoToneColor(); // #eb2f96
Vue.use(Antd);


//引入iView
import VueRouter from 'vue-router';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(VueRouter);
Vue.use(ViewUI);

//引入v-chart
import VCharts from 'v-charts'
Vue.use(VCharts)

//引入layui
{ /* <link rel="stylesheet" href="../layui/css/layui.css"> */ } { /* <script src="../layui/layui.js"></script> */ }

//引入fragment
import Fragment from 'vue-fragment'
Vue.use(Fragment.Plugin)

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: function(h) {
        return h(App);
    }
}).$mount("#app");