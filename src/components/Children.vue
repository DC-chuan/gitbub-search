<template>
  <div class="container">
        <h2>学校名称{{name}}</h2>
        <h2>地址:{{adress}}</h2>
        <button @click="SendSchoolName">点我传递学校名字</button>    
        <button @click="OffDown">点我传递学校名字</button>     
  </div>
</template>

<script>
export default {
    name:'Children',
    data(){
        return{
            name:'移通学院',
            adress:'合川'
        }
    },
    methods:{
        SendSchoolName(){
            // vm.$emit( 'eventName', […args] )
            // 当ati 事件触发以后  传递一个参数this.name
            this.$emit('ati',this.name)
        },
        OffDown(){
            this.$emit('OffDown',this)
        }
    }
}
</script>

<style>

</style>