<template>
  <div>
      <hr>
      <span>名字{{name}}</span>
      <span>年龄{{MyAge}}</span>
      <span>性别{{sex}}</span>
      <button @click='add'>点我长一岁</button>
  </div>
</template>

<script>
export default {
    name:'Person',
    data(){
        return{
            MyAge:this.age
        }
    },

    methods:{
        add(){
            this.MyAge++
        }
    },

    // 普通接收  不对数据进行约束
    // props:['name','age','sex']

    // 一般约束
    // props:{
    //     name:String,
    //     age:Number,
    //     sex:String 
    // }

    // 带有约束和默认值
    props:{
        name:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            default:20
        },
        sex:{
            type:String,
            required:true
        }
    }
}
</script>

<style>
    span{
        display: block;
        margin: 10px 0;
    }
</style>