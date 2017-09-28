<template>
	<div>
		<mt-tabbar v-model="selected" fixed>
		  <mt-tab-item id="index" isRouter>
		    <img slot="icon-normal" src="../assets/shouye.png">
		    <img slot="icon-active" src="../assets/shouye1.png">
		    首页
		  </mt-tab-item>
		  <!--<mt-tab-item id="kinds" isRouter>
		    <img slot="icon-normal" src="../assets/fenlei.png">
		    <img slot="icon-active" src="../assets/fenlei1.png">
		    分类
		  </mt-tab-item>-->
		  <mt-tab-item id="navbar" isRouter>
		    <img slot="icon-normal" src="../assets/fenlei.png">
		    <img slot="icon-active" src="../assets/fenlei1.png">
		    分类
		  </mt-tab-item>
		  <mt-tab-item id="cart" isRouter>
		    <img slot="icon-normal" src="../assets/gouwuche.png">
		    <img slot="icon-active" src="../assets/gouwuche1.png">
		    购物车
		  </mt-tab-item>
		  <mt-tab-item id="my" isRouter>
		    <img slot="icon-normal" src="../assets/wo-de.png">
		    <img slot="icon-active" src="../assets/wo-de1.png">
		    我的
		  </mt-tab-item>
		</mt-tabbar>
	</div>
</template>
<script>
	import mtTabItem from './tabbar-item.vue'
	export default {  
	  name: 'page-tabbar',  
	  data() {  
	    return {  
	      selected: 'index'  
	    } 
	  },
	  components:{
	  	mtTabItem
	  }
	};  
</script>

<style scoped>
	.mint-tabbar{
		height: 3rem;
	}
	.is-active{
		color:#f00;
	}
	.mint-tab-item{
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.mint-tab-item .mint-tab-item-icon{
		width:1.5rem;
		margin: 0 auto 3px;
	}
	.mint-tab-item-icon img{
		width:1.5rem;
		height:1.4rem;
	}
	.mint-tab-item-label{
		margin-top:0.1rem;
		font-size:0.23rem;  
		font-family: "微软雅黑";
	}
</style>