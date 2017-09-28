<template>
    <a class="mint-tab-item" :class="{'is-active':isActive}" @click="goToRouter">
        <span class="mint-tab-item-icon" v-show="!isActive"><slot name="icon-normal"></slot></span>
        <span class="mint-tab-item-icon" v-show="isActive"><slot name="icon-active"></slot></span>
        <span class="mint-tab-item-label"><slot></slot></span>
    </a>
</template>
<script>
    export default{
        props:{
        	id:{
        		type:String
        	},
        	isRouter:{
        		type:Boolean,
        		default:false
        	}
        },
        computed:{
           isActive(){
               if(this.$parent.value===this.id){
                   return true;
               }
           }
        },
        methods:{
        	goToRouter(){
        		this.$parent.$emit('input',this.id);
        		if(this.isRouter){
        			this.$router.push(this.id)
        		}
        	}
        }
    }
</script>
<style>

</style>