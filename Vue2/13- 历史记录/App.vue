<template>
	<div>
		<div class="row">
			<Banner></Banner>
		</div>
		<div class="row">
			<div class="col-xs-2 col-xs-offset-2">
				<div class="list-group">
					<!-- <a class="list-group-item" href="./about.html">About</a>
					<a class="list-group-item active" href="./home.html">Home</a> -->
					<router-link replace class="list-group-item" to="/about" active-class="active">About</router-link>
					<router-link replace class="list-group-item" to="/home" active-class="active">Home</router-link>
				</div>
			</div>
			<div class="col-xs-6">
				<div class="panel">
					<div class="panel-body">
						<router-view></router-view>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import Banner from './components/Banner.vue'
	export default {
		components: {
			Banner
		}
	}
</script>
<style lang="css">

</style>
