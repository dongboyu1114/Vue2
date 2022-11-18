//专门创建整个应用的路由器
import VueRouter from 'vue-router'
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/views/News'
import Messages from '../pages/views/Messages'
//创建一个路由器
export default new VueRouter({
	routes: [{
			path: '/about',
			component: About
		},
		{
			path: '/home',
			component: Home,
			children: [{
				path: 'news',
				component: News,
			}, {
				path: 'messages',
				component: Messages,
			}]
		}
	]
})
