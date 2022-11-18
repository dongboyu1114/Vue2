<template>
	<div class="category">
		<h3>{{title}}分类</h3>
		<slot>我是默认值</slot>
		<!-- 	<ul>
			<li v-for="(item,index) in listData" :key="index">{{item}}</li>
		</ul> -->
	</div>
</template>
<script>
	export default {
		name: 'Category',
		props: ['title']
	}
</script>
<style scoped>

</style>
