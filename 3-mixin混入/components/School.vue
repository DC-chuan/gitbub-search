<template>
  <div>
      <span>学校：{{name}}</span>
      <span>地址：{{adress}}</span>
      <button @click='Show'>点我</button>
  </div>
</template>

<script>
    import {mx} from '../mixin'
export default {
name:'School',
data(){
    return{
        name:'yt',
        adress:'hc'
    }
},
mixins:[mx],

}
</script>

<style>

</style>