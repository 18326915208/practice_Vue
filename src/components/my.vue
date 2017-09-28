<template>
	<div class="my">
		<div class="my_t clear">
			<div class="l photo"><img src="../assets/wo.png"/></div>
			<div class="l name"><span><router-link to="my/login">未登陆</router-link></span></div>
			<div class="r msg"><i class="msg_bg"></i></div>
		</div>
		<div class="yu-e">
			<span>￥0.21</span>
			我的余额
		</div>
		<div class="looks clear">
			<span class="l" style="color:#666;">我的订单</span>
			<span class="r"><router-link to="" style="color:#999;">查看全部订单</router-link><i class="to"></i></span>
		</div>
		<div class="books">
			<div>
				<router-link to=""><i class="i1"></i></router-link>
				<span>全部</span>
			</div>
			<div>
				<router-link to=""><i class="i2"></i></router-link>
				<span>待付款</span>
			</div>
			<div>
				<router-link to=""><i class="i3"></i></router-link>
				<span>代发货</span>
			</div>
			<div>
				<router-link to=""><i class="i4"></i></router-link>
				<span>待收货</span>
			</div>
			<div>
				<router-link to=""><i class="i5"></i></router-link>
				<span>评价</span>
			</div>
		</div>
	</div>
	
	
</template>

<script>
	
</script>

<style scoped>
	.my{
		width: 100%;
	}
	.my_t{
		background:#fd5757;
		padding:10px;
	}
	.my_t .photo{
		width: 3rem;
		height: 3rem;
		border: 1px solid #e48383;
		border-radius: ;
	}
	.my_t .photo img{
		width: 100%;
		height: 100%;
	}
	.name{
		color:#fff;
		font: 14px "微软雅黑";
		margin: 12px 0 0 5px;
	}
	.msg_bg{
		width: 2rem;
		height: 2rem;
		display: block;
		background: url(../assets/msg.png) no-repeat;
		background-size: 100%;
	}
	.yu-e{
		text-align: center;
	    font-size: 0.8rem;
	    min-height: 40px;
	    background: #e54848;
	    color:#fff;
	}
	.yu-e span{
		display: block;
		color:gold;
	}
	.looks{
		padding: 10px;
		font-size: 14px;
		border-bottom: 1px solid #e7e7e7;
	}
	.looks span{display: block;}
	.to{
		display: inline-block;
		width:8px;
		height: 8px;
		border-top: 1px solid #999;
		border-left: 1px solid #999;
		transform: rotate(135deg);
	}
	.books{
		display: flex;
		padding: 10px;
		justify-content: space-around;
		background:#fff;
	}
	.books div{
		width:19%;
		text-align: center;
	}
	.books div i{
		width:2.5rem;
		height: 2.5rem;
		margin: 0 auto;
		display: block;
		background:url(../assets/books.png) no-repeat;
		background-size:cover;
	}
	.books div i.i1{
		background-position: -226px -3px;
	}
	.books div i.i2{
		background-position:-19px -3px;
	}
	.books div i.i3{
		background-position: -71px -3px;
	}
	.books div i.i4{
		background-position: -123px -3px;
	}
	.books div i.i5{
		background-position: -175px -3px;
	}
</style>