<template>
	<div class="con">
		<div class="goods_header">
			<div class="gd_hd_l" onClick="JavaScript :history.back(1);"></div>
			<span>购物车</span>
		</div>
		<div style="height: 45px;"></div>
		<div class="select">
			<ul>
				<li class="shop" v-for="(item,index1) in goodsObj">
					<div class="shop_t">
						<!--<div class="shop_btn"><label></label></div>-->
						<div class="shop_btn">
							<input type="checkbox" name="all" v-on:click="chooseShopGoods(index1)" v-model="item.checked" />
						</div>
						<p class="">店铺：{{item.name}}</p>
					</div>
					<ul class="shop_b">
						<li v-for="(data,index) in item.list">
							<!--<div class="shop_btn"><label></label></div>-->
							<div class="shop_btn">
								<input type="checkbox" name="all" v-model="data.checked" v-on:click="choose(index1, index)" />
							</div>
							<div class="shop_goods">
								<router-link to="/index/goodsdetail"><img src="../assets/1.png" alt="图片" /></router-link>
								<div class="description">
									<p>{{data.descript}}</p>
									<div><span>颜色：{{data.color}}</span>&nbsp; <span>尺码：{{data.size}}</span>&nbsp; <span>库存：{{data.realStock}}</span></div>
									<div class="ab_money">
										<!--<span>￥<u class="price">{{data.price}}</u></span>-->
										<span>￥<u class="price" v-html="(data.price).toFixed(2)"></u></span>
										<div class="add_min">
											<button @click="numChange(index1, index, -1)" :class="{ 'disable' : data.num==1 }">-</button>
											<!--<i>{{data.num}}</i>-->
											<input type="number" v-bind:value="data.num" class="number" v-bind:data-realStock="data.realStock" v-on:keyUp="numEntry(index1, index)" v-on:keyDown="numEntry(index1, index)" v-model="data.num"/>
											<button @click="numChange(index1, index, 1)" :class="{ 'disable' : data.num==data.realStock }">+</button>
										</div>
										<!--{{msg}}-->
									</div>
									<div class="del">
										<span @click="delGoods(index1,index)">删除</span>
									</div>
								</div>
							</div>
						</li>
						<div class="shop_price">
							<p>店铺商品总金额: ￥<span v-html="calEveryStore(index1)"></span></p>
						</div>
					</ul>
				</li>
			</ul>
		</div>
		<div class="store-footer">
		  <label>
		    <input type="checkbox" v-on:click="chooseAllGoods($event)" v-model="allChecked" />
		    <span>全选</span>
		  </label>
		  <div class="cal-box">
		    <p>合计: ￥<span v-html="totalMoney.toFixed(2)"></span></p>
		  </div>
		  <button>结算</button>
		</div>
		<div style="height: 3rem;"></div>
	</div>
</template>

<script>
	var goodsObj = [
	  {
	    name : '拉夏贝尔',
	    checked : false,
	    list : [
	      {
	        name : 'T恤',
	        descript:' 英爵伦 男士短袖T恤 夏季体恤 男装2017新款修身衣',
	        goodsImg:"../assets/1.png",
	        price : 23.00,
	        realStock : 10,
	        fare : 1.5,
	        color:'黄色',
	        num : 1,
	        size:'M',
	        checked : false,
	      },
	 	  {
	        name : '背心',
	        descript:'就是嗲点就hi撒好滴稍等hi说的话五月五是啊多好i时都会及时收到',
	        goodsImg:"../assets/1.png",
	        price : 23.00,
	        realStock : 10,
	        fare : 1.5,
	        color:'黑色',
	        num : 1,
	        size:'M',
	        checked : false,
	      },
	      {
	        name : '衬衫',
	        descript:'我去黑无异于是滴啊会员',
	        price : 21.00,
	        realStock : 21,
	        fare : 1.5,
	        color:'白色',
	        num : 1,
	        size:'S',
	        checked : false,
	      },
	 
	      {
	        name : '短裤',
	        descript:'打算氢氧化物IQ噢is还得死矮子撒',
	        price : 88.00,
	        realStock : 8,
	        fare : 1.5,
	        color:'黑色',
	        num:1,
	        size:'X',
	        checked : false,
	      }
	    ]
	  },
	 
	  {
	    name : '妖精的口袋',
	    checked : false,
	    list : [
	      {
	        name : '短裙',
	        descript:'大缺口控制搜到就阿婆计划覅社会地位哈电话电话四安顿好是',
	        price : 166.00,
	        realStock : 10,
	        fare : 2,
	        color:'红色',
	        num : 1,
	        size:'XL',
	        checked : false,
	      },
	 
	      {
	        name : '连衣裙',
	        descript:'更好滴撒好嗲华东师大号我去多撒多无群二群无大声道无所群翁奥撒',
	        price : 188.00,
	        realStock : 2,
	        fare : 1.5,
	        color:'蓝色',
	        num : 1,
	        size:'S',
	        checked : false,
	      },
	 
	      {
	        name : '旗袍',
	        descript:'布vudshduaosadisjihfas基数大皇帝啊',
	        price : 299.00,
	        realStock : 1,
	        fare : 3,
	        color:'青色',
	        num : 1,
	        size:'XS',
	        checked : false,
	      }
	    ]
	  },
	 
	  {
	    name : 'only',
	    checked : false,
	    list : [
	      {
	        name : '休闲裤',
	        descript:'北京安徽省嗲是啥子都我大红花富家大室',
	        price : 53.00,
	        realStock : 10,
	        fare : .5,
	        color:'黄色',
	        num : 1,
	        size:'M',
	        checked : false,
	      },
	 
	      {
	        name : '牛仔裤',
	        descript:'速给我其股市大大姐拉科技的萨达互换性促中心也会擦',
	        price : 66.50,
	        realStock :21,
	        fare : 2,
	        color:'藏青色',
	        num : 1,
	        size:'S',
	        checked : false,
	      },
	 
	      {
	        name : '哈伦裤',
	        descript:'回家哦事发后大家撒活动速达回溯到用户萨迪公司活动爱迪生',
	        price : 46.50,
	        realStock :44,
	        fare : 5,
	        color:'花色',
	        num : 1,
	        size:'XL',
	        checked : false,
	      }
	    ]
	  },
	];
	
	export default{
		data(){
			return {
				count:1,
				price:122.0,
				goodsObj : goodsObj,
			    totalMoney : 0,
			    totalFare : 0,
			    allChecked : false
			}
		},
		methods:{
			// 全部商品全选
		    chooseAllGoods : function() {
		      var flag = true;
		      if ( this.allChecked ) {
		        flag = false;
		      }
		      for ( var i = 0, len = this.goodsObj.length; i < len; i++ ) {
		        this.goodsObj[i]['checked'] = flag;
		        var list = this.goodsObj[i]['list'];
		        for ( var k = 0, len1 = list.length; k < len1; k++ ) {
		          list[k]['checked'] = flag;
		        }
		      }
		      this.allChecked = !this.allChecked;
		      this.calTotalMoney();
//		      this.calTotalFare();
		    },
			// 每个店铺全选
		    chooseShopGoods : function( index) {
		      var list = this.goodsObj[index]['list'];
		      var  len = list.length;
		      if ( this.goodsObj[index]['checked'] ) {
		        for (var i = 0; i < len; i++ ) {
		          list[i]['checked'] = false;
		        }
		      } else {
		        for (var i = 0; i < len; i++ ) {
		          list[i]['checked'] = true;
		        }
		      }
		      this.goodsObj[index]['checked'] = !this.goodsObj[index]['checked'];
		 
		      // 判断是否选择所有商品的全选
		      this.isChooseAll();
		 
		      this.cal(index);
		    },
		    // 单个选择
		    choose : function( index1, index) {
		      var list = this.goodsObj[index1]['list'];
		      var len = list.length;
//		      console.log(list,list[index]['checked'],index)
		      if ( list[index]['checked'] ) {
		        this.goodsObj[index1]['checked'] = false;
		        this.allChecked = false;
		        list[index]['checked'] = !list[index]['checked'];
		      } else {
		        list[index]['checked'] = !list[index]['checked'];
		 
		        // 判断是否选择当前店铺的全选
		        var flag = true;
		        for (var i = 0; i < len; i++ ) {
		          if ( list[i]['checked'] == false ) {
		            flag = false;
		            break;
		          }
		        }
		        flag == true ? this.goodsObj[index1]['checked'] = true : this.goodsObj[index1]['checked'] = false;
		      }
		 
		      // 判断是否选择所有商品的全选
		      this.isChooseAll();
		 
		      this.cal(index);
		    },
		 
		    // 判断是否选择所有商品的全选
		    isChooseAll : function() {
		      var flag1 = true;
		      for ( var i = 0, len = this.goodsObj.length; i < len; i++ ) {
		        if ( this.goodsObj[i]['checked'] == false ) {
		          flag1 = false;
		          break;
		        }
		      }
		      flag1 == true ? this.allChecked = true : this.allChecked = false;
		    },
		 
		    // 商品数量控制
		    numChange : function(index1, index, numChange) {
		        var goods = this.goodsObj[index1]['list'][index];
		        console.log(index1,index,numChange,goods);
		        var  oThis = this;
		      if ( numChange == 1 ) {
		        goods.num++;
		      } else if ( numChange == -1 ) {
		        goods.num--;
		      }
		 
		      if ( goods.num <= 1 ) {
		        goods.num = 1;
		      } 
		 
		      if ( goods.num >= goods.realStock ) {
		        goods.num = goods.realStock;
		      }
		 
		      this.cal(index);
		    },
		 
		    // 用户填写容错处理
		    numEntry : function(index1, index) {
		      var goods = this.goodsObj[index1]['list'][index];
		      if ( goods.num <=1 ) {
		        goods.num = 1;
		      }
		 
		      if ( goods.num > goods.realStock ) {
		        goods.num = goods.realStock;
		      }
		      this.cal(index);
		    },
		 
		    // 计算每个店铺的商品总额
		    calEveryStore : function(index) {
		      var everyStoreMoney = 0,
		        list = this.goodsObj[index]['list'];
		      list.forEach(function(item, index, arr) {
		        if ( list[index]['checked'] ) { 
		          everyStoreMoney += parseFloat(item.price) * parseFloat(item.num);
		        }
		      });
		      return everyStoreMoney.toFixed(2);
		    },
		 
		    // 计算每个店铺的运费总额
		    calEveryFare : function(index) {
		      var everyStoreFare = 0,
		        list = this.goodsObj[index]['list'];
		      list.forEach(function(item, index, arr) {
		        if ( list[index]['checked'] ) { 
		          everyStoreFare += parseFloat(item.fare) * parseFloat(item.num);
		        }
		      });
		      return everyStoreFare.toFixed(2);
		    },
		 
		    // 计算商品总金额
		    calTotalMoney : function () {
		      var oThis = this;
		      this.totalMoney = 0;
		      for ( var i = 0, len = this.goodsObj.length; i < len; i++ ) {
		        var list = this.goodsObj[i]['list'];
		        list.forEach(function(item, index, arr) {
		          if ( list[index]['checked'] ) {
		            oThis.totalMoney += parseFloat(item.price) * parseFloat(item.num);
		          }
		        });
		      }
		    },
		 
		    // 计算商品总运费
		    calTotalFare : function () {
		      var oThis = this;
		      this.totalFare = 0;
		      for ( var i = 0, len = this.goodsObj.length; i < len; i++ ) {
		        var list = this.goodsObj[i]['list'];
		        list.forEach(function(item, index, arr) {
		          if ( list[index]['checked'] ) {
		            oThis.totalFare += parseFloat(item.fare) * parseFloat(item.num);
		          }
		        });
		      }
		    },
		 
		    // 计算方法集合
		    cal : function(index) {
		      this.calEveryStore(index);
		      this.calEveryFare(index);
		      this.calTotalMoney();
		      this.calTotalFare();
		    },
		 
		    // 删除操作
		    delGoods : function(index1, index) {
		      console.log(index1);
		      console.log(index);
		      this.goodsObj[index1]['list'].splice(index, 1);
		      this.cal(index);
		    }
		      
//			minCount(){
//				var priceHTML=document.getElementsByClassName("price")[0];
//				this.count--;
//				if(this.count<1){
//					this.count=1;
//				}
//				priceHTML.innerText=this.price*this.count;
//				
//			},
//			decCount(){
//				var priceHTML=document.getElementsByClassName("price")[0];
//				this.count++;
//				priceHTML.innerText=this.price*this.count;
//			}
		}
	}
</script>

<style scoped>
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
		z-index: 1000;
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
	.shop{
		padding: 1rem;
		background: #fff;
	}
	.shop_t{
		height: 26px;
		line-height: 26px;
		border-bottom: 1px solid #efefef;
		overflow: hidden;
	}
	.shop_t p{
		float: left;
		width: 90%;
	}
	.shop_btn{
		float: left;
		width: 10%;
		height: 100%;
		position: relative;
		box-sizing: border-box;
		height: 1rem;
	}
	.shop_btn input{
		position: absolute;
		left: 0;
		top: 4px;
		display:block;
		height: 1rem;
		width: 1rem;
		background:#efefef;
		border: 1px solid #999;
		border-radius: 100%;
	}
	label.bg{
		background: url(../assets/more_unfold.png) no-repeat;
		background-size: 100%;
	}
	.shop_b li{
		overflow: hidden;
		padding: 6px 0px;
    	border-bottom: 1px solid #f1f1f1;
	}
	.shop_goods{
		float: left;
		width: 90%;
		overflow: hidden;
		margin-bottom: 5px;
	}
	.shop_goods a{
		float: left;
		display: block;
		width: 24%;
	}
	.shop_goods a img{
		max-width: 60px;
		height: 60px;
		max-height:65px;
	}
	.shop_goods .description{
		width: 75%;
		float: right;
	}
	.description p{
		color:#333;
		font-size:14px;
	}
	.description span{
		color: #666;
		font-size: 12px;
	}
	.ab_money{
		width: 100%;
		overflow: hidden;
	}
	.ab_money span{
		float: left;
	}
	.ab_money .add_min{
		display:block;
		float: right;
		overflow: hidden;
	}
	.add_min button{
		float: left;
		width:1rem;
		height: 1.1rem;
		line-height:1rem;
		font-size:14px;
		border: none;
		border: 1px solid #999;
	}
	.add_min button:nth-child(1){
		border-right: 0;
	}
	.add_min button:nth-child(2){
		border-left: 0;
	}
	.add_min i{
		float: left;
		display:block;
		border: 1px solid #999;
		width: 1.8rem;
		height: 1rem;
		font-size: 14px;
		line-height: 1rem;
		text-align: center;
		font-style: normal;
	}
	u{
		text-decoration: none;
		color:#f00;
	}
	.store-footer {
	  margin: 10px auto;
	  background: #fff;
	  padding: 5px 0;
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	  position: relative;
	  padding: 1rem;
	}
	.store-footer label{
		position: relative;
	}
	.store-footer input{
		position: absolute;
		left: 0;
		top: 2px;
		display:block;
		height: 1rem;
		width: 1rem;
		background:#efefef;
		border: 1px solid #999;
		border-radius: 100%;
	}
	.store-footer label span{
		display: inline-block;
		margin-left:20px;
	}
	.store-footer .cal-box{
	}
	.store-footer button{
	    width: 5rem;
	    height: 36px;
	    color: #ffffff;
	    font-size: 0.18rem;
	    background: #E60B49;
	    font-size: 0.18rem;
	    border-radius: 3px;
	    border: none;
	    outline: none;

	}
	.number{
		float: left;
	  height: 30px;
	  border: none;
	  text-align: center;
	    width: 1.5rem;
	    height: 1rem;
	    border: 1px solid #999;
	}
	.shop_price{
		
	}
	.shop_price p{
		text-align: right;
		font: 14px/24px "微软雅黑";
	}
	.shop_price span,.cal-box span{
		color:#f00;
	}
	.del{
		text-align: right;
	}
	.del span{
		color: #999;
        display: block; 
        margin-top: 5px;
	}
	.disable {
	  color: #aaa;
	  cursor: default;
	}
</style>