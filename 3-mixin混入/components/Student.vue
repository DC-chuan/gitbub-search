<template>
<div class="demo" >
    <p>姓名{{name}}</p>
    <button @click='Show'>点我</button>
    <p>年龄{{age}}</p>

</div>
</template>
<script>
import {mx} from '../mixin'
// 
export default {
    name:'Student',
    data(){
        return{
            name:'zhangsan',
            age:18
        }
    },
    mixins:[mx]
}
</script>
    
<style>
.demo{
    background-color: #ccc;
}
</style>