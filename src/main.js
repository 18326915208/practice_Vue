import Vue from 'vue';
import App from './App.vue';

import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import Vuex from "vuex";

//import Element from 'element-ui';
//import 'element-ui/lib/theme-default/index.css'
//Vue.use(Element);

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(MintUI);
Vue.use(Vuex);
import "./css.css";
import "./public.css";
//1、定义模板
import Index from "./components/index.vue";
import Goodsdetail from "./components/goodsdetail.vue";
import Kinds from "./components/kinds.vue";
import Navbar from "./components/navbar.vue";
import Cart from "./components/cart.vue";
import My from "./components/my.vue";
import Login from "./view/login.vue";
//2、配置路由
var routes=[
	{path:"/index",component:Index},
	{path:"/index/goodsdetail",component:Goodsdetail},
	{path:"/kinds",component:Kinds},
	{path:"/navbar",component:Navbar},
	{path:"/cart",component:Cart},
	{path:"/my",component:My},
	{path:"/my/login",component:Login},
	{path:"*",redirect:"/index"}
]
//3、获取路由实例
var router=new VueRouter({
	routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
