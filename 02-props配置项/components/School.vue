<template>
  <div>
      <span>学校：{{name}}</span>
      <span>地址：{{adress}}</span>
      <Student></Student>
  </div>
</template>

<script>
import Student from './Student.vue';
export default {
name:'School',
data(){
    return{
        name:'yt',
        adress:'hc'
    }
},
components:{
    Student
}

}
</script>

<style>

</style>