import VueResource from 'vue-resource';
import App from './../components/pages/App.vue';
import DemoPage from './../components/pages/demo-page.vue';

Vue.use(VueResource);
Vue.use(VueRouter);

// for session support
Vue.http.options.credentials = true;

var router = new VueRouter({
    routes: [{
        path: '/',
        component: DemoPage
    }]
});

// the vue instance
var vm = new Vue({
    el: '#app',
    data() {
        return {
            deviceReady: false
        };
    },
    components: {
        'app': App,
        'login-page': DemoPage
    },
    router,
    render: function(h) {
        return h(App);
    }
});

// apply event listener for deviceready
document.addEventListener('deviceready', () => vm.deviceReady = true);
