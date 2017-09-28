<template>
	<div class="banner">
		<mt-swipe :auto="4000">
		  <mt-swipe-item><img src="../assets/1.png"/></mt-swipe-item>
		  <mt-swipe-item><img src="../assets/2.png"/></mt-swipe-item>
		  <mt-swipe-item><img src="../assets/4.png"/></mt-swipe-item>
		</mt-swipe>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				list:''
			}
		}
	}
</script>

<style scoped>
	.banner{
		width:100%;
		height:11.5rem;
		margin-top:45px;
	}
	.banner img{
		height:100%;
		width:100%;
	}
</style>