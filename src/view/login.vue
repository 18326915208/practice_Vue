<template>
	<div>
        <div class="login-wrap" v-show="showLogin">
            <h3>登录</h3>
            <p v-show="showTishi">{{tishi}}</p>
            <input type="text" placeholder="请输入用户名" v-model="username">
            <input type="password" placeholder="请输入密码" v-model="password">
            <button v-on:click="login">登录</button>
            <span v-on:click="ToRegister">没有账号？马上注册</span>
        </div>

        <div class="register-wrap" v-show="showRegister">
            <h3>注册</h3>
            <p v-show="showTishi">{{tishi}}</p>
            <input type="text" placeholder="请输入用户名" v-model="newUsername">
            <input type="password" placeholder="请输入密码" v-model="newPassword">
            <button v-on:click="register">注册</button>
            <span v-on:click="ToLogin">已有账号？马上登录</span>
        </div>
    </div>
</template>

<script>
	import {setCookie,getCookie} from '../assets/js/cookie.js'
	export default{
        data(){
            return{
                showLogin: true,
                showRegister: false,
                showTishi: false,
                tishi: '',
                username: '',
                password: '',
                newUsername: '',
                newPassword: ''
            }
        },
        mounted(){
		  /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
		    if(getCookie('username')){
		        this.$router.push('/my')
		    }
		  },
		  methods:{
		    login(){
		        if(this.username == "" || this.password == ""){
		            alert("请输入用户名或密码")
		        }else{
		            let data = {'username':this.username,'password':this.password,'status':"login"} ;
		            console.log(this.username)
		            /*接口请求*/
		           //http://datainfo.duapp.com/shopdata/userinfo.php    http://127.0.0.1:8020/v-mintui/src/php/userinfo.php
		           let url="http://127.0.0.1:8020/v-mintui/src/php/userinfo.php";
		            this.$http.jsonp(url,data)
		            .then((res)=>{
//		            	var data = JSON.parse(res.data); 
		                console.log(data);
		             /*接口的传值是(0,该用户不存在),(2,密码错误)，同时还会检测管理员账号的值*/
		              if(res.data == 0){
		                  this.tishi = "该用户不存在"
		                  this.showTishi = true
		              }else if(res.data == 2){
		                  this.tishi = "密码输入错误"
		                  this.showTishi = true
		              }else if(res.data == 'admin'){
		              /*路由跳转this.$router.push*/
		                  this.$router.push('/my')
		              }else{
		                  this.tishi = "登录成功"
		                  this.showTishi = true
		                  setCookie('username',this.username,1000*60)
		                  setTimeout(function(){
		                      this.$router.push('/my')
		                  }.bind(this),1000)
		              }
		          })
		      }
		    },
		    register(){
			    if(this.newUsername == "" || this.newPassword == ""){
			        alert("请输入用户名或密码")
			    }else{
			    	let url="http://127.0.0.1:8020/v-mintui/src/php/userinfo.php";
			        let data = {'username':this.newUsername,'password':this.newPassword,"status":"register"}
			        this.$http.jsonp(url,data).then((res)=>{
			            console.log(res)
			            if(res.data == 1){
			                this.tishi = "注册成功"
			                this.showTishi = true
			                this.username = ''
			                this.password = ''
			                 /*注册成功之后再跳回登录页*/
			                setTimeout(function(){
			                    this.showRegister = false
			                    this.showLogin = true
			                    this.showTishi = false
			                }.bind(this),1000)
			            }
			        })
			    }
			},
		    ToRegister(){
			    this.showRegister = true
			    this.showLogin = false
			},
			ToLogin(){
			    this.showRegister = false
			    this.showLogin = true
			}
		}
    }
</script>

<style scoped>
	.register-wrap{text-align: center;}
	.login-wrap{text-align:center;}
    input{display:block; width:250px; height:40px; line-height:40px; margin:0 auto; margin-bottom: 10px; outline:none; border:1px solid #888; padding:10px; box-sizing:border-box;}
    p{color:red;}
    button{display:block; width:250px; height:40px; line-height: 40px; margin:0 auto; border:none; background-color:#41b883; color:#fff; font-size:16px; margin-bottom:5px;}
    span{cursor:pointer;}
    span:hover{color:#41b883;}
    h3{line-height: 45px;}
</style>