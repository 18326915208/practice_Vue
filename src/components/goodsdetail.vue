<template>
	<div class="goodsdetail">
		<div class="goods_header">
			<div class="gd_hd_l" onClick="JavaScript :history.back(1);"></div>
			<span>商品详情页</span>
			<div class="fenxiang"></div>
		</div>
		<div class="goods_banner">
			<div class="goods_swipe">
				<mt-swipe :auto="4000">
				  <mt-swipe-item v-for="item in list"><img :src="item"/></mt-swipe-item>
				</mt-swipe>
			</div>
			<div class="goods_word">
				<p>茵曼 2015秋装新款纯棉文艺范印花绣花长袖衬衫</p>
				<div><span class="price">￥120.00</span><span class="sole_price">经销价</span></div>
				<div><span class="oldprice">原价￥198.00</span></div>
			</div>
		</div>
		
		<!--footer-->
		<div class="goods_footer">
			<ul>
				<li class="dianpu">
					<i class="i_pub dianpu_i"></i>
					<span>店铺</span>
				</li>
				<li class="shoucang">
					<i class="i_pub shoucang_i"></i>
					<span>收藏</span>
				</li>
				<li class="" @click="showAddcart">
					加入购物车
				</li>
				<li class="" @click="showAddcart">
					立即购买
				</li>
			</ul>
		</div>
		<!--遮罩层-->
		<div class="shadow" v-show="showCart"></div>
		<!--加入购物车-->
		<transition name="fade">
			<div class="add_cart" v-show="showCart">
				<div class="title clear">
					<div class="title_img"><img src="../assets/1.png"/></div>
					<p>恢复大师的his阿杜奇偶苏东升地哦啊杜芳芳过户都会死</p>
					<span class="close" @click="close">&times;</span>
					<p><span class="price">￥120.00</span></p>
				</div>
				<div class="swrap">
					<div class="spec">
						<p>尺寸</p>
						<span class="active">28</span>
						<span v-for="(item,ind) in arr" v-if="ind > 0" @click="sizeActive">{{item}}</span>
					</div>
					<div class="spec">
						<p>颜色</p>
						<span class="active">红色</span>
						<span v-for="(item,ind) in color" v-if="ind > 0" @click="sizeActive	">{{item}}</span>
					</div>
					<div class="spec">
						<p>数量</p>
						<div>
							<span class="kc">库存:111件</span>
							
						</div>
					</div>
					<button class="button" @click="closeTrue">确定</button>
				</div>
			</div>
		</transition>
		<!--添加成功-->
		<transition name="tip">
			<div class="addShow" v-show="tipShow">添加成功</div>
		</transition>
	</div>
</template>

<script>
	
	export default{
		data(){
			return{
				list:'',
				showCart:false,
				tipShow:false,
				arr:["28","29","30","31","32","33","34"],
				color:["红色","黄色","绿色"]
			}
		},
		mounted(){
			this.$http.jsonp("http://datainfo.duapp.com/shopdata/getBanner.php")
			.then(res=>{
//				console.log(res);
				for(let i=0;i<res.body.length;i++){
//					console.log(JSON.parse(res.body[0].goodsBenUrl))
					this.list=JSON.parse(res.body[0].goodsBenUrl)
				}
			})
		},
		methods:{
			showAddcart(){
				this.showCart=true
			},
			close(){
				this.showCart=false
			},
			sizeActive(){
				let oSpec=document.querySelectorAll(".spec")[0];
				let oSpan=document.querySelectorAll(".spec span");
				oSpec.addEventListener("click",function(e){
					//console.log(e,oSpan);
					let targetSpan=e.target;
					if(targetSpan.nodeName == "SPAN"){
						for(var i=0;i<oSpan.length;i++){
							oSpan[i].className=""
						}
						targetSpan.className="active"
					}
				})
			},
			closeTrue(){
				let oaddShow=document.querySelectorAll(".addShow")[0];
				
				this.showCart=false
				this.tipShow=true;
				var This=this;
				setTimeout(function(){
					This.tipShow=false
				},1000)
			}
		}
	}
</script>

<style scoped>
	.goodsdetail{
		width: 100%;
		background:#fff;
	}
	.goods_header{
		width: 100%;
		height: 45px;
		padding:0 0.5rem;
		text-align: center;
		line-height: 45px;
		font-family: "微软雅黑";
		overflow: hidden;
		color:#666;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 100;
		box-sizing: border-box;
	}
	.gd_hd_l{
		float: left;
		width: 2rem;
		height: 2rem;
		margin-top: 0.35rem;
		background: url(../assets/fh.png) no-repeat;
		background-size: 100%;
	}
	.fenxiang{
		float: right;
		width: 2rem;
		height: 1.8rem;
		margin-top: 0.5rem;
		background: url(../assets/fx.png) no-repeat;
		background-size: 100% 100%;
	}
	.goods_banner{
		width: 100%;
		margin-top: 45px;
	}
	.goods_swipe{
		width:100%;
		height: 13rem;
	}
	.goods_swipe img{
		width: 100%;
		height: 100%;
	}
	.goods_word{
		padding: 0.5rem;
		text-align: center;
	}
	.goods_word p{
		color:#333;
		font:700 18px "微软雅黑";
	}
	.sole_price,.price{
		margin: 5px;
		color:#f00;
	}
	.price{
		font:700 16px "";
	}
	.sole_price{
		width: 3rem;
		line-height: 1rem;
		display: inline-block;
		padding:0.2rem 0.3rem ;
		font: 14px "微软雅黑";
		border: 1px dashed #f00;
		border-radius: 0.3rem;
	}
	.oldprice{
		color:#666;
		font: 700 14px "微软雅黑";
	}
	.goods_footer{
		width: 100%;
		position: fixed;
		left: 0;
		/*bottom: 3rem;*/
		bottom: 0rem;
		z-index: 10;
		height: 3rem;
		border-top: 1px solid #999;
		background:#fff;
	}
	.goods_footer ul{
		overflow: hidden;
	}
	.goods_footer ul li{
		float: left;
		height: 100%;
		text-align: center;
		font-family: "微软雅黑";
	}
	.goods_footer ul li:nth-child(1),.goods_footer ul li:nth-child(2){
		width: 20%;
		font: 12px "";
		color:#999;
	}
	.goods_footer ul li:nth-child(3),.goods_footer ul li:nth-child(4){
		width: 30%;
		color:#fff;
		line-height: 3rem;
	}
	.goods_footer ul li:nth-child(3){
		background:#ef5480;
		border-bottom-left-radius:4px;
		border-top-left-radius:4px;
	}
	.goods_footer ul li:nth-child(4){
		background:#e60b49;
		border-bottom-right-radius:4px;
		border-top-right-radius:4px;
	}
	.goods_footer ul li span{
		display: block;
	}
	.i_pub{
		display: inline-block;
		width: 1.5rem;
		height: 1.5rem;
		margin:0.1rem 0;
	}
	.dianpu_i{
		background: url(../assets/dianpu.png) no-repeat;
		background-size: 100%;
	}
	.shoucang_i{
		background: url(../assets/shoucang.png) no-repeat;
		background-size: 100%;
	}
	/*遮罩层*/
	.shadow{
		position: fixed;
	    left: 0px;
	    top: 0px;
	    background-color: #000;
	    width: 100%;
	    height: 100%;
	    filter: alpha(opacity=60);
	    opacity: 0.6;
	    z-Index: 100;
	}
	/*show cart*/
	.add_cart{
		position: fixed;
	    z-index: 9999;
	    left: 0px;
	    bottom:0;
	    width: 100%;
	    min-height: 38%;
	    background: #ffffff;
	    font-size: 0.15rem;
	    padding-bottom: 60px;
	}
	.title{
		padding:6px 10px;
		position: relative;
		left: 0;
		top: 0;
		min-height: 62px;
		border-bottom: 1px solid #eee;
	}
	.title_img{
		float: left;
		background: #fff;
		
	}
	.title_img img{
		width:3.5rem;
		height:3.5rem;
		position: absolute;
		left:10px;
		top:-10px;
		border: 5px solid #fff;
	}
	.title p{
		margin-left: 4.5rem;
		float: left;
		width: 67%;
		
	}
	.title .price{
		font-size: 12px;
		font-weight: normal;
		margin-top: 5px;
		display: block;
	}
	.title .close{
		float:right;
		font-size: 20px;
		color:#999;
		width:20px;
		height: 20px;
		border-radius: 100%;
		text-align: center;
		line-height: 20px;
		border: 1px solid #ddd;
		
	}
	.swrap{
		padding:6px 10px;
	}
	.spec{
		border-bottom: 1px solid #eee;
	}
	.spec span{
		display:inline-block;
		padding: 3px 5px;
		margin: 5px 6px 5px 0px;
		text-align: center;
		line-height: 20px;
		border: 1px solid #eee;
	}
	.spec span.active{
		color: #ffffff;
	    background: #e60b49;
	    border: 1px solid #e60b49;
	}
	.button{    
		position: absolute;
	    left: 0;
	    right: 0;
	    bottom: 10px;
	    margin: auto;
	    width: 80%;
	    font-size: 0.185rem;
	    height: 40px;
	    line-height: 40px;
	    color: #ffffff;
	    background: #E60B49;
	    border-radius: 5px;
	    font-size: 0.18rem;
	    /*border-bottom: 1px solid #E60B49;*/
	    border: none;
	}
	.spec .kc{
		border: none;
	}
	.fade-enter-active{
		animation: fade-enter 0.5s;
	}
	.fade-leave-active{
		animation: fade-leave 0.5s;
	}
	@keyframes fade-enter{
		from{transform: translateY(100%);}
		to{transform: translateY(0);}
	}
	@keyframes fade-leave{
		from{transform: translateY(0);}
		to{transform: translateY(100%);}
	}
	.addShow{
		position: fixed;
		top: 5px;
		left: 0;
		right: 0;
		margin: auto;
		z-index: 101;
		width: 80%;
		height: 30px;
		border-radius: 10px;
		background:rgba(0,0,0,.5);
		color:#fff;
		text-align: center;
		line-height: 30px;
	}
	.tip-enter-active{
		animation: tip-enter 0.5s;
	}
	/*.tip-leave-active{
		animation: fade-enter 0.5s;
	}*/
	@keyframes tip-enter{
		from{transform: translateY(-100%);}
		to{transform: translateY(0);}
	}
	/*@keyframes tip-leave{
		from{transform: translateY(0);}
		to{transform: translateY(-100%);}
	}*/
</style>