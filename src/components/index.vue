<template>
	<div id="index">
		<v-header></v-header>
		<v-banner></v-banner>
		<v-indexlist></v-indexlist>
		<!--<v-footer></v-footer>-->
	</div>
</template>

<script>
	import Header from "./header.vue";
	import Banner from "./banner.vue";
	import IndexList from "./index_list.vue";
	import Footer from "./footer.vue";
	export default{
		data(){
			return {
				msg:''
			}
		},
		components:{
			"v-header":Header,
			"v-banner":Banner,
			"v-indexlist":IndexList,
			"v-footer":Footer
		}
	}
</script>

<style scoped>
	
	
</style>