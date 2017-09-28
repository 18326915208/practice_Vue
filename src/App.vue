<template>
  <div id="app">
  	
		<router-view></router-view>
		<v-footer></v-footer>
  </div>
</template>

<script>
	import Footer from "./components/footer.vue";
	export default {
	  name: 'app',
	  components:{
	  	'v-footer':Footer
	  }
	}
</script>

<style>
	body,html{width: 100%;}
</style>
