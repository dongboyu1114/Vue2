import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
//该文件用于创建Vuex中最为核心的store
//准备actions 用于响应组件中的动作
const actions = {
	// jia(context, value) {
	// 	// console.log(context, value);
	// 	context.commit('JIA', value)
	// },
	// jian(context, value) {
	// 	// console.log(context, value);
	// 	context.commit('JIAN', value)
	// },
	jiaOdd(context, value) {
		// console.log(context, value);
		if (context.state.sum % 2) {
			context.commit('JIA', value)
		}
	},
	jiaWait(context, value) {
		setTimeout(() => {
			context.commit('JIA', value)
		}, 500)
	}
}
//准备mutations 用于操作state数据
const mutations = {
	JIA(state, value) {
		state.sum += value
		// console.log(state, value);
	},
	JIAN(state, value) {
		state.sum -= value
		// console.log(state, value);
	}
}
//准备state 用户存储数据
const state = {
	sum: 0, //当前的和
	school: '清华大学',
	subject: '前端'
}
//创建store //暴露store
export default new Vuex.Store({
	actions,
	mutations,
	actions,
	state
})
