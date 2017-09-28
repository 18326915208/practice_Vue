<template>  
  <div class="page-navbar">  
    <div class="page-title">
    	<div class="goods_header">
				<div class="gd_hd_l" onClick="JavaScript :history.back(1);"></div>
				<span>分类</span>
			</div>
    </div>  
    <!-- navbar -->  
    <mt-navbar class="page-part" v-model="selected">  
      <!--<mt-tab-item  v-for="(item,ind) in arr" :id="ind+1">{{item}}</mt-tab-item>-->  
      <mt-tab-item id="1">鞋帽服饰</mt-tab-item>  
      <mt-tab-item id="2">母婴用品</mt-tab-item>
      <mt-tab-item id="3">厨具</mt-tab-item>  
      <mt-tab-item id="4">玩具乐器</mt-tab-item> 
      <mt-tab-item id="5">汽车用品</mt-tab-item>  
      <mt-tab-item id="6">运动健康</mt-tab-item> 
      <mt-tab-item id="7">食品饮料</mt-tab-item>  
      <mt-tab-item id="8">珠宝手表</mt-tab-item> 
      <mt-tab-item id="9">个体化妆</mt-tab-item>
      <mt-tab-item id="10">家用电器</mt-tab-item> 
      <mt-tab-item id="11">数码办公</mt-tab-item>  
      <mt-tab-item id="12">家居家装</mt-tab-item>
      <mt-tab-item id="13">礼品箱包</mt-tab-item> 
    </mt-navbar>  
    <div>  
      <mt-cell class="page-part" title="当前选中" style="margin-top: 45px;">{{ selected }}</mt-cell>  
    </div>  
  
    <!-- tabcontainer -->  
    <mt-tab-container v-model="selected">  
      <mt-tab-container-item id="1">  
        <mt-cell v-for="n in arr1" :title="n" />
      </mt-tab-container-item>  
      <mt-tab-container-item id="2">  
        <mt-cell v-for="n in 4" :title="'测试 ' + n" />  
      </mt-tab-container-item>  
      <mt-tab-container-item id="3">  
        <mt-cell v-for="n in 6" :title="'选项 ' + n" />  
      </mt-tab-container-item> 
      <mt-tab-container-item id="4">  
        <mt-cell v-for="n in 10" :title="'内容 ' + n" />  
      </mt-tab-container-item>  
      <mt-tab-container-item id="5">  
        <mt-cell v-for="n in 4" :title="'测试 ' + n" />  
      </mt-tab-container-item>  
      <mt-tab-container-item id="6">  
        <mt-cell v-for="n in 6" :title="'选项 ' + n" />  
      </mt-tab-container-item> 
      <mt-tab-container-item id="7">  
        <mt-cell v-for="n in 10" :title="'内容 ' + n" />  
      </mt-tab-container-item>  
      <mt-tab-container-item id="8">  
        <mt-cell v-for="n in 4" :title="'测试 ' + n" />  
      </mt-tab-container-item>  
      <mt-tab-container-item id="9">  
        <mt-cell v-for="n in 6" :title="'选项 ' + n" />  
      </mt-tab-container-item> 
      <mt-tab-container-item id="10">  
        <mt-cell v-for="n in 10" :title="'内容 ' + n" />  
      </mt-tab-container-item>  
      <mt-tab-container-item id="11">  
        <mt-cell v-for="n in 4" :title="'测试 ' + n" />  
      </mt-tab-container-item>  
      <mt-tab-container-item id="12">  
        <mt-cell v-for="n in 6" :title="'选项 ' + n" />  
      </mt-tab-container-item> 
      <mt-tab-container-item id="13">  
        <mt-cell v-for="n in 6" :title="'选项 ' + n" />  
      </mt-tab-container-item> 
    </mt-tab-container> 
  </div>  
</template>  
  
<script>  
	import { Navbar, TabItem } from 'mint-ui';
export default {  
  name: 'page-navbar',  
  
  data() {  
    return {  
      selected: '1' ,
      arr:["鞋帽服饰","母婴用品","厨具","玩具乐器","汽车用品","运动健康","食品饮料","珠宝手表","个体化妆","家用电器","数码办公","家居家装","礼品箱包"],
      arr1:["单鞋","棉鞋","球鞋","运动鞋","凉鞋","高更鞋","松糕鞋","帆布鞋","短靴","中筒靴","过膝靴","粗跟鞋"]
    };  
  }  
};  
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

	.mint-navbar {
	    width: 30%;
	    float: left;
    	display: block;
    	margin-top: 45px;
}

.mint-tab-container {
    float: right;
    width: 68%;
}
.mint-navbar .mint-tab-item{
	border-top: 1px solid #efefef;
}
.mint-navbar .mint-tab-item.is-selected {
    border-left: 3px solid #f00;
    color: #333;
    margin-bottom:0;
    background:#efefef;
    border-bottom: none;
    
}
.mint-cell{
	min-height: 47px;
}
.mint-cell.page-part{
	  width: 68%;
    float: right;
}
/*.mint-cell{
	  float: left;
    width: 49%;
    padding: 8px 0;
    border: 1px solid #f1f1f1;
    min-height: auto;
}
.mint-cell-wrapper { 
     background-image:none; 
     background-size:none; 
     background-repeat:none; 
     background-position: none; 
    background-origin:none;
 }*/
</style>