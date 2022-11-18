<template>
	<div class="container">
		<Category title="美食">
			<img src="./assets/logo.png" alt="">
		</Category>
		<Category title="游戏">
			<ul>
				<li v-for="(g,index) in games" :key="index">{{g}}</li>
			</ul>
		</Category>
		<Category title="电影">
			<video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
		</Category>
	</div>
</template>

<script>
	import Category from './components/Category'
	export default {
		name: 'Apps',
		components: {
			Category
		},
		data() {
			return {
				foods: ['火锅', '烧烤', '小龙虾', '牛排'],
				games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
				films: ['《教父》', '《拆弹专家》', '《你好，李焕英》', '《董博宇》']
			}
		},
	}
</script>

<style lang="css">
	.container {
		display: flex;
		justify-content: space-around;
	}

	video {
		width: 100%;
	}

	h3 {
		text-align: center;
		background-color: skyblue;
	}

	.category {
		background-color: pink;
		width: 200px;
		height: 300px;
	}
</style>
