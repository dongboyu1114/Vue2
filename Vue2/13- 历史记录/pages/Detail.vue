<template>
	<ul>
		<!-- <li>{{$route.params.id}}</li>
		<li>{{$route.params.title}}</li> -->
		<li>a:{{id}}</li>
		<li>b:{{title}}</li>
	</ul>
</template>

<script>
	export default {
		name: 'Detail',
		props: ['id', 'title'],
		mounted() {
			console.log(this.$route);
		}
	}
</script>

<style>
</style>
