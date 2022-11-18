//专门创建整个应用的路由器
import VueRouter from 'vue-router'
import About from '../pages/About'
import Home from '../pages/Home'
import Detail from '../pages/Detail'
import News from '../pages/views/News'
import Messages from '../pages/views/Messages'
//创建一个路由器
const router = new VueRouter({
	routes: [{
			name: 'guanyu',
			path: '/about',
			component: About,
		},
		{
			name: 'zhuye',
			path: '/home',
			component: Home,
			children: [{
				name: 'xinwen',
				path: 'news',
				component: News,
				meta: {
					isAuth: true,
				},
				beforeEnter(to, from, next) {
					console.log('a')
					// next()
					if (to.meta.isAuth) {
						if (localStorage.getItem('school') === 'atguigu') {
							next()
						} else {
							alert('学校名不对')
						}
					} else {
						next()
					}
				}
			}, {
				name: 'xiaoxi',
				path: 'messages',
				component: Messages,
				meta: {
					isAuth: true,
				},
				children: [{
						name: 'xiangqing',
						path: 'detail/:id/:title',
						component: Detail,
						// props的第一种写法，值为对象，该对象中的所有keyvalue
						// props: {
						// 	a: 1,
						// 	b: 'hello'

						// }
						// props的第二种写法，值为布尔值，该布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Deatil组件
						// props: true,
						//第三种写法，值为函数
						props($route) {
							return {
								id: $route.query.id,
								title: $route.query.title,
							}
						}
					}

				]
			}]
		}
	]
})
// 全局前置路由守卫---初始化的时候被调用---在每一次路由切换之前调用一个函数
// router.beforeEach((to, from, next) => {
// 	console.log('a')
// 	// next()
// 	if (to.meta.isAuth) {
// 		if (localStorage.getItem('school') === 'atguigu') {
// 			next()
// 		} else {
// 			alert('学校名不对')
// 		}
// 	} else {
// 		next()
// 	}

// })
export default router
