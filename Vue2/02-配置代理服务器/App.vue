<template>
	<div>
		<button @click="getStudents">获取学生信息</button>
		<button @click="getCars">获取汽车信息</button>
	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		name: 'Apps',
		methods: {
			getStudents() {
				axios.get('http://localhost:8080/api/students').then(response => {
						console.log('请求成功', response.data)
					},
					error => {
						console.log('响应失败', error.msg);
					}
				)
			},
			getCars() {
				axios.get('http://localhost:8080/foo/Cars').then(response => {
						console.log('请求成功', response.data)
					},
					error => {
						console.log('响应失败', error.msg);
					}
				)
			}
		},

	}
</script>

<style>

</style>
