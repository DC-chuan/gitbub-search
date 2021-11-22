<template>
    <ul>
        <li>消息编号:{{ $route.params.id || $route.query.id}}</li>
        <li>消息标题：{{ $route.params.title || $route.query.id}}</li>
    </ul>
</template>

<script>
export default {
    name:'Detail',
    mounted(){
        console.log(this.$route);
    }
}
</script>

<style>

</style>