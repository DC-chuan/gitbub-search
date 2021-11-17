<template>
<div class="demo" ref="XS">
    <p ref="xs">姓名{{name}}</p>
    <button @click='Show'>点我获取一个元素</button>
    <p>年龄{{age}}</p>
    <Person name="李四" :age="18" sex="nan"></Person>
</div>
</template>
<script>
import Person from './Person'
// 
export default {
    name:'Student',
    data(){
        return{
            name:'zhangsan',
            age:18
        }
    },
    methods:{
        Show(){
            console.log(this.$refs.xs);
           
        }
    },
    components:{
        Person
    }
}
</script>
    
<style>
.demo{
    background-color: #ccc;
}
</style>