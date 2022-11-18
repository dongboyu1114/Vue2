import Vue from 'vue'
import App from './App.vue'
import {
	Button,
	Row,
	DatePicker
} from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// 引入路由器
//引入Vue-router
// import VueRouter from 'vue-router'
Vue.config.productionTip = false
//使用插件
// Vue.use(ElementUI)
Vue.component('el-button', Button);
Vue.component('el-row', Row);
Vue.component('el-date-picker', DatePicker);
new Vue({
	// el: '#app',
	render: h => h(App),
}).$mount('#app')
