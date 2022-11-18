<template>
	<section class="jumbotron">
		<h3 class="jumbotron-heading">Search Github Users</h3>
		<div>
			<input type="text" placeholder="enter the name you search" v-model="keyWord" />&nbsp;
			<button @click="searchUsers">Search</button>
		</div>
	</section>
</template>

<script>
	import axios from 'axios'
	export default {
		name: 'Search',
		data() {
			return {
				keyWord: ""
			}
		},
		methods: {
			searchUsers() {
				this.$bus.$emit('updateListData', {
					isFirst: false,
					isLoading: true,
					errMsg: '',
					users: []
				})
				axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
					respond => {
						// console.log('请求成功了', respond.data.items)
						this.$bus.$emit('updateListData', {
							// isFirst: false,
							isLoading: false,
							errMsg: '',
							users: respond.data.items
						})
					},
					error => {
						this.$bus.$emit('updateListData', {
							// isFirst: false,
							isLoading: false,
							errMsg: error.message,
							users: []
						})
					}
				)
			}
		},
	}
</script>
<style scoped>
</style>
