<template>
	<div>
		<Count></Count>
	</div>
</template>
<script>
	import Count from './components/count'
	export default {
		name: 'App',
		components: {
			Count
		},
		// mounted() {
		// 	console.log(this);
		// }

	}
</script>
<style lang="css">
	button {
		margin-left: 5px;
	}
</style>
