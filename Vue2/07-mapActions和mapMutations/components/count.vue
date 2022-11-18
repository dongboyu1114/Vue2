<template>
	<div class="Count">
		<h1>当前求和：{{sum}}</h1>
		<h3>我在{{school}}，学习{{school}}</h3>
		<select v-model.number="num">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>
		<button @click="increment(num)">+</button>
		<button @click="decrement(num)">-</button>
		<button @click="incrementOdd(num)">当前求和为奇数再加</button>
		<button @click="incrementWait(num)">等一等再加</button>
	</div>
</template>
<script>
	import {
		mapActions,
		mapMutations,
		mapState
	} from 'vuex'
	export default {
		name: 'Count',
		data() {
			return {
				num: 0, //用户选择数据
			}
		},
		computed: {
			// 借助mapState从state中读取数据
			...mapState(['sum', 'school', 'subject']),

		},
		methods: {
			// increment() {
			// 	this.$store.commit('JIA', this.num)
			// },
			// decrement() {
			// 	this.$store.commit('JIAN', this.num)
			// },
			// incrementOdd() {
			// 	this.$store.dispatch('jiaOdd', this.num)
			// },
			// incrementWait() {
			// 	this.$store.dispatch('jiaWait', this.num)
			// },
			...mapActions({
				incrementOdd: 'jiaOdd',
				incrementWait: 'jiaWait'
			}),
			...mapMutations({
				increment: 'JIA',
				decrement: 'JIAN'
			})
		},
		mounted() {
			// const x = mapState({
			// 	he: 'sum',
			// 	xuexiao: 'school',
			// 	xueke: 'subject'
			// })
			console.log(this);
		}
	}
</script>
<style scoped>

</style>
