import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import { Button } from 'vant';
Vue.config.productionTip = false;
Vue.use(Button)
import { Toast } from 'vant';
Vue.use(Toast);
import { Dialog } from "vant"
Vue.use(Dialog)

Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);

document.title='钱多多记账'
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

window.onload = function () {
    setTimeout(function () {
        window.scrollTo(0, 200);
    }, 0);
};

