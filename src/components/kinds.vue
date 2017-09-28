<template>
	<div class="kinds">
		<div class="goods_header">
			<div class="gd_hd_l" onClick="JavaScript :history.back(1);"></div>
			<span>分类</span>
		</div>
		<div style="height: 45px;"></div>
		<div class="kinds_all">
			<ul class="kind_l">
				<li class="back">鞋帽服饰</li>
				<li v-for="(item,index) in arr" v-if="index > 0" @click="getClass" >
					{{item}}
				</li>
			</ul>
			<div class="kind_r">
				<ul class="xmfs">
				<div><h3>鞋帽服饰</h3></div>
					<li v-for="item in list1">{{item}}</li>
				</ul>
			</div>
			
		</div>
		<div style="height: 3rem;"></div>
		<v-footer></v-footer>
	</div>
</template>

<script>
	import Footer from "./footer.vue"
	export default{
		data(){
			return {
				arr:["鞋帽服饰","母婴用品","厨具","玩具乐器","汽车用品","运动健康","食品饮料","珠宝手表","个体化妆","家用电器","数码办公","家居家装","礼品箱包"],
				list1:["飒飒是","大撒","萨尔王","食物纤维去","哇我亲","问问","恶趣味群","飒飒","韦尔奇无"]
			}
		},
		methods:{
			getClass(){
				let ul = document.querySelectorAll(".kind_l")[0];
				let li = document.querySelectorAll(".kind_l li");
				ul.addEventListener('click',function(e){
					//console.log(e)
					let target = e.target;
					if(target.nodeName == 'LI'){
						for(let i = 0; i < li.length; i++){
							li[i].className = "";
						}
						target.classList = "back";
						//console.log(target);
					}
				})
			}
		},
		components:{
			'v-footer':Footer
		}
	}
</script>

<style scoped>
a{color:#333;}
.class1{
	color: red;
}
.active{
	color:#f00;
}
.kinds{
	width: 100%;
}
.goods_header{
	width: 100%;
	height: 45px;
	padding:0 0.5rem;
	text-align: center;
	line-height: 45px;
	font-family: "微软雅黑";
	color:#666;
	background:#fff;
	position: fixed;
	left: 0;
	top: 0;
	box-sizing: border-box;
	overflow: hidden;
}
.gd_hd_l{
	float: left;
	width: 2rem;
	height: 2rem;
	margin-top: 0.35rem;
	background: url(../assets/fh.png) no-repeat;
	background-size: 100%;
}
.kinds_all{
	overflow: hidden;
	/*margin-top: 45px;*/
}
.kind_l{
	float: left;
	width: 30%;
	text-align: center;
}
.kind_l li{
	height: 2.5rem;
	background:#fff;
	border-top: 1px solid #f1f1f1;
	font: 14px "微软雅黑";
	color:#666;
	line-height: 2.5rem;
}
/*.kind_l li:nth-child(1){*/
	/*border-left: 2px solid #f00;
	background: #efefef;
}*/
.kind_l li.back{
	border-left: 2px solid #f00;
	background: #efefef;
}
.kind_r{
	float: right;
	width: 70%;
}
.xmfs{
	overflow: hidden;
	text-align: center;
}
.xmfs li{
	float: left;
    width: 49%;
    padding: 8px 0px;
    text-align: center;
    background: #ffffff;
    border: 1px solid #f1f1f1;
	
}


</style>