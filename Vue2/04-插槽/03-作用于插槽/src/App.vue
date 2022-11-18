<template>
	<div class="container">

		<Category title="游戏">
			<template v-slot="atguigu">
				<ul>
					<li v-for="(g,index) in atguigu.games" :key="index">{{g}}</li>
				</ul>
			</template>

		</Category>
		<Category title="游戏">
			<template v-slot="atguigu">
				<ol>
					<li v-for="(g,index) in atguigu.games" :key="index">{{g}}</li>
				</ol>
			</template>
		</Category>
		<Category title="游戏">
			<template v-slot="atguigu">
				<h4 v-for="(g,index) in atguigu.games" :key="index">{{g}}</h4>
			</template>
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
