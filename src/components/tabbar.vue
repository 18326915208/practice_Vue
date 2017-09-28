<template>
    <div class="m-tabbar">
       	<slot></slot>
    </div>
</template>
<script>
    import mTabbarItem from './tabbar-item.vue';
    export default {
    	props: ['value'],
    }
</script>
<style>

</style>