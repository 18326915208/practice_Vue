<template>
	<div class="header">
		<input type="text" v-model="value" placeholder="搜索"/>
		<!--<mt-search v-model="value" cancel-text="取消" placeholder="搜索"></mt-search>-->
		<ul class="search_list">
			<li v-for="item in arr">{{item}}</li>
		</ul>
		<i class="msg"></i>
		<!--{{count}}-->
	</div>
</template>

<script>
	import store from "../store/store.js";
	var timer=null;
	export default{
		data(){
			return{
				count :store.state.count,
				value:"",
				arr:[]
			}
		},
		watch:{
			value(newVal,oldVal){
				clearTimeout(timer);
				timer = setTimeout(()=>{
					const urls="https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+newVal;
					this.$http.jsonp(urls,{
						jsonp:"cb"
					}).then(res=>{
//						console.log(res.body.s)
						this.arr=res.body.s
					})
				})
			}
		}
	}
</script>
<style scoped>
	.header{
		height: 45px;
		width: 100%;
		text-align: center;
		line-height: 45px;
		background:#fff;
		color: #999;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 1000;
	}
	.header input{
		width:75%;height: 26px; border-radius:8px;border: 1px solid #999;
		text-indent: 1em;
		outline: none;
	}
	.search_list {
		width:100%;
		position: absolute;
		top: 45px;
		left: 0;
		text-align: left;
		background: rgba(0,0,0,.2);
		
	}
	.search_list li{
		padding:0 0.5rem;
		font: 0.45rem "";
		color:#fff;
	}
	.msg{
		width:1.5rem;height: 1.5rem;display: inline-block;
		float:right;
		background: url(../assets/msg.png) no-repeat;
		background-size: 100%;
		margin:0.6rem 1rem 0 0;
		}
</style>