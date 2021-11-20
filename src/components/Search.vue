<template>
   <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model.trim='KeyWord'/>&nbsp;
        <button @click="SearchUser">Search</button>
      </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
    name:'Search',
    data(){
        return{
            KeyWord:''
        }
    },
    methods:{
        SearchUser(){
            // 校验数据
            if(!this.KeyWord) return alert('输入不能为空')
            this.$bus.$emit('ChangeLoading',true)
            axios.get(`https://api.github.com/search/users?q=${this.KeyWord}`,
            {timeout:2000}
            )
            .then(res=>{
               this.$bus.$emit('GetUserList',res.data.items)
            })
            .catch(err=>{
               this.$bus.$emit('CatchErr',err.message)
            })
            this.$bus.$emit('ChangeSearchState',false)    
        }
    }
}
</script>

<style>
   
</style>