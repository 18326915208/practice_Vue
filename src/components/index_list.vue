<template>
	<div class="ind_list">
		<div class="ind_break">
			<router-link to="">
				<div><img src="../assets/brand.png"/></div>
				<span>品牌街</span>
			</router-link>
			<router-link to="">
				<div><img src="../assets/self.png"/></div>
				<span>自营超市</span>
			</router-link>
			<router-link to="">
				<div><img src="../assets/shop.png"/></div>
				<span>店铺</span>
			</router-link>
			<router-link to="">
				<div><img src="../assets/order.png"/></div>
				<span>我的订单</span>
			</router-link>
		</div>
		<ul>
			<li v-for="item in list">
				<router-link to="/index/goodsdetail">
					<img  v-lazy="item.goodsListImg" :src="item.goodsListImg"/>
					<p>{{item.goodsName}}</p>
					<span class="nowprice">经销价：￥{{item.price}}</span>
					<span class="oldprice">原价：￥<del>{{item.price}}</del></span>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				list:[],
				arr:[]
			}
		},
		mounted(){
			var url="http://datainfo.duapp.com/shopdata/getGoods.php";
			this.$http.jsonp(url)
			.then(res=>{
				console.log(res);
				for(let i=0;i<res.body.length;i++){
					this.list.push(res.body[i])
				}
			},err=>{
				console.log("err")
			})
		}
	}
	
</script>

<style scoped>
	.ind_list{
		width: 100%;
		margin-bottom:3rem;
	}
	.ind_break{
		width: 100%;
		padding: 15px 0;
		border-top: 1px solid #999;
		display: flex;
		background: #fff;
	}
	.ind_break a{
		width: 25%;
		text-align: center;
	}
	.ind_break a div{
		width: 3rem;
	    height: 3rem;
	    margin: 0 auto;
	}
	.ind_break a div img{
		width: 3rem;
		height: 3rem;
	}
	.ind_break a span{
		font: 14px "微软雅黑";
		color: #999;
	}
	.ind_list ul{
		padding: 0.2rem;
		display: flex;
   		flex-direction: row;
   		flex-wrap: wrap;
   	}
	.ind_list ul li{
		list-style: none;
		width:45%;
		height: 215px;
		background:#fff;
		margin:4px;
		padding:0.2rem;
		box-shadow:0 0 5px #999;
	}
	.ind_list ul li img{
		width:100%;
		height:9rem;
	}
	.ind_list ul li p{
		font: 12px "";
		width: 100%;
		color:#666;
    	margin-top: 3px;
		display: -webkit-box;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    -webkit-box-orient: vertical;
	    -webkit-line-clamp: 2;
	    height: 32px;
	}
	.nowprice{
		display: block;
		font: 14px/20px "";
		color:#f00;
	}
	.oldprice{
		font: 12px "";
		color:#666;
	}
	del{
		text-decoration: line-through;
	}
</style>