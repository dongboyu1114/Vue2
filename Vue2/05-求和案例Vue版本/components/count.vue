<template>
	<div class="Count">
		<h1>当前求和：{{sum}}</h1>
		<select v-model="num">
			<option value="1"></option>
			<option value="2"></option>
			<option value="3"></option>
		</select>
		<button @click="increment">+</button>
		<button @click="decrement">-</button>
		<button @click="incrementOdd">当前求和为奇数再加</button>
		<button @click="incrementWait">等一等再加</button>
	</div>
</template>
<script>
	export default {
		name: 'Count',
		data() {
			return {
				num: 1, //用户选择数据
				sum: 0 //当前的和
			}
		},
		methods: {
			increment() {
				this.sum += this.num
			},
			decrement() {
				this.sum -= this.num
			},
			incrementOdd() {
				if (this.sum % 2) {
					this.sum += this.num
				}
			},
			incrementWait() {
				setTimeout(() => {
					//函数体
					this.sum += this.num
				}, 500)
			}
		},
	}
</script>
<style scoped>

</style>
