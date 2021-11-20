<template>
  <div class="row" >
    <!-- 展示用户列表 -->
      <div class="card" 
      v-show='UserList'
      v-for=" u in UserList" 
      :key="u.id"
      >
        <a :href="u.html_url" target="_blank">
          <img :src="u.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{u.login}}</p>  
      </div>
      <!-- 展示欢迎 -->
      <h1 v-show="isFirst">欢迎使用</h1>
      <!-- 显示加载中 -->
      <h1 v-show="isLoading">wait for one moment</h1>
      <!-- 显示发生错误 -->
      <h1>{{ErrMsg}}</h1>
  </div>
</template>

<script>
export default {
    name:'List',
    data(){
      return{
        UserList:[],
        isFirst:true,
        isLoading:false,
        ErrMsg:''
      }
    },
    mounted(){
      this.$bus.$on('GetUserList',(data)=>{
        this.UserList = data;
        this.isLoading=false;
      })
      this.$bus.$on('CatchErr',data=>{
        this.ErrMsg = data;
        this.isLoading=false
      });
      this.$bus.$on('ChangeSearchState',data=>this.isFirst=data);
      this.$bus.$on('ChangeLoading',data=>this.isLoading=data)
    },
    beforeDestroy() {
      this.$bus.$off('ChangeSearchState')
       this.$bus.$off('ChangeLoading')
    },
}
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>