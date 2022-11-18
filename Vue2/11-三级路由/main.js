import Vue from 'vue'
import App from './App.vue'
// 引入路由器
import router from './router'
//引入Vue-router
import VueRouter from 'vue-router'
Vue.config.productionTip = false
//使用插件
Vue.use(VueRouter)
new Vue({
	// el: '#app',
	render: h => h(App),
	router

}).$mount('#app')
// console.log(vm)
